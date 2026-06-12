const express = require("express");
const cors = require("cors");
const path = require("path");
const { Pool } = require("pg");
const crypto = require("crypto");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3001;
const primaryDbUrl = process.env.DATABASE_URL || process.env.NEON_DATABASE_URL;

if (!primaryDbUrl) {
  console.error("Missing DATABASE_URL (or NEON_DATABASE_URL) in environment.");
  process.exit(1);
}

const pool = new Pool({
  connectionString: primaryDbUrl,
  ssl: { rejectUnauthorized: false }
});

const resetSessions = new Map();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

function formatRegistrationMessage({ name, userId, role, password }) {
  return [
    "Welcome to PRMSU Smart Campus Navigator!",
    `Name: ${name}`,
    `User ID: ${userId}`,
    `Role: ${role}`,
    `Password: ${password}`,
    "Confirmation: Your account registration is successful."
  ].join("\n");
}

function hashPassword(password) {
  return crypto.createHash("sha256").update(password).digest("hex");
}

function generateOtpCode() {
  return String(crypto.randomInt(100000, 1000000));
}

function generateResetToken() {
  return crypto.randomBytes(24).toString("hex");
}

function formatResetOtpMessage({ name, otp, expiresMinutes }) {
  return [
    "PRMSU Navigator Password Reset",
    `Hello ${name},`,
    `Your one-time password (OTP) is: ${otp}`,
    `This code expires in ${expiresMinutes} minutes.`,
    "If you did not request a password reset, please ignore this message."
  ].join("\n");
}

function formatPasswordChangedMessage({ name }) {
  return [
    "PRMSU Navigator Password Updated",
    `Hello ${name},`,
    "Your password has been updated successfully.",
    "If you did not make this change, contact support immediately."
  ].join("\n");
}

function normalizePhPhoneNumber(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  const digits = raw.replace(/[^0-9+]/g, "");
  if (digits.startsWith("+63")) return digits;
  if (digits.startsWith("63")) return `+${digits}`;
  if (digits.startsWith("0")) return `+63${digits.slice(1)}`;
  return digits;
}

async function sendBrevoEmail({ toEmail, toName, subject, textBody }) {
  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL;
  const senderName = process.env.BREVO_SENDER_NAME || "PRMSU Navigator";
  if (!apiKey || !senderEmail || !toEmail) {
    return { sent: false, reason: "Brevo not configured" };
  }

  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": apiKey
    },
    body: JSON.stringify({
      sender: { email: senderEmail, name: senderName },
      to: [{ email: toEmail, name: toName || toEmail }],
      subject,
      textContent: textBody
    })
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Brevo send failed: ${response.status} ${details}`);
  }
  return { sent: true };
}

async function sendPhilSms({ phone, message }) {
  const apiKey = process.env.PHILSMS_API_KEY;
  const senderId = process.env.PHILSMS_SENDER || "PHILSMS";
  const endpoint = process.env.PHILSMS_ENDPOINT || "https://app.philsms.com/api/v3/sms/send";
  const normalizedPhone = normalizePhPhoneNumber(phone);
  if (!apiKey || !normalizedPhone) {
    return { sent: false, reason: "PhilSMS not configured" };
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${apiKey}`
    },
    body: new URLSearchParams({
      recipient: normalizedPhone,
      sender_id: senderId,
      type: "plain",
      message
    }).toString()
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`PhilSMS send failed: ${response.status} ${details}`);
  }
  return { sent: true };
}

app.get("/api/health", async (_req, res) => {
  try {
    await pool.query("SELECT 1");
    res.status(200).json({
      ok: true,
      databases: {
        neon: "connected"
      }
    });
  } catch (error) {
    res.status(500).json({ ok: false, error: error.message });
  }
});

app.post("/api/notify-registration", async (req, res) => {
  const { userId, name, email, phone, role, password } = req.body || {};
  if (!userId || !name || !email || !phone || !role || !password) {
    return res.status(400).json({ ok: false, error: "Missing required registration notification fields." });
  }

  const subject = "PRMSU Navigator Registration Confirmation";
  const fullMessage = formatRegistrationMessage({ name, userId, role, password });
  const smsMessage = `PRMSU Reg OK. ID:${userId} Role:${role} Pass:${password}`;

  const result = {
    ok: true,
    channels: {
      email: "skipped",
      sms: "skipped"
    }
  };

  try {
    const emailResult = await sendBrevoEmail({
      toEmail: email,
      toName: name,
      subject,
      textBody: fullMessage
    });
    result.channels.email = emailResult.sent ? "sent" : emailResult.reason;
  } catch (error) {
    result.channels.email = `failed: ${error.message}`;
    result.ok = false;
  }

  try {
    const smsResult = await sendPhilSms({
      phone,
      message: smsMessage
    });
    result.channels.sms = smsResult.sent ? "sent" : smsResult.reason;
  } catch (error) {
    result.channels.sms = `failed: ${error.message}`;
    result.ok = false;
  }

  return res.status(result.ok ? 200 : 500).json(result);
});

app.post("/api/auth/register", async (req, res) => {
  const { name, email, phone, role, password } = req.body || {};
  if (!name || !email || !phone || !role || !password) {
    return res.status(400).json({ ok: false, error: "Missing required registration fields." });
  }

  const normalizedRole = String(role).toUpperCase();
  if (!["STUDENT", "EMPLOYEE", "VISITOR"].includes(normalizedRole)) {
    return res.status(400).json({ ok: false, error: "Invalid role." });
  }

  const passwordHash = hashPassword(password);

  try {
    const insertResult = await pool.query(
      `INSERT INTO users (full_name, email, phone, role, password_hash)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING user_id, full_name, email, phone, role, created_at`,
      [name.trim(), email.trim().toLowerCase(), phone.trim(), normalizedRole, passwordHash]
    );

    const user = insertResult.rows[0];

    const notifyPayload = {
      userId: user.user_id,
      name: user.full_name,
      email: user.email,
      phone: user.phone,
      role: user.role,
      password
    };

    const subject = "PRMSU Navigator Registration Confirmation";
    const fullMessage = formatRegistrationMessage(notifyPayload);
    const smsMessage = `PRMSU Reg OK. ID:${user.user_id} Role:${user.role} Pass:${password}`;
    const channels = { email: "skipped", sms: "skipped" };

    try {
      const emailResult = await sendBrevoEmail({
        toEmail: notifyPayload.email,
        toName: notifyPayload.name,
        subject,
        textBody: fullMessage
      });
      channels.email = emailResult.sent ? "sent" : emailResult.reason;
    } catch (error) {
      channels.email = `failed: ${error.message}`;
    }

    try {
      const smsResult = await sendPhilSms({
        phone: notifyPayload.phone,
        message: smsMessage
      });
      channels.sms = smsResult.sent ? "sent" : smsResult.reason;
    } catch (error) {
      channels.sms = `failed: ${error.message}`;
    }

    return res.status(201).json({
      ok: true,
      user: {
        userId: user.user_id,
        name: user.full_name,
        email: user.email,
        phone: user.phone,
        role: user.role
      },
      notifications: channels
    });
  } catch (error) {
    if (error.code === "23505") {
      return res.status(409).json({ ok: false, error: "Email or user ID already exists." });
    }
    return res.status(500).json({ ok: false, error: error.message });
  }
});

app.post("/api/auth/login", async (req, res) => {
  const { identifier, password } = req.body || {};
  if (!identifier || !password) {
    return res.status(400).json({ ok: false, error: "User ID and password are required." });
  }

  const normalizedIdentifier = String(identifier).trim().toLowerCase();
  const passwordHash = hashPassword(password);

  try {
    const result = await pool.query(
      `SELECT user_id, full_name, email, role
       FROM users
       WHERE (LOWER(email) = $1 OR LOWER(user_id) = $1)
         AND password_hash = $2
       LIMIT 1`,
      [normalizedIdentifier, passwordHash]
    );

    if (!result.rows.length) {
      return res.status(401).json({ ok: false, error: "Invalid user ID or password." });
    }

    const user = result.rows[0];
    return res.json({
      ok: true,
      user: {
        userId: user.user_id,
        name: user.full_name,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    return res.status(500).json({ ok: false, error: error.message });
  }
});

app.post("/api/auth/forgot/request", async (req, res) => {
  const { identifier, method } = req.body || {};
  if (!identifier) {
    return res.status(400).json({ ok: false, error: "Email or phone number is required." });
  }

  const normalizedMethod = (method || "email").toLowerCase();
  if (!['email', 'sms'].includes(normalizedMethod)) {
    return res.status(400).json({ ok: false, error: "Invalid reset method." });
  }

  try {
    const normalizedIdentifier = String(identifier).trim();
    const result = await pool.query(
      `SELECT user_id, full_name, email, phone
       FROM users
       WHERE ${normalizedMethod === 'email' ? 'LOWER(email)' : 'phone'} = $1
       LIMIT 1`,
      [normalizedMethod === 'email' ? normalizedIdentifier.toLowerCase() : normalizedIdentifier]
    );

    if (!result.rows.length) {
      const errorLabel = normalizedMethod === 'email' ? 'Email' : 'Phone number';
      return res.status(404).json({ ok: false, error: `${errorLabel} not found.` });
    }

    const user = result.rows[0];
    const otp = generateOtpCode();
    const expiresMinutes = 5;
    const expiresAt = Date.now() + expiresMinutes * 60 * 1000;

    if (normalizedMethod === "email") {
      const emailResult = await sendBrevoEmail({
        toEmail: user.email,
        toName: user.full_name,
        subject: "PRMSU Navigator Password Reset Code",
        textBody: formatResetOtpMessage({
          name: user.full_name,
          otp,
          expiresMinutes
        })
      });
      if (!emailResult.sent) {
        return res.status(503).json({ ok: false, error: emailResult.reason || "Email not configured." });
      }
    } else {
      const smsResult = await sendPhilSms({
        phone: user.phone,
        message: `PRMSU OTP ${otp}. Exp ${expiresMinutes}m.`
      });
      if (!smsResult.sent) {
        return res.status(503).json({ ok: false, error: smsResult.reason || "SMS not configured." });
      }
    }

    const resetKey = String(user.email).trim().toLowerCase();
    resetSessions.set(resetKey, {
      otp,
      expiresAt,
      method: normalizedMethod,
      verified: false,
      resetToken: null
    });

    return res.json({
      ok: true,
      email: user.email,
      expiresInSeconds: expiresMinutes * 60,
      delivery: { method: normalizedMethod, status: "sent" }
    });
  } catch (error) {
    return res.status(500).json({ ok: false, error: error.message });
  }
});

app.post("/api/auth/forgot/verify", async (req, res) => {
  const { email, otp } = req.body || {};
  if (!email || !otp) {
    return res.status(400).json({ ok: false, error: "Email and OTP are required." });
  }

  const entry = resetSessions.get(String(email).trim().toLowerCase());
  if (!entry) {
    return res.status(400).json({ ok: false, error: "Reset request not found." });
  }

  if (Date.now() > entry.expiresAt) {
    resetSessions.delete(String(email).trim().toLowerCase());
    return res.status(400).json({ ok: false, error: "OTP expired. Please request a new code." });
  }

  if (String(otp).trim() !== entry.otp) {
    return res.status(400).json({ ok: false, error: "Invalid OTP code." });
  }

  const resetToken = generateResetToken();
  resetSessions.set(String(email).trim().toLowerCase(), {
    ...entry,
    verified: true,
    resetToken
  });

  return res.json({ ok: true, resetToken });
});

app.post("/api/auth/forgot/reset", async (req, res) => {
  const { email, resetToken, newPassword } = req.body || {};
  if (!email || !resetToken || !newPassword) {
    return res.status(400).json({ ok: false, error: "Missing reset details." });
  }

  const key = String(email).trim().toLowerCase();
  const entry = resetSessions.get(key);
  if (!entry || !entry.verified || entry.resetToken !== resetToken) {
    return res.status(400).json({ ok: false, error: "Reset session invalid or expired." });
  }

  if (Date.now() > entry.expiresAt) {
    resetSessions.delete(key);
    return res.status(400).json({ ok: false, error: "Reset session expired. Please request a new code." });
  }

  try {
    const result = await pool.query(
      `UPDATE users
       SET password_hash = $1
       WHERE LOWER(email) = $2
       RETURNING full_name, email`,
      [hashPassword(newPassword), key]
    );

    if (!result.rows.length) {
      return res.status(404).json({ ok: false, error: "User not found." });
    }

    const user = result.rows[0];
    const notifications = { email: "skipped" };

    try {
      const emailResult = await sendBrevoEmail({
        toEmail: user.email,
        toName: user.full_name,
        subject: "PRMSU Navigator Password Updated",
        textBody: formatPasswordChangedMessage({ name: user.full_name })
      });
      notifications.email = emailResult.sent ? "sent" : emailResult.reason;
    } catch (error) {
      notifications.email = `failed: ${error.message}`;
    }

    resetSessions.delete(key);
    return res.json({ ok: true, notifications });
  } catch (error) {
    return res.status(500).json({ ok: false, error: error.message });
  }
});

app.post("/api/datasets", async (req, res) => {
  const { title, description, payload } = req.body;

  if (!title) {
    return res.status(400).json({ error: "title is required" });
  }

  try {
    const result = await pool.query(
      `INSERT INTO datasets (title, description, payload)
       VALUES ($1, $2, $3)
       RETURNING id, title, description, payload, created_at`,
      [title, description || null, payload || null]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/datasets", async (_req, res) => {
  try {
    const result = await pool.query(
      "SELECT id, title, description, payload, created_at FROM datasets ORDER BY created_at DESC"
    );
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Role middleware
function requireRole(...roles) {
    return (req, res, next) => {
        const userRole = req.headers['x-user-role'];
        if (!userRole || !roles.includes(userRole)) {
            return res.status(403).json({ ok: false, error: 'Access denied' });
        }
        next();
    };
}

// ✅ Get all users (admin only)
app.get('/api/users', requireRole('ADMIN'), async (req, res) => {
    const result = await pool.query(
        'SELECT user_id, full_name, email, role FROM users ORDER BY created_at DESC'
    );
    res.json({ ok: true, users: result.rows });
});

// ✅ Update user role (admin only)
app.patch('/api/users/:id/role', requireRole('ADMIN'), async (req, res) => {
    const { role } = req.body;
    const allowedRoles = ['STUDENT', 'EMPLOYEE', 'VISITOR', 'ADMIN'];
    if (!allowedRoles.includes(role)) {
        return res.status(400).json({ ok: false, error: 'Invalid role' });
    }
    await pool.query(
        'UPDATE users SET role = $1 WHERE user_id = $2',
        [role, req.params.id]
    );
    res.json({ ok: true });
});

app.listen(port, () => {
  console.log(`Neon API running on http://localhost:${port}`);
});
