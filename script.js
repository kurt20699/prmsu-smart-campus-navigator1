// Campus Data with real coordinates
// Campus Data with real coordinates and boundaries
const campusData = {
    iba: {
        name: "Iba Campus",
        center: { lat: 15.31846, lng: 119.98388 },
        zoom: 17,
        boundary: [
            [15.319557427098843, 119.98532279621844],  // Point 1 - Starting point (East side)
            [15.319581842835973, 119.98526771782667],  // Point 2
            [15.319643774836472, 119.98521915685589],  // Point 3
            [15.31971780828745, 119.98516898928784],   // Point 4
            [15.319767402217138, 119.98514511609602],  // Point 5
            [15.319885547520414, 119.98501618965793],  // Point 6
            [15.319899203673842, 119.98499385044124],  // Point 7
            [15.319951885444032, 119.98490989340732],  // Point 8
            [15.320001150019689, 119.98483067534404],  // Point 9
            [15.3201031414007, 119.98467448539415],    // Point 10
            [15.320300021009217, 119.98436592733788],  // Point 11 (Northeast corner)
            [15.320143509927242, 119.98421012726033],  // Point 12
            [15.319993516357215, 119.98406376469012],  // Point 13
            [15.319891613713715, 119.98387404344285],  // Point 14
            [15.319803100064348, 119.98370659533941],  // Point 15
            [15.31957193799758, 119.98326787274604],   // Point 16
            [15.319414921924249, 119.98307625543697],  // Point 17
            [15.319336411646743, 119.98297957932228],  // Point 18
            [15.319330802220644, 119.98293956905079],  // Point 19
            [15.31932169670889, 119.98289340608454],   // Point 20
            [15.319311023652418, 119.98283016872233],  // Point 21
            [15.319406352073202, 119.98219752507367],  // Point 22
            [15.319375457793342, 119.98175711624634],  // Point 23 (Northwest area)
            [15.319375629988386, 119.98175702039657],  // Point 24
            [15.31907771829789, 119.98169313150026],   // Point 25
            [15.318320492398513, 119.98162517449401],  // Point 26
            [15.318050634503166, 119.98177935199033],  // Point 27
            [15.317888189745446, 119.98174229175828],  // Point 28
            [15.317856138349882, 119.98173419920636],  // Point 29
            [15.31779006893953, 119.98171769353934],   // Point 30 (Southwest corner)
            [15.316818355118315, 119.98284506255612],  // Point 31
            [15.31676969491052, 119.98289862478788],   // Point 32
            [15.316722132713025, 119.98295182453586],  // Point 33
            [15.316466765915976, 119.98325457923119],  // Point 34
            [15.31647518298493, 119.98330105137191],   // Point 35
            [15.31649210640515, 119.98331861596108],   // Point 36
            [15.316646938600087, 119.98347111085195],  // Point 37 (South area)
            [15.317942142616204, 119.98474499859955],  // Point 38
            [15.319265545365212, 119.98598825258756],  // Point 39 (Southeast corner)
            [15.319265579992091, 119.98598712688607],  // Point 40
            [15.319360088441343, 119.98578774798978],  // Point 41
            [15.319361441453708, 119.98578590493827],  // Point 42
            [15.31955743217236, 119.98532335566506],   // Point 43
            [15.319557427098843, 119.98532279621844]   // Point 44 - Closing point (same as Point 1)
        ],
        locations: [
            { 
                id: 1,
                name: "College of Communication and Information Technology",
                shortName: "CCIT",
                labelOffset: [9, -13, 41],
                type: "department", 
                coords: [15.31695, 119.98315],
                description: "Building housing programs in Communication, Information Technology, and related fields.",
                photo: "images/department/ccit/jpg/1.jpg",
                image: "images/department/ccit/jpg/1.jpg",
                tourPhotos: [
                    {
                        floor: "1st Floor",
                        spots: [
                            { label: "First Floor", src: "images/department/ccit/png/ccit-floor1.png" },
                            { label: "First Floor", src: "images/department/ccit/jpg/ccit-floor2.jpg" },
                            { label: "First Floor", src: "images/department/ccit/jpg/ccit-floor3.jpg" },
                            { label: "First Floor", src: "images/department/ccit/jpg/ccit-floor4.jpg" },
                            { label: "First Floor", src: "images/department/ccit/jpg/ccit-floor5.jpg" },
                            { label: "First Floor", src: "images/department/ccit/jpg/ccit-floor6.jpg" },
                            { label: "First Floor", src: "images/department/ccit/jpg/ccit-floor7.jpg" },
                            { label: "First Floor", src: "images/department/ccit/jpg/ccit-floor8.jpg" },           
                        ]
                    },
                    {
                        floor: "2nd Floor",
                        spots: [
                            { label: "Second Floor", src: "images/department/ccit/jpg/ccit-floor2.1.jpg" },
                            { label: "Second Floor", src: "images/department/ccit/jpg/ccit-floor2.2.jpg" },
                            { label: "Second Floor", src: "images/department/ccit/jpg/ccit-floor2.3.jpg" },
                            { label: "Second Floor", src: "images/department/ccit/jpg/ccit-floor2.4.jpg" },
                            { label: "Second Floor", src: "images/department/ccit/jpg/ccit-floor2.5.jpg" },
                            { label: "Second Floor", src: "images/department/ccit/jpg/ccit-floor2.6.jpg" },
                        ]
                    },
                    {
                        floor: "3rd Floor",
                        spots: [
                            { label: "Third Floor", src: "images/department/ccit/jpg/ccit-floor3.1.jpg" },
                            { label: "Third Floor", src: "images/department/ccit/jpg/ccit-floor3.2.jpg" },
                            { label: "Third Floor", src: "images/department/ccit/jpg/ccit-floor3.3.jpg" },
                            { label: "Third Floor", src: "images/department/ccit/jpg/ccit-floor3.4.jpg" },
                            { label: "Third Floor", src: "images/department/ccit/jpg/ccit-floor3.5.jpg" },
                            { label: "Third Floor", src: "images/department/ccit/jpg/ccit-floor3.6.jpg" },
                        ]
                    }
                ],
                rooms: [                 
                    { id: 101, name: "SBO Office", coords: [15.31758, 119.98223 ], floor: "Ground Floor", iconOffset: [0, 0] },  
                    { id: 102, name: "CCIT Room 5", coords: [15.31754, 119.98227], floor: "Ground Floor", iconOffset: [0, 0], instructor: "Mr. Joseph J. Juliano" },
                    { id: 103, name: "CCIT Room 4", coords: [15.31751, 119.98231], floor: "Ground Floor", iconOffset: [0, 0], instructor: "Mr. Daniel A. Bachillar"},
                    { id: 104, name: "CCIT Room 3", coords: [15.31747, 119.98235], floor: "Ground Floor", iconOffset: [0, 0], instructor: "Mr. Hansel S. Ada" },
                    { id: 105, name: "CCIT Room 2", coords: [15.31744, 119.98239], floor: "Ground Floor", iconOffset: [0, 0], instructor: "Engr. Melojean C. Marave" },       
                    { id: 106, name: "CCIT Room 1", coords: [15.31740, 119.98243], floor: "Ground Floor", iconOffset: [0, 0], instructor: "Mr. Israel M. Cabasug" },

                    { id: 107, name: "CCIT Room 11", coords: [15.31758, 119.98221], floor: "2nd Floor", iconOffset: [-5, 15], instructor: "Mr. Jason S. Artates" },
                    { id: 108, name: "CCIT Room 10", coords: [15.31754, 119.98225], floor: "2nd Floor", iconOffset: [-5, 15], instructor: "Mr. Darwin Moraña" },
                    { id: 109, name: "CCIT Room 9", coords: [15.31751, 119.98229], floor: "2nd Floor", iconOffset: [-5, 16], instructor: "Mr. Jiel M. Dullas Jr." },
                    { id: 110, name: "CCIT Room 8", coords: [15.31747, 119.98233], floor: "2nd Floor", iconOffset: [-5, 16], instructor: "Mr. Daryll John C. Ragadio" },   
                    { id: 111, name: "CCIT Room 7", coords: [15.31744, 119.98237], floor: "2nd Floor", iconOffset: [-5, 17], instructor: "Dr. Geoffrey S. Sepillo" },
                    { id: 112, name: "CCIT Room 6", coords: [15.31740, 119.98240], floor: "2nd Floor", iconOffset: [-4, 14], instructor: "Engr. Carl Angelo S. Pamplona"},

                    { id: 113, name: "Storage Room", coords: [15.31688, 119.98322], floor: "Ground Floor", iconOffset: [0, 0] },
                    { id: 114, name: "Faculty Office", coords: [15.31690, 119.98320], floor: "Ground Floor", iconOffset:[-1, 0] },
                    { id: 115, name: "Programs Chair’s Office", coords:[15.31692, 119.98318], floor: "Ground Floor", iconOffset: [-1, 2] },
                    { id: 116, name: "Multi Media Center", coords: [15.31694, 119.98316], floor: "Ground Floor", iconOffset:[-1, 2] }, 
                    { id: 117, name: "Dean’s Office", coords: [15.31696, 119.98314], floor: "Ground Floor", iconOffset: [-3, 1] },
                    { id: 118, name: "Storage Room", coords: [15.31698, 119.98312], floor: "Ground Floor", iconOffset: [-5, 0] },
                    { id: 119, name: "Comfort Room (F/M)", coords:[15.31700, 119.98310], floor:"Ground Floor" , iconOffset:[-7, 0]},
                    { id: 120, name: "Programs Chair’s Office", coords: [15.31702, 119.98308], floor: "Ground Floor", iconOffset: [-9, -1] },

                    { id: 201, name: "Hybrid Laboratory 1", coords: [15.31695, 119.98330], floor: "2nd Floor", iconOffset: [-14, 14] },
                    { id: 202, name: "Computer Laboratory 1", coords: [15.31697, 119.98328], floor: "2nd Floor", iconOffset: [-20, 10] },
                    { id: 203, name: "Hybrid Laboratory 2", coords: [15.31699, 119.98326], floor: "2nd Floor", iconOffset: [-26, 6] },
                    { id: 204, name: "Laboratory Custodian Office", coords: [15.31701, 119.98324], floor: "2nd Floor", iconOffset: [-32, 2] },
                    { id: 205, name: "Comfort Room (F/M)", coords: [15.31703, 119.98322], floor: "2nd Floor", iconOffset: [-38, -2] },
                    { id: 206, name:"Faculty", coords:[15.31705, 119.98320], floor:"2nd Floor", iconOffset:[-44,-6]},

                    { id: 301, name: "Hybrid Laboratory 3", coords: [15.31695, 119.98330], floor: "3rd Floor", iconOffset: [0, 0] },
                    { id: 302, name: "Computer Laboratory 3", coords: [15.31697, 119.98328], floor: "3rd Floor", iconOffset: [-6, -4] },
                    { id: 303, name: "Computer Laboratory 2", coords: [15.31699, 119.98326], floor: "3rd Floor", iconOffset: [-12, -8] },
                    { id: 304, name: "Extension Office", coords: [15.31701, 119.98324], floor: "3rd Floor", iconOffset: [-18, -12] },
                    { id: 305, name: "Comfort Room (F/M)", coords: [15.31703, 119.98322], floor: "3rd Floor", iconOffset: [-24, -16] },
                    { id: 306, name:"Faculty", coords:[15.31705, 119.98320], floor:"3rd Floor", iconOffset:[-30,-20]},
                ]
            },
            {
                id: 2,
                name: "College of Nursing",
                shortName: "CON",
                labelOffset: [5, 20, 41],
                type: "department",
                coords: [15.31736, 119.98247],
                description: "Trains students to provide compassionate, skilled, and professional nursing care.",
                photo: "images/department/nursing/jpg/5.jpg",
                image: "images/department/nursing/jpg/5.jpg",
                rooms: [
                    { id: 201, name: "Lecture Room 6", coords: [15.31735, 119.98249], floor: "2nd Floor", iconOffset: [-17, 15] },
                    { id: 202, name: "Lecture Room 5", coords: [15.31730, 119.98254], floor: "2nd Floor", iconOffset: [-15, 15] },
                    { id: 203, name: "Lecture Room 4", coords: [15.31725, 119.98259], floor: "2nd Floor", iconOffset: [-13, 15] },
                    { id: 204, name: "Lecture Room 3", coords: [15.31720, 119.98264], floor: "2nd Floor", iconOffset: [-11, 15] },
                    { id: 205, name: "Lecture Room 2", coords: [15.31715, 119.98269], floor: "2nd Floor", iconOffset: [-9, 16] },
                    { id: 206, name: "Lecture Room 1", coords: [15.31710, 119.98274], floor: "2nd Floor", iconOffset:[-7, 16]},
                    { id: 207, name: "CSBO Office", coords: [15.31705, 119.98279], floor: "2nd Floor", iconOffset: [-5, 15] },

                    { id: 101, name: "Dean’s Office/Faculty Room", coords: [15.31705, 119.98277], floor: "Ground Floor", iconOffset: [16, 1] },
                    { id: 102, name: "Science Laboratory", coords: [15.31710, 119.98272], floor: "Ground Floor", iconOffset: [13, 0] },
                    { id: 103, name: "Old Skill Laboratory", coords: [15.31715, 119.98267], floor: "Ground Floor", iconOffset: [10, -1] },
                    { id: 104, name: "Accreditation Room", coords: [15.31720, 119.98262], floor: "Ground Floor",    iconOffset: [7, -2] },
                ]
            },
            {
                id: 3,
                name: "College of Engineering",             
                shortName: "COE",
                labelOffset: [25, 0, 41],
                type: "department",
                coords: [15.31770, 119.98199],
                description:"Develops skilled engineers equipped for innovation, problem-solving, and technological advancement.",
                photo: "images/department/coe/jpg/7.jpg",
                image: "images/department/coe/jpg/7.jpg",
                rooms: [
                    { id: 101, name: "COE 103 CMR&SOIL Mechanics Laboratory", coords: [15.31766, 119.98213], floor: "Ground Floor", iconOffset: [10, 10] },
                    { id: 102, name: "COE 102 Hydraulics Laboratory", coords: [15.31771, 119.98208], floor: "Ground Floor", iconOffset: [13, 15] },
                    { id: 103, name: "Civil Engineering Department Faculty Room", coords: [15.31776, 119.98203], floor: "Ground Floor", iconOffset: [17, 20] },
                    { id: 104, name: "Comfort Room (F/M)", coords: [15.31781, 119.98198], floor: "Ground Floor", iconOffset: [22, 25] },
                    { id: 105, name: "Storage Room", coords: [15.31786, 119.98193], floor: "1st Floor", iconOffset: [26, 30] },
                    
                    { id: 201, name: "COE Computer Laboratory", coords: [15.31763, 119.98214], floor: "2nd Floor", iconOffset: [-70, -50] },
                    { id: 202, name: "COE 201 Classroom", coords: [15.31768, 119.98209], floor: "2nd Floor", iconOffset: [-30, -10] },
                    { id: 203, name: "COE 202 Classroom", coords: [15.31773, 119.98204], floor: "2nd Floor", iconOffset: [10, 30] },
                    { id: 204, name: "COE 203 Classroom", coords: [15.31778, 119.98199], floor: "2nd Floor", iconOffset: [50, 70] },
                ]
            },
            {
                id: 4,
                name: "College of Physical Education",
                shortName: "",
                labelOffset: [-5, 5, 0],
                type: "department",
                coords: [15.31801, 119.98239],
                description: "Develops skilled professionals in sports, fitness, and health education.",
                photo: "images/department/cpe/jpg/6.jpg",
                image: "images/department/cpe/jpg/6.jpg",
                rooms: [
                    {id: 101, name: "Faculty Room P.E Department", coords: [15.31841, 119.98239], floor: "1st Floor", iconOffset: [-5, 0] },
                    {id: 102, name: "BPED 1B", coords: [15.31802, 119.98239], floor: "1st Floor", iconOffset: [-5, 0] },
                    {id: 103, name: "BPED", coords: [15.31795, 119.98239], floor: "1st Floor", iconOffset: [-5, 0] },
                    {id: 104, name: "BPED", coords: [15.31795, 119.98239], floor: "1st Floor", iconOffset: [-75, 0] },
                    {id: 105, name: "BPED", coords: [15.31802, 119.98239], floor: "1st Floor", iconOffset: [-75, 0] },
                    {id: 106, name: "Comfort Room (F/M)", coords: [15.31795, 119.98239], floor: "1st Floor", iconOffset: [-40, 0] },

                    {id: 201, name: "NSTP Office", coords: [15.31836, 119.98239], floor: "2nd Floor", iconOffset: [-5, 0] },
                    {id: 202, name: "Crim P.E Area", coords: [15.31836, 119.98232], floor: "2nd Floor", iconOffset: [-5, 0] },
                    {id: 203, name: "CRIM Scene Room Station 3", coords: [15.31836, 119.98225], floor: "2nd Floor", iconOffset: [-5, 0] },
                    {id: 204, name: "Comfort Room (F/M)", coords: [15.31836, 119.98218], floor: "2nd Floor", iconOffset: [-5, 0] },
                ]
            },
            {
                id: 5,
                name: "Gymnasium",
                shortName: "",
                labelOffset: [-15, 20, 0],
                type: "facilities",
                coords: [15.31845, 119.98233],
                description: "Indoor basketball court, fitness center, and sports facilities",
                photo: "images/facilities/gymnasium/jpg/9.jpg",
                image: "images/facilities/gymnasium/jpg/9.jpg",
                rooms: []
            },
            {
                id: 6,
                name: "Science and Engineering Laboratory Building",               
                shortName: "SELB",
                labelOffset: [-19, -50, -86],
                type: "department",
                coords: [15.31856, 119.98192],
                description: "Supports research, experiments, and practical learning in science and engineering disciplines.",
                photo: "images/department/selb/jpg/8.jpg",
                image: "images/department/selb/jpg/8.jpg",  
                rooms: [
                    { id: 100, name: "SELB 100 Dean’s Office", coords: [15.31832, 119.98186], floor: "Ground Floor", iconOffset: [5, 0] },
                    { id: 101, name: "SELB 101 Mechanical Engineering Department", coords: [15.31839, 119.98186], floor: "Ground Floor", iconOffset: [6, 0] },
                    { id: 102, name: "SELB 102 Audio Visual Room", coords: [15.31846, 119.98186], floor: "Ground Floor", iconOffset: [7, 0] },
                    { id: 103, name: "SELB 103 Mechanical Engineering Laboratory Room 1", coords: [15.31853, 119.98186], floor: "Ground Floor", iconOffset: [8, 0] },
                    { id: 104, name: "SELB 104 Mechanical Engineering Laboratory Room 2", coords: [15.31860, 119.98186], floor: "Ground Floor", iconOffset: [9, 0] },
                    { id: 105, name: "Comfort Room", coords: [15.31867, 119.98186], floor: "Ground Floor", iconOffset: [10, 0] },
                    
                    { id: 205, name: "SELB 205 Electrical Engineering Department", coords: [15.31832, 119.98184], floor: "2nd Floor", iconOffset: [0, -1] },
                    { id: 204, name: "SELB 204 Physical Lab", coords: [15.31839, 119.98184], floor: "2nd Floor", iconOffset: [1, -1] },
                    { id: 203, name: "SELB 203 EE and ECE Laboratory Room", coords: [15.31846, 119.98184], floor: "2nd Floor", iconOffset: [2, -1] },
                    { id: 202, name: "SELB 202 Electrical Engineering Laboratory Room 2", coords: [15.31853, 119.98184], floor: "2nd Floor", iconOffset: [3, -1] },
                    { id: 201, name: "SELB 201 Electrical Engineering Laboratory Room 1", coords: [15.31860, 119.98184], floor: "2nd Floor", iconOffset: [4, -1] },
                    { id: 206, name: "Comfort Room", coords: [15.31867, 119.98184], floor: "2nd Floor", iconOffset: [5, -1] },
                    
                    { id: 301, name: "SELB 301 Computer Engineering Department", coords: [15.31832, 119.98182], floor: "3rd Floor", iconOffset: [-5, -2] },
                    { id: 302, name: "SELB 302A Software Engineering Laboratory Room", coords: [15.31839, 119.98182], floor: "3rd Floor", iconOffset: [-4, -2] },
                    { id: 303, name: "SELB 303B Networking Laboratory Room", coords: [15.31846, 119.98182], floor: "3rd Floor", iconOffset: [-3, -2] },
                    { id: 304, name: "SELB 304 Chemistry Laboratory Room", coords: [15.31853, 119.98182], floor: "3rd Floor", iconOffset: [-2, -2] },
                    { id: 305, name: "SELB 305 Digital Electronics Laboratory Room", coords: [15.31860, 119.98182], floor: "3rd Floor", iconOffset: [-1, -2]},
                    { id: 306, name: "Comfort Room", coords: [15.31867, 119.98182], floor: "3rd Floor", iconOffset: [0, -2] }
                ]
            },
            {
                id: 7,  
                name: "College of Business Accountancy and Public Administration",
                shortName: "CBAPA",
                labelOffset: [0, -15, 11],
                type: "department",
                coords: [15.31915, 119.98228],
                description: "",
                photo: "images/department/cbapa/jpg/10.jpg",
                image: "images/department/cbapa/jpg/10.jpg",
                rooms: [
                    { id: 101, name: "Comfort Room", coords: [15.31919, 119.98216], floor: "Ground Floor", iconOffset: [0, 0] },
                    { id: 102, name: "CBAPA Faculty", coords: [15.31918, 119.98222], floor: "Ground Floor", iconOffset: [0, 2] },
                    { id: 103, name: "CBAPA Room 101", coords: [15.31917, 119.98228], floor: "Ground Floor", iconOffset: [0, 2] },
                    { id: 104, name: "CBAPA ROOM 102", coords: [15.31916, 119.98234], floor: "Ground Floor", iconOffset: [0, 3] },
                    { id: 105, name: "Research Office", coords: [15.31915, 119.98240], floor: "Ground Floor", iconOffset: [0, 4] },

                    { id: 201, name: "Supply Room", coords: [15.31921, 119.98216], floor: "2nd Floor", iconOffset: [2, -8] },
                    { id: 202, name: "CBAPA Room 203", coords: [15.31920, 119.98222], floor: "2nd Floor", iconOffset: [2, -7] },
                    { id: 203, name: "CBAPA Room 202", coords: [15.31919, 119.98228], floor: "2nd Floor", iconOffset: [2, -6] },
                    { id: 204, name: "CBAPA ROOM 201", coords: [15.31918, 119.98234], floor: "2nd Floor", iconOffset: [2, -4] },
                    { id: 205, name: "Accreditation Room", coords: [15.31917, 119.98240], floor: "2nd Floor", iconOffset: [2, -4] },
                    { id: 301, name: "Comfort Room", coords: [15.31923, 119.98216], floor: "3rd Floor", iconOffset: [4, -15] },
                    { id: 302, name: "CBAPA AVR", coords: [15.31922, 119.98222], floor: "3rd Floor", iconOffset: [4, -14] },
                    { id: 303, name: "CBAPA Room 301", coords: [15.31921, 119.98228], floor: "3rd Floor", iconOffset: [4, -13] },
                    { id: 304, name: "CBAPA ROOM 302", coords: [15.31920, 119.98234], floor: "3rd Floor", iconOffset: [4, -12] },
                    { id: 305, name: "Extension Service Office", coords: [15.31919, 119.98240], floor: "3rd Floor", iconOffset: [4, -11] },
                ]
            },
            {
                id: 8,
                name: "College of Law",
                shortName: "LAW",
                labelOffset: [-13, 18, 12],
                type: "department",
                coords: [15.31911, 119.98302],
                description: "",
                photo: "images/department/law/jpg/12.jpg",
                image: "images/department/law/jpg/12.jpg",
                rooms: []
            },
            {
                id: 9,
                name: "Admin Building",
                shortName: "ADMIN",
                labelOffset: [0, 5, 36],
                type: "administration",
                coords: [15.31839, 119.98359],
                description: "Main administrative building of PRMSU housing key offices and academic departments",
                photo: "images/administration/admin-building/jpg/15.jpg",
                image: "images/administration/admin-building/jpg/15.jpg",
                rooms: [
                    { id: 101, name: "Collecting and Disbursing Office", coords: [15.31848, 119.98348], floor: "Ground Floor", iconOffset: [-5, -10] },
                    { id: 102, name: "Office of the Resident Auditor", coords: [15.31844, 119.98354], floor: "Ground Floor", iconOffset: [-14, -15] },
                    { id: 103, name: "Cashier", coords: [15.31840, 119.98360], floor: "Ground Floor", iconOffset: [-22, -20] },
                    { id: 104, name: "Budgeting Services Office", coords: [15.31836, 119.98366], floor: "Ground Floor", iconOffset: [-31, -24] },
                    { id: 105, name: "Human Resources Management Office", coords: [15.31832, 119.98372], floor: "Ground Floor", iconOffset: [-39, -29] },
                    { id: 106, name: "Accounting Services Office", coords: [15.31828, 119.98378], floor: "Ground Floor", iconOffset: [-47, -33] },
                    { id: 107, name: "Chief Administrative Officer Director, Admin Services", coords: [15.31824, 119.98384], floor: "Ground Floor", iconOffset: [-55, -39] },
                    { id: 108, name: "Comfort Room", coords: [15.31820, 119.98390], floor: "Ground Floor", iconOffset: [-63, -43] },

                    { id: 201, name: "Procurement Management Office", coords: [15.31842, 119.98340], floor: "2nd Floor", iconOffset: [14, -19] },
                    { id: 202, name: "Office of the Vice President for Planning and Quality Management", coords: [15.31839, 119.98344], floor: "2nd Floor", iconOffset: [12, -21] },
                    { id: 203, name: "Office of the Vice President for Academic Affairs", coords: [15.31836, 119.98348], floor: "2nd Floor", iconOffset: [11, -21] },
                    { id: 204, name: "Office of the Vice President for Research and Development", coords: [15.31833, 119.98352], floor: "2nd Floor", iconOffset: [11, -22] },
                    { id: 205, name: "Office of the University President", coords: [15.31830, 119.98356], floor: "2nd Floor", iconOffset: [10, -22] },
                    { id: 206, name: "Office of the Vice President for Administration and Finance", coords: [15.31827, 119.98360], floor: "2nd Floor", iconOffset: [9, -22] },
                    { id: 207, name: "Office of the University and Board Secretary", coords: [15.31824, 119.98364], floor: "2nd Floor", iconOffset: [8, -23] },
                    { id: 208, name: "Interview Room", coords: [15.31821, 119.98368], floor: "2nd Floor", iconOffset: [7, -23] },

                    { id: 301, name: "Information & Communications Technology Office", coords: [15.31835, 119.98334], floor: "3rd Floor", iconOffset: [25, -31] },
                    { id: 302, name: "Internal Audit Services Office", coords: [15.31832, 119.98338], floor: "3rd Floor", iconOffset: [24, -33] },
                    { id: 303, name: "Futures Thinking Innovation Workspace", coords: [15.31829, 119.98342], floor: "3rd Floor", iconOffset: [23, -33] },
                    { id: 304, name: "Statistical Services Intellectual Property Service Office", coords: [15.31826, 119.98346], floor: "3rd Floor", iconOffset: [22, -34] },
                    { id: 305, name: "Office of the University and Board Secretary (Records Room)", coords: [15.31823, 119.98350], floor: "3rd Floor", iconOffset: [21, -34] },
                    { id: 306, name: "Research and Development, Extension and Production Services Office", coords: [15.31820, 119.98354], floor: "3rd Floor", iconOffset: [20, -34] },
                    { id: 307, name: "Project Development Office", coords: [15.31817, 119.98358], floor: "3rd Floor", iconOffset: [19, -35] },

                    { id: 401, name: "Records Management Services Office", coords: [15.31835, 119.98334], floor: "4th Floor", iconOffset: [14, -16] },
                ]
            },
            {
                id: 10,
                name: "President Ramon Magsaysay Statue PRMSU",
                shortName: "STATUE",
                labelOffset: [-7, 18, 36],
                type: "landmark",
                coords: [15.31860, 119.98378],
                description: "A commemorative statue honoring President Ramon Magsaysay, symbolizing leadership and integrity at PRMSU.",
                photo: "images/landmark/statue/jpg/16.jpg",
                image: "images/landmark/statue/jpg/16.jpg", 
            },
            {
                id: 11,
                name: "PRMSU Registrar Building",
                shortName: "REGISTRAR",
                labelOffset: [23, 0, -55],
                type: "administration",
                coords: [15.31877, 119.98431],
                description: "Building dedicated to student records, enrollment, and academic documentation services.",
                photo: "images/administration/registrar-building/jpg/30.jpg",
                image: "images/administration/registrar-building/jpg/30.jpg", 
                rooms: ["Registrar’s Office", "Records Section", "Evaluation Room", "Releasing Section", "Waiting Area"]
            },
            {
                id: 12,
                name: "E-Library",
                shortName: "LIBRARY",
                labelOffset: [-5, 25, -52],
                type: "facilities",
                coords: [15.31887, 119.98500],
                description: "Digital library providing online resources, study spaces, and computer access for students and faculty.",
                photo: "images/facilities/e-library/jpg/27.jpg",
                image: "images/facilities/e-library/jpg/27.jpg", 
                rooms: ["Computer Section", "Reading Area", "Discussion Room", "Faculty Resource Area", "Printing and Scanning Section"]
            },
            {
                id: 13,
                name: "College of Tourism and Hospitality Management",
                shortName: "CTHM",
                labelOffset: [0, 32, 35],
                type: "department",
                coords: [15.31975, 119.98435],
                description: "Academic building for Tourism and Hospitality programs, featuring training laboratories and classrooms..",
                photo: "images/department/cthm/jpg/20.jpg",
                image: "images/department/cthm/jpg/20.jpg", 
                rooms: [
                    { id: 101, name: "Dean’s Office", coords: [15.31960, 119.98450], floor: "Ground Floor", iconOffset: [0, 0] },
                    { id: 102, name: "CTHM Room 107 & CTHM AVR Room", coords: [15.31966, 119.98441], floor: "Ground Floor", iconOffset: [0, 0] },
                    { id: 103, name: "CTHM Room 109", coords: [15.31972, 119.98432], floor: "Ground Floor", iconOffset: [0, 0] },
                    { id: 104, name: "CTHM Room 110", coords: [15.31978, 119.98423], floor: "Ground Floor", iconOffset: [0, 0] },

                    { id: 105, name: "Office of the Campus Director", coords: [15.31953, 119.98459], floor: "Ground Floor", iconOffset: [0, 0] },
                    { id: 106, name: "CTHM DID Room", coords: [15.31948, 119.98466], floor: "Ground Floor", iconOffset: [0, 0] },
                    { id: 107, name: "CTHM Room 102", coords: [15.31943, 119.98473], floor: "Ground Floor", iconOffset: [0, 0]},
                    { id: 108, name: "CTHM Room 103", coords: [15.31938, 119.98480], floor: "Ground Floor", iconOffset: [0, 0] },
                    { id: 109, name: "CBAPA Faculty Room", coords: [15.31933, 119.98487], floor: "Ground Floor", iconOffset: [0, 0] },

                    { id: 201, name: "CTHM Room 212", coords: [15.31975, 119.98421], floor: "2nd Floor", iconOffset: [0, 0] },
                    { id: 202, name: "CTHM Room 211", coords: [15.31972, 119.98426], floor: "2nd Floor", iconOffset: [0, 0] },
                    { id: 203, name: "CTHM Room 210", coords: [15.31969, 119.98431], floor: "2nd Floor", iconOffset: [0, 0] },
                    { id: 204, name: "CTHM Room 209", coords: [15.31966, 119.98436], floor: "2nd Floor", iconOffset: [0, 0] },
                    { id: 205, name: "CTHM Room 208", coords: [15.31963, 119.98441], floor: "2nd Floor", iconOffset: [0, 0] },
                    { id: 206, name: "CTHM Room 207", coords: [15.31960, 119.98446], floor: "2nd Floor", iconOffset: [0, 0] },

                    { id: 207, name: "CTHM Room 206", coords: [15.31954, 119.98456], floor: "2nd Floor", iconOffset: [0, 0] },
                    { id: 208, name: "CTHM Room 205", coords: [15.31949, 119.98462], floor: "2nd Floor", iconOffset: [0, 0] },
                    { id: 209, name: "CTHM Room 204", coords: [15.31946, 119.98468], floor: "2nd Floor", iconOffset: [0, 0] },
                    { id: 210, name: "CTHM Room 203", coords: [15.31941, 119.98474], floor: "2nd Floor", iconOffset: [0, 0] },
                    { id: 211, name: "CTHM Room 202", coords: [15.31936, 119.98480], floor: "2nd Floor", iconOffset: [0, 0] },
                    { id: 212, name: "CTHM Room 201", coords: [15.31933, 119.98486], floor: "2nd Floor", iconOffset: [0, 0] },
                ]
            },
            {
                id: 14,
                name: "Gender and Development Center",
                shortName: "",
                labelOffset: [-24, 20, -55],
                type: "office",
                coords: [15.31960, 119.98421],
                description: "Office promoting gender equality, women empowerment, and inclusive development programs within PRMSU.",
                photo: "images/office/gad-center/jpg/24.jpg",
                image: "images/office/gad-center/jpg/24.jpg", 
                rooms: ["GAD Coordinator’s Office", "Training and Seminar Room", "Counseling Room", "Resource Center", "Staff Office"]
            },
            {
                id: 15,
                name: "Cafeteria",
                shortName: "CAFETERIA",
                labelOffset: [-15, -20, -55],
                type: "facilities",
                coords: [15.31923, 119.98399],
                description: "Campus dining facility offering a variety of food and beverage options for students and staff.",
                photo: "images/facilities/cafeteria/jpg/25.jpg",
                image: "images/facilities/cafeteria/jpg/25.jpg", 
                rooms: ["Dining Area", "Food Service Counter", "Beverage Station", "Seating Area"]
            },
            {
                id: 16,
                name: "College of Industrial Technology",
                shortName: "CIT",
                labelOffset: [65, 25, 5],
                type: "department",
                coords: [15.31772, 119.98346],
                description: "Building housing programs in Industrial Technology, including workshops and laboratories.",
                photo: "images/department/cit/jpg/38.jpg",
                image: "images/department/cit/jpg/38.jpg", 
                rooms: [
                    {id: 101, name: "Research and Extension Office", coords: [15.31771, 119.98359], floor: "Ground Floor", iconOffset: [0, 0] },
                    {id: 102, name: "Electronics Technology", coords: [15.31770, 119.98369], floor: "Ground Floor", iconOffset: [0, 0] },
                ]
            },
            {
                id: 17,
                name: "College of Teacher Education",
                shortName: "CTE",
                labelOffset: [30, 15, -55],
                type: "department",
                coords: [15.31836, 119.98490],
                description: "Building for education programs, housing classrooms, faculty offices, and learning laboratories for future teachers.",
                photo: "images/department/cte/jpg/36.jpg",
                image: "images/department/cte/jpg/36.jpg", 
                rooms: [
                    {id: 101, name: "Comfort Room", coords: [15.31847, 119.98508], floor: "Ground Floor", iconOffset: [0, 0] },
                    {id: 102, name: "CTE 101", coords: [15.31843, 119.98505], floor: "Ground Floor", iconOffset: [0, 0] },
                    {id: 103, name: "CTE 102", coords: [15.31839, 119.98502], floor: "Ground Floor", iconOffset: [0, 0] },
                    {id: 104, name: "CTE 103", coords: [15.31835, 119.98499], floor: "Ground Floor", iconOffset: [0, 0] },
                    {id: 105, name: "CTE 104", coords: [15.31831, 119.98496], floor: "Ground Floor", iconOffset: [0, 0]},
                    {id: 106, name: "CTE 105", coords: [15.31827, 119.98493], floor: "Ground Floor", iconOffset: [0, 0] },
                    {id: 206, name: "CTE 206", coords: [15.32777, 120.07777], floor: "2nd Floor", iconOffset: [0, 0] },

                    {id: 201, name: "CTE 201", coords: [15.31845, 119.98505], floor: "2nd Floor", iconOffset: [0, 0] },
                    {id: 202, name: "CTE 202", coords: [15.31841, 119.98502], floor: "2nd Floor", iconOffset: [0, 0] },
                    {id: 203, name: "CTE 203", coords: [15.31837, 119.98499], floor: "2nd Floor", iconOffset: [0, 0] },
                    {id: 204, name: "CTE 204", coords: [15.31833, 119.98496], floor: "2nd Floor", iconOffset: [0, 0] },
                    {id: 205, name: "CTE 205", coords: [15.31829, 119.98493], floor: "2nd Floor", iconOffset: [0, 0] },
                    {id: 206, name: "CTE 206", coords: [15.31825, 119.98490], floor: "2nd Floor", iconOffset: [0, 0] }
                ]
            },
            {
                id: 18,
                name: "University Health Clinic",
                shortName: "CLINIC",
                labelOffset: [20, 25, 36],
                type: "facilities",
                coords: [15.31860, 119.98413],
                description: "Medical facility providing basic health services and consultations for students and staff.",
                photo: "images/facilities/clinic/jpg/33.jpg",
                image: "images/facilities/clinic/jpg/33.jpg", 
                rooms: ["Reception Area", "Doctor’s Office", "Dental Room", "Treatment Room", "Pharmacy", "Waiting Area"]
            },
            {
                id: 19,
                name: "Entrance Gate",
                shortName: "ENTRANCE GATE",
                labelOffset: [0, 10, 34],
                type: "landmark",
                coords: [15.31998, 119.98480],
                description: "Main entrance of PRMSU Iba Campus, serving as the primary access point for students, faculty, and visitors.",
                photo: "images/landmark/entrance-gate/jpg/22.jpg", 
                image: "images/landmark/entrance-gate/jpg/22.jpg", 
                rooms: []
            },
            {
                id: 20,
                name: "Exit Gate",
                shortName: "EXIT GATE",
                labelOffset: [10, -5, -48],
                type: "landmark",
                coords: [15.31656, 119.98329],
                description: "Designated exit point of PRMSU Iba Campus for vehicles and pedestrians, ensuring smooth campus traffic flow.",
                photo: "images/landmark/exit-gate/jpg/39.jpg",
                image: "images/landmark/exit-gate/jpg/39.jpg", 
                rooms: []
            },
            {
                id: 21,
                name: "PRMSU Dormitory",
                shortName: "DORMITORY",
                labelOffset: [0, 25, -47],
                type: "facilities",
                coords: [15.31708, 119.98367],
                description: "On-campus housing facility providing safe and comfortable accommodation for PRMSU students.",
                photo: "images/facilities/dormitory/jpg/41.jpg",
                image: "images/facilities/dormitory/jpg/41.jpg", 
                rooms: ["Single Room", "Double Room", "Common Area", "Laundry Room", "Study Room"]
            },
            {
                id: 22,
                name: "New Gymnasium",
                shortName: "NEW GYM",
                labelOffset: [0, -30, 0],
                type: "facilities",
                coords: [15.31808, 119.98287],
                description: "Modern indoor sports facility for basketball, volleyball, and other athletic activities.",
                photo: "images/facilities/new-gymnasium/jpg/4.jpg",
                image: "images/facilities/new-gymnasium/jpg/4.jpg", 
                rooms: []
            },
            {
                id: 23,
                name: "College of Accountancy and Business Administration",
                shortName: "CABA",
                labelOffset: [-20, 20, 35],
                type: "department",
                coords: [15.31946, 119.98476],
                description: "Academic building offering programs in Accountancy, Business Administration, and related business fields.",
                photo: "images/department/caba/jpg/26.jpg",
                image: "images/department/caba/jpg/26.jpg", 
                rooms: []
            },
            {
                id: 24,
                name: "RMTU MULTIPUROSE COOPERATIVE",
                type: "facilities",
                coords: [15.31975, 119.98495],
                description: "Campus cooperative providing essential goods and services to students and staff at affordable prices.",
                photo: "images/facilities/rmtu-multipurpose-cooperative/jpg/28.jpg",
                image: "images/facilities/rmtu-multipurpose-cooperative/jpg/28.jpg", 
                rooms: ["Sales Area", "Office", "Storage Room", "Customer Service Desk"]
            },
            {
                id: 25,
                name: "Psychology Annex Building",
                shortName: "ANNEX",
                labelOffset: [-10, 5, -55],
                type: "department",
                coords: [15.31904, 119.98458],
                description: "Additional administrative building supporting various university functions and services.",
                photo: "images/department/annex/jpg/29.jpg",
                image: "images/department/annex/jpg/29.jpg", 
                rooms: [
                    {id: 101, name: "CASA 101", coords: [15.31914, 119.98467], floor: "Ground Floor", iconOffset: [0, 0] },
                    {id: 102, name: "CASA 102", coords: [15.31907, 119.98462], floor: "Ground Floor", iconOffset: [0, 0] },
                    {id: 103, name: "CASA 103", coords: [15.31900, 119.98457], floor: "Ground Floor", iconOffset: [0, 0] },
                    {id: 104, name: "CASA 104", coords: [15.31893, 119.98452], floor: "Ground Floor", iconOffset: [0, 0] },

                    {id: 201, name: "CASAnnex 201", coords: [15.31915, 119.98465], floor: "2nd Floor", iconOffset: [0, 0] },
                    {id: 202, name: "CASAnnex 202", coords: [15.31908, 119.98460], floor: "2nd Floor", iconOffset: [0, 0] },
                    {id: 203, name: "CASAnnex 203", coords: [15.31901, 119.98455], floor: "2nd Floor", iconOffset: [0, 0] },
                    {id: 204, name: "CASAnnex 204", coords: [15.31894, 119.98450], floor: "2nd Floor", iconOffset: [0, 0] },
                    {id: 205, name: "CASAnnex 205", coords: [15.31889, 119.98448], floor: "2nd Floor", iconOffset: [0, 0] }
                ]
            },
            {
                id: 26,
                name: "College of Arts and Sciences",
                shortName: "CAS",
                labelOffset: [-20, 5, 35],
                type: "department",
                coords: [15.31826, 119.98459],
                description: "Academic building offering programs in Humanities, Social Sciences, Natural Sciences, and related fields.",
                photo: "images/department/cas/jpg/32.jpg",
                image: "images/department/cas/jpg/32.jpg", 
                rooms: [
                    {id: 101, name: "Faculty Room", coords: [15.31819, 119.98465], floor: "Ground Floor", iconOffset: [0, 0] },
                    {id: 102, name: "Laboratory Repository System", coords: [15.31824, 119.98458], floor: "Ground Floor", iconOffset: [0, 0] },
                    {id: 103, name: "CAS 103-Biology/Chemistry Laboratory Room", coords: [15.31829, 119.98451], floor: "Ground Floor", iconOffset: [0, 0] },

                    {id: 201, name: "CAS 201", coords: [15.31819, 119.98463], floor: "2nd Floor", iconOffset: [0, 0] },
                    {id: 202, name: "CAS 202", coords: [15.31824, 119.98456], floor: "2nd Floor", iconOffset: [0, 0] },
                    {id: 203, name: "CAS 203", coords: [15.31829, 119.98449], floor: "2nd Floor", iconOffset: [0, 0] },
                    {id: 204, name: "CAS 204", coords: [15.31834, 119.98442], floor: "2nd Floor", iconOffset: [0, 0] }
                ]
            },
            {
                id: 27,
                name: "Automotive Technology",
                shortName: "AUTOMOTIVE",
                labelOffset: [0, 17, 9],
                type: "department",
                coords: [15.31829, 119.98410],
                description: "Building dedicated to automotive technology programs, featuring workshops and laboratories for hands-on training.",
                photo: "images/department/automotive/jpg/34.jpg",
                image: "images/department/automotive/jpg/34.jpg",
                rooms: []
            },
            {
                id: 28,
                name: "Food Technology/Food Service Management",
                type: "department",
                shortName: "FSMT",
                labelOffset: [40, 5, 9],
                coords: [15.31807, 119.98385],
                description: "Building housing programs in Food Technology and Food Service Management, including laboratories and training facilities.",
                photo: "images/department/fsmt/jpg/35.jpg",
                image: "images/department/fsmt/jpg/35.jpg", 
                rooms: [
                    {id: 101,name: "FSMT Room 11", coords: [15.31805, 119.98375], floor: "Ground Floor", iconOffset: [0, 0] },
                    {id: 102, name: "FSMT Room 12", coords: [15.31811, 119.98376], floor: "Ground Floor", iconOffset: [0, 0] },
                    {id: 103, name: "FSMT Room 13", coords: [15.31811, 119.98384], floor: "Ground Floor", iconOffset: [0, 0] },
                    {id: 104, name: "FSMT Room 14", coords: [15.31810, 119.98392], floor: "Ground Floor", iconOffset: [0, 0] },
                    {id: 105, name: "FSMT Room 15", coords: [15.31809, 119.98400], floor: "2nd Floor", iconOffset: [0, 0] },
                    {id: 106, name: "FSMT Room 26", coords: [15.31808, 119.98408], floor: "2nd Floor", iconOffset: [0, 0] }, 
                ]
            },
            {
                id: 29,
                name: "Mechanical Technology",
                type: "department",
                shortName: "MECH",
                labelOffset: [55, 19, 8],
                coords: [15.31791, 119.98365],
                description: "Building dedicated to mechanical technology programs, featuring workshops and laboratories for hands-on training.",
                photo: "images/department/mech/jpg/37.jpg",
                image: "images/department/mech/jpg/37.jpg", 
                rooms: []
            },
            {
                id: 30,
                name: "New Building",
                type: "department",
                shortName: "NEW BUILDING",
                labelOffset: [45, 19, 8],
                coords: [15.31751, 119.98337],
                description: "Newly constructed building for future academic and administrative use.",
                photo: "images/department/new-building/jpg/40.jpg",
                image: "images/department/new-building/jpg/40.jpg", 
                rooms: []
            },
            {
                id: 31,
                name: "Civil Technology",
                type: "department",
                shortName: "CIVIL",
                labelOffset: [55, 19, 7],
                coords: [15.31733, 119.98318],
                description: "Building dedicated to civil technology programs, featuring workshops and laboratories for hands-on training.",
                photo: "images/department/civil/jpg/3.jpg",
                image: "images/department/civil/jpg/3.jpg", 
                rooms: []
            },
            {
                id: 32,
                name: "Science-Based Education Building",
                type: "department",
                shortName: "SBEB",
                labelOffset: [0, 0, 35],
                coords: [15.31863, 119.98475],
                description: "Building for science-based education programs, housing classrooms, laboratories, and faculty offices.",
                photo: "images/department/sbeb/jpg/31.jpg",
                image: "images/department/sbeb/jpg/31.jpg", 
                rooms: [
                    {id: 101,name: "Accreditation Room", coords: [15.31867, 119.98455], floor: "Ground Floor", iconOffset: [0, 0] },
                    {id: 102,name: "Extension Room", coords: [15.31867, 119.98468], floor: "Ground Floor", iconOffset: [0, 0] },
                    {id: 103,name: "SBEB-AVR Room", coords: [15.31860, 119.98479], floor: "Ground Floor", iconOffset: [0, 0] },
                    {id: 104,name: "Dean’s Office", coords: [15.31849, 119.98484], floor: "Ground Floor", iconOffset: [0, 0] },

                    {id: 201,name: "SBEB Room 201", coords: [15.31849, 119.98486], floor: "2nd Floor", iconOffset: [0, 0] },
                    {id: 202,name: "Educ.Tech Room", coords: [15.31860, 119.98481], floor: "2nd Floor", iconOffset: [0, 0] },
                    {id: 203,name: "Speech Lab", coords: [15.31867, 119.98470], floor: "2nd Floor", iconOffset: [0, 0] },
                    {id: 204,name: "SBEB Room 202", coords: [15.31867, 119.98457], floor: "2nd Floor", iconOffset: [0, 0] },

                    {id: 301,name: "SBEB Room 302", coords: [15.31867, 119.98459], floor: "3rd Floor", iconOffset: [0, 0] },
                    {id: 302,name: "SBEB Lab 1 (Physics Lab)", coords: [15.31867, 119.98472], floor: "3rd Floor", iconOffset: [0, 0] },
                    {id: 303,name: "SBEB Lab 2 (Chem Lab)", coords: [15.31860, 119.98483], floor: "3rd Floor", iconOffset: [0, 0] },
                    {id: 304,name: "SBEEB Room 301", coords: [15.31849, 119.98488], floor: "3rd Floor", iconOffset: [0, 0] },
                ]
            },
            {
                id: 33,
                name: "Drafting Technology",
                type: "department",
                shortName: "DRAFTING",
                labelOffset: [-13, -5, 39],
                coords: [15.31896, 119.98349],
                description: "Building dedicated to drafting technology programs, featuring workshops and laboratories for hands-on training.",
                photo: "images/department/drafting/jpg/13.jpg",
                image: "images/department/drafting/jpg/13.jpg", 
                rooms: []
            },
            {
                id: 34,
                name: "Graduate School",
                type: "department",
                shortName: "GRADUATE SCHOOL",
                labelOffset: [-19, 1, -52],
                coords: [15.31891, 119.98376],
                description: "Building housing graduate programs, classrooms, seminar rooms, and faculty offices for advanced studies.",
                photo: "images/department/graduate-school/jpg/17.jpg",
                image: "images/department/graduate-school/jpg/17.jpg", 
                rooms: [
                    {id: 101, name: "GS Dean’s Office", coords: [15.31898, 119.98381], floor: "Ground Floor", iconOffset: [0, 0] },
                    {id: 102, name: "GE Staff Office", coords: [15.31882, 119.98368], floor: "Ground Floor", iconOffset: [0, 0] },

                    {id: 103, name: "BS Criminology Faculty Office", coords: [15.31914, 119.98368], floor: "Ground Floor", iconOffset: [0, 0] },
                    {id: 104, name: "Lombroso Room", coords: [15.31918, 119.98362], floor: "Ground Floor", iconOffset: [0, 0] },
                    {id: 105, name: "Beccaria Room", coords: [15.31922, 119.98356], floor: "Ground Floor", iconOffset: [0, 0] },
                ]
            },
            {
                id: 35,
                name: "Nursing Skills Laboratory Building",
                type: "department",
                shortName: "NSLB",
                labelOffset: [-10, 5, 40],
                coords: [15.31693, 119.98287],  
                description: "Specialized facility for nursing students to practice clinical skills in a simulated environment.",
                photo: "images/department/nslb/jpg/2.jpg",
                image: "images/department/nslb/jpg/2.jpg", 
                rooms: []
            },
            {
                id: 36,
                name: "ROTC Office",
                type: "office",
                shortName: "ROTC",
                labelOffset: [-5, -15, 10],
                coords: [15.31909, 119.98265],
                description: "Office for the Reserve Officers\" Training Corps (ROTC) program, providing training and leadership development for students.",
                photo: "images/office/rotc/jpg/11.jpg",
                image: "images/office/rotc/jpg/11.jpg", 
                rooms: []
            },
            {
                id: 37,
                name: "Student Servives and Quality Assurance Building",
                type: "office",
                shortName: "SSQAB",
                labelOffset: [0, 10, -55],
                coords: [15.31913, 119.98391],
                description: "Building dedicated to student services and quality assurance programs, providing support and resources for students.",
                photo: "images/office/ssqab/jpg/19.jpg",
                image: "images/office/ssqab/jpg/19.jpg", 
                rooms: [
                    {id: 201 ,name: "Accreditation Room", coords: [15.31918, 119.98385], floor: "2nd Floor", iconOffset: [0, 0] },
                    {id: 202,name: "Conference Room", coords: [15.31924, 119.98389], floor: "2nd Floor", iconOffset: [0, 0] },
                    {id: 203,name: "Office of the Director", coords: [15.31930, 119.98393], floor: "2nd Floor", iconOffset: [0, 0] },
                    {id: 204,name: "Office of the Instruction Services", coords: [15.31936, 119.98397], floor: "2nd Floor", iconOffset: [0, 0] },

                    {id: 205,name: "Comfort Room", coords: [15.31915, 119.98383], floor: "2nd Floor", iconOffset: [0, 0] },

                    {id: 301, name: "Guidance Counseling Services Office (GSCO) - 308", coords: [15.31936, 119.98395], floor: "3rd Floor", iconOffset: [0, 0] },
                    {id: 302,name: "Scholarship Services Office (SSO) - 305", coords: [15.31930, 119.98391], floor: "3rd Floor", iconOffset: [0, 0] },
                    {id: 303,name: "Student Affairs and Services, Director’s Office - 304", coords: [15.31924, 119.98387], floor: "3rd Floor", iconOffset: [0, 0] },
                    {id: 304,name: "Culture and the Arts Developing Office (CADO) - 301", coords: [15.31918, 119.98383], floor: "3rd Floor", iconOffset: [0, 0] },

                    {id: 305,name: "Student Organization (SO) - 307", coords: [15.31932, 119.98400], floor: "3rd Floor", iconOffset: [0, 0] },
                    {id: 306,name: "Student Cunduct and Discipline Office (SCDO) - 306", coords: [15.31926, 119.98396], floor: "3rd Floor", iconOffset: [0, 0] },
                    {id: 307,name: "GSCO Testing Services Office - Carrier and Job Placement Office (CJPO) - 303", coords: [15.31920, 119.98392], floor: "3rd Floor", iconOffset: [0, 0] },
                    {id: 308,name: "Economic Enterprises Development Oficce - Student Publication Office - 302", coords: [15.31914, 119.98388], floor: "3rd Floor", iconOffset: [0, 0] },
                
                    {id: 309,name: "Comfort Room", coords: [15.31915, 119.98384], floor: "3rd Floor", iconOffset: [0, 0] },
                ]
            },
            {
                id: 38,
                name: "Tourism and Hospitality Management Building",
                type: "department",
                shortName: "THM BUILDING",
                labelOffset: [-23, -35, -22],
                coords: [15.31965, 119.98394],
                description: "Building housing programs in Tourism and Hospitality Management, including training laboratories and classrooms.",
                photo: "images/department/thm-building/jpg/23.jpg",
                image: "images/department/thm-building/jpg/23.jpg", 
                rooms: []
            }
        ],
        alerts: [
            { type: "info",      message: "There is a new gymnasium currently under construction." },
            { type: "info",      message: "There is a new building being constructed near the exit gate." },
           // { type: "warning",   message: "Road construction near the Main Gate — expect delays." },
           // { type: "emergency", message: "Emergency drill scheduled today at 2:00 PM. Please cooperate." }
        ],
    },
}

function showAlert(message, type = 'info') {
    const banner = document.getElementById('alertBanner');
    const messageEl = document.getElementById('alertMessage');
    const iconEl = document.getElementById('alertIcon');

    if (!banner || !messageEl) {
        console.error('Alert banner elements not found!');
        return;
    }

    const icons = {
        info:      '📢',
        warning:   '⚠️',
        emergency: '🚨'
    };

    // ✅ Force remove ALL classes first, then re-add base ones
    banner.className = '';
    banner.classList.add('alert-banner');
    banner.classList.add(`alert-${type}`);

    // Update icon and message
    if (iconEl) iconEl.textContent = icons[type] || '📢';
    messageEl.textContent = message;

    // ✅ Force remove hidden
    banner.classList.remove('hidden');

    console.log('Alert shown:', type, message, banner.className);
}

// Helper function to normalize coordinates to array format
function normalizeCoords(coords) {
    if (Array.isArray(coords)) {
        return coords; // Already correct format
    } else if (coords && coords.lat && coords.lng) {
        return [coords.lat, coords.lng]; // Convert object to array
    } else {
        console.error('Invalid coords format:', coords);
        return null;
    }
}

function isPointInsideBoundary(point, boundary) {
    if (!Array.isArray(boundary) || boundary.length < 3) return true;
    const [lat, lng] = point;
    let inside = false;

    for (let i = 0, j = boundary.length - 1; i < boundary.length; j = i++) {
        const [latI, lngI] = boundary[i];
        const [latJ, lngJ] = boundary[j];

        const intersects = ((latI > lat) !== (latJ > lat)) &&
            (lng < (lngJ - lngI) * (lat - latI) / (latJ - latI) + lngI);

        if (intersects) inside = !inside;
    }

    return inside;
}

function updateUserLocationMarker(lat, lng, accuracy, options = {}) {
    const { showPopup = false, pan = false } = options;
    const coords = [lat, lng];

    const userIcon = L.divIcon({
        className: 'user-location-marker',
        html: `
            <div class="user-marker-pulse"></div>
            <div class="user-marker-dot"></div>
        `,
        iconSize: [30, 30],
        iconAnchor: [15, 15]
    });

    if (!state.userMarker) {
        state.userMarker = L.marker(coords, {
            icon: userIcon,
            zIndexOffset: 1000
        }).addTo(state.map);
    } else {
        state.userMarker.setLatLng(coords);
    }

    if (typeof accuracy === 'number') {
        if (!state.accuracyCircle) {
            state.accuracyCircle = L.circle(coords, {
                radius: accuracy,
                color: '#4285f4',
                fillColor: '#4285f4',
                fillOpacity: 0.1,
                weight: 2,
                opacity: 0.5
            }).addTo(state.map);
        } else {
            state.accuracyCircle.setLatLng(coords);
            state.accuracyCircle.setRadius(accuracy);
        }
    }

    if (showPopup) {
        state.userMarker.bindPopup(`
            <div style="text-align: center;">
                <strong>📍 Your Location</strong><br>
                ${typeof accuracy === 'number' ? `<small>Accuracy: ±${Math.round(accuracy)}m</small>` : ''}
            </div>
        `).openPopup();
    }

    if (pan) {
        state.map.flyTo(coords, 18, {
            animate: true,
            duration: 1.2
        });
    }
}

function getCampusUserLocation(campus) {
    if (!navigator.geolocation) {
        showNotification('Geolocation is not supported by your browser', 'error');
        return Promise.resolve(null);
    }

    const options = {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
    };

    return new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                const accuracy = position.coords.accuracy;
                const inside = isPointInsideBoundary([lat, lng], campus.boundary);
                resolve({ coords: [lat, lng], accuracy, inside });
            },
            (error) => {
                let errorMessage = 'Unable to get your location';

                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        errorMessage = 'Location permission denied. Please enable location access.';
                        break;
                    case error.POSITION_UNAVAILABLE:
                        errorMessage = 'Location information unavailable. Please check your GPS.';
                        break;
                    case error.TIMEOUT:
                        errorMessage = 'Location request timed out. Please try again.';
                        break;
                }

                showNotification(errorMessage, 'error');
                resolve(null);
            },
            options
        );
    });
}

// State Management - UPDATED with new properties
const state = {
    map: null,
    currentCampus: null,
        // ✅ NEW Multi-stop v2
    multiStop: {
        active: false,
        stops: [],           // { location, status: 'pending'|'current'|'done', cachedRoute: null }
        currentIndex: 0,
        countdownTimer: null,
        arrivalChecker: null
    },  
    markers: [],
    routeLine: null,
    dashedOverlay: null,
    routingControl: null,
    userMarker: null,
    accuracyCircle: null,
    userLocation: null,
    watchId: null,
    selectedLocation: null,
    accessibleOnly: false,
    currentFilter: 'all',
    savedLocations: [],
    routeHistory: [],
    currentRoute: null,
    routeAnimation: null,
    campusBoundary: null,
    isRoomNavigation: false,
    directPathLine: null,
    lastRoomBuilding: null,
    navigationMode: 'route',
    navigationBuilding: null,

    rooms: {
        markers: [],           // Array of room markers
        activeBuilding: null,  // Currently displayed building
        layerGroup: null      // Layer group for room markers
    }

};

// Loading Screen
function showLoadingScreen() {
    document.getElementById('loadingScreen').classList.add('active');
}

function hideLoadingScreen() {
    document.getElementById('loadingScreen').classList.remove('active');
}

const AUTH_USERS_KEY = 'campusNavigatorUsers';
const AUTH_SESSION_KEY = 'campusNavigatorSession';
const AUTH_RESET_KEY = 'campusNavigatorResetState';

function getStoredUsers() {
    try {
        return JSON.parse(localStorage.getItem(AUTH_USERS_KEY)) || [];
    } catch (error) {
        console.error('Unable to parse users from storage:', error);
        return [];
    }
}

function saveStoredUsers(users) {
    localStorage.setItem(AUTH_USERS_KEY, JSON.stringify(users));
}

function getAuthSession() {
    try {
        return JSON.parse(localStorage.getItem(AUTH_SESSION_KEY));
    } catch (error) {
        console.error('Unable to parse auth session:', error);
        return null;
    }
}

function setAuthSession(session) {
    localStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(session));
}

function getResetState() {
    try {
        return JSON.parse(localStorage.getItem(AUTH_RESET_KEY));
    } catch (error) {
        console.error('Unable to parse reset state:', error);
        return null;
    }
}

function setResetState(resetState) {
    localStorage.setItem(AUTH_RESET_KEY, JSON.stringify(resetState));
}

function clearResetState() {
    localStorage.removeItem(AUTH_RESET_KEY);
}

function clearLoginInputs() {
    const loginIdentifierInput = document.getElementById('loginEmail');
    const loginPasswordInput = document.getElementById('loginPassword');
    if (loginIdentifierInput) loginIdentifierInput.value = '';
    if (loginPasswordInput) loginPasswordInput.value = '';
}

function updateUserRoleBadge() {
    const roleBadge = document.getElementById('currentUserRole');
    if (!roleBadge) return;
    const session = getAuthSession();
    roleBadge.textContent = session?.role ? session.role : 'Guest';
}

function logoutUser() {
    localStorage.removeItem(AUTH_SESSION_KEY);
    document.getElementById('mainApp')?.classList.add('hidden');
    document.getElementById('authScreen')?.classList.remove('hidden');
    document.getElementById('mobileMenuToggle')?.classList.add('hidden');
    updateUserRoleBadge();
    switchAuthTab('login');
    clearLoginInputs();
    showNotification('Logged out successfully.', 'success');
}

function confirmLogout() {
    const logoutModal = document.getElementById('logoutModal');
    if (!logoutModal) {
        if (window.confirm('Continue to log out?')) {
            logoutUser();
        }
        return;
    }
    logoutModal.classList.add('active');
}

function switchAuthTab(tabName) {
    document.querySelectorAll('.auth-tab-btn').forEach((btn) => {
        btn.classList.toggle('active', btn.dataset.authTab === tabName);
    });

    document.getElementById('loginForm')?.classList.toggle('hidden', tabName !== 'login');
    document.getElementById('registerForm')?.classList.toggle('hidden', tabName !== 'register');
    document.getElementById('forgotForm')?.classList.toggle('hidden', tabName !== 'forgot');

    if (tabName === 'login') {
        clearLoginInputs();
    }

    if (tabName === 'forgot') {
        updateForgotProgress(1);
        document.getElementById('forgotStep1')?.classList.remove('hidden');
        document.getElementById('forgotStep2')?.classList.add('hidden');
        document.getElementById('forgotStep3')?.classList.add('hidden');
    }
}

function getPasswordStrengthError(password) {
    if (!password || password.length < 8) return 'Password must be at least 8 characters long.';
    if (!/[A-Z]/.test(password)) return 'Password must include at least one uppercase letter.';
    if (!/[a-z]/.test(password)) return 'Password must include at least one lowercase letter.';
    if (!/\d/.test(password)) return 'Password must include at least one number.';
    if (!/[^A-Za-z0-9]/.test(password)) return 'Password must include at least one special character.';
    return null;
}

function getPasswordCriteria(password) {
    return {
        len: password.length >= 8,
        upper: /[A-Z]/.test(password),
        lower: /[a-z]/.test(password),
        digit: /\d/.test(password),
        special: /[^A-Za-z0-9]/.test(password)
    };
}

function updatePasswordRulesList(listElement, password) {
    if (!listElement) return;
    const criteria = getPasswordCriteria(password);
    const isEmpty = password.length === 0;

    listElement.querySelectorAll('[data-rule]').forEach((listItem) => {
        const key = listItem.getAttribute('data-rule');
        listItem.classList.remove('rule-ok', 'rule-fail', 'rule-neutral');
        if (isEmpty) {
            listItem.classList.add('rule-neutral');
        } else {
            listItem.classList.add(criteria[key] ? 'rule-ok' : 'rule-fail');
        }
    });
}

function updatePasswordMatchLine(matchElement, primaryPassword, confirmPassword) {
    if (!matchElement) return;
    matchElement.classList.remove('match-ok', 'match-fail', 'match-empty');
    if (!confirmPassword) {
        matchElement.textContent = '';
        matchElement.classList.add('match-empty');
        return;
    }
    if (primaryPassword === confirmPassword) {
        matchElement.textContent = 'Passwords match';
        matchElement.classList.add('match-ok');
    } else {
        matchElement.textContent = 'Passwords do not match';
        matchElement.classList.add('match-fail');
    }
}

function bindPasswordLiveFeedback(passwordInputId, rulesListId, confirmInputId, matchElementId) {
    const passwordElement = document.getElementById(passwordInputId);
    const rulesElement = document.getElementById(rulesListId);
    const confirmElement = confirmInputId ? document.getElementById(confirmInputId) : null;
    const matchElement = matchElementId ? document.getElementById(matchElementId) : null;
    if (!passwordElement || !rulesElement) return;

    const refresh = () => {
        updatePasswordRulesList(rulesElement, passwordElement.value);
        if (confirmElement && matchElement) {
            updatePasswordMatchLine(matchElement, passwordElement.value, confirmElement.value);
        }
    };

    passwordElement.addEventListener('input', refresh);
    if (confirmElement) confirmElement.addEventListener('input', refresh);
    refresh();
}

function updateForgotProgress(step) {
    const progressSteps = [
        document.getElementById('forgotProgress1'),
        document.getElementById('forgotProgress2'),
        document.getElementById('forgotProgress3')
    ];

    progressSteps.forEach((node, index) => {
        if (!node) return;
        const currentStep = index + 1;
        node.classList.remove('is-active', 'is-done');
        if (currentStep < step) node.classList.add('is-done');
        if (currentStep === step) node.classList.add('is-active');
    });
}

function generateRoleBasedUserId(role, users) {
    const normalizedRole = (role || '').toLowerCase();
    const rolePrefixMap = {
        student: 'STU',
        employee: 'EMP',
        visitor: 'VIS'
    };
    const prefix = rolePrefixMap[normalizedRole] || 'USR';

    const nextSequence = users.reduce((max, entry) => {
        const rawId = (entry.userId || entry.userid || '').toString().trim().toUpperCase();
        const match = rawId.match(new RegExp(`^${prefix}-(\\d+)$`));
        if (!match) return max;
        const value = Number.parseInt(match[1], 10);
        return Number.isFinite(value) ? Math.max(max, value) : max;
    }, 0) + 1;

    return `${prefix}-${String(nextSequence).padStart(4, '0')}`;
}

async function notifyRegistrationChannels(userData) {
    try {
        const response = await fetch('/api/notify-registration', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        });
        const result = await response.json();
        if (!response.ok) {
            return { ok: false, error: result?.error || 'Notification request failed' };
        }
        return result;
    } catch (error) {
        console.error('Registration notification error:', error);
        return { ok: false, error: 'Unable to send registration notifications' };
    }
}

function setupAuthHandlers() {
    document.querySelectorAll('.auth-tab-btn').forEach((btn) => {
        btn.addEventListener('click', () => switchAuthTab(btn.dataset.authTab));
    });

    const loginForm = document.getElementById('loginForm');
    const loginIdentifierType = document.getElementById('loginIdentifierType');
    const loginIdentifierLabel = document.getElementById('loginIdentifierLabel');
    const loginIdentifierInput = document.getElementById('loginEmail');
    const registerForm = document.getElementById('registerForm');
    const forgotStep1 = document.getElementById('forgotStep1');
    const forgotStep2 = document.getElementById('forgotStep2');
    const forgotStep3 = document.getElementById('forgotStep3');
    const forgotIdentifierLabel = document.getElementById('forgotIdentifierLabel');
    const forgotIdentifierInput = document.getElementById('forgotEmail');
    const forgotMethodInputs = document.querySelectorAll('input[name="resetMethod"]');

    bindPasswordLiveFeedback('registerPassword', 'registerPasswordRules', 'registerConfirmPassword', 'registerPassMatch');
    bindPasswordLiveFeedback('forgotNewPassword', 'forgotPasswordRules', 'forgotConfirmPassword', 'forgotPassMatch');

    const refreshLoginIdentifier = () => {
        const selectedType = loginIdentifierType?.value || 'userId';
        if (!loginIdentifierLabel || !loginIdentifierInput) return;
        if (selectedType === 'email') {
            loginIdentifierLabel.textContent = 'Email';
            loginIdentifierInput.placeholder = 'Enter your email';
        } else {
            loginIdentifierLabel.textContent = 'User ID';
            loginIdentifierInput.placeholder = 'Enter your user ID';
        }
    };

    loginIdentifierType?.addEventListener('change', refreshLoginIdentifier);
    refreshLoginIdentifier();

    const refreshForgotIdentifier = () => {
        const selectedMethod = document.querySelector('input[name="resetMethod"]:checked')?.value || 'email';
        if (!forgotIdentifierLabel || !forgotIdentifierInput) return;
        if (selectedMethod === 'sms') {
            forgotIdentifierLabel.textContent = 'Phone Number';
            forgotIdentifierInput.placeholder = 'Enter your mobile number';
            forgotIdentifierInput.type = 'tel';
            forgotIdentifierInput.inputMode = 'tel';
        } else {
            forgotIdentifierLabel.textContent = 'Email';
            forgotIdentifierInput.placeholder = 'Enter your registered email';
            forgotIdentifierInput.type = 'email';
            forgotIdentifierInput.inputMode = 'email';
        }
    };

    forgotMethodInputs.forEach((input) => {
        input.addEventListener('change', refreshForgotIdentifier);
    });
    refreshForgotIdentifier();

    loginForm?.addEventListener('submit', async (event) => {
        event.preventDefault();
        const identifierType = loginIdentifierType?.value || 'userId';
        const identifierRaw = loginIdentifierInput?.value.trim() || '';
        const identifier = identifierType === 'email'
            ? identifierRaw.toLowerCase()
            : identifierRaw;
        const password = document.getElementById('loginPassword').value;

        if (!identifier) {
            showNotification('Please enter your login identifier', 'error');
            return;
        }

        let user = null;
        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ identifier, password })
            });
            const result = await response.json();
            if (response.ok && result?.ok && result.user) {
                user = result.user;
            }
        } catch (error) {
            console.error('Database login failed, using local fallback:', error);
        }

        if (!user) {
            // Fallback for legacy local accounts created before DB auth integration
            user = getStoredUsers().find((entry) => {
                const normalizedEmail = (entry.email || '').toLowerCase();
                const normalizedUserId = (entry.userId || entry.userid || '').toString().trim().toLowerCase();
                const matchesIdentifier = identifierType === 'email'
                    ? normalizedEmail === identifier
                    : normalizedUserId === identifier.toLowerCase();
                return matchesIdentifier && entry.password === password;
            });
        }

        if (!user) {
            const label = identifierType === 'email' ? 'email' : 'user ID';
            showNotification(`Invalid ${label} or password`, 'error');
            return;
        }

        setAuthSession({
            userId: user.userId || user.userid,
            name: user.name,
            email: user.email,
            role: user.role
        });
        clearLoginInputs();
        showNotification(`Welcome back, ${user.name}!`, 'success');
        startAppAfterAuth();
    });

    registerForm?.addEventListener('submit', async (event) => {
        event.preventDefault();
        const name = document.getElementById('registerName').value.trim();
        const email = document.getElementById('registerEmail').value.trim().toLowerCase();
        const phone = document.getElementById('registerPhone').value.trim();
        const role = document.getElementById('registerRole').value;
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('registerConfirmPassword').value;

        if (!name || !email || !phone || !role || !password) {
            showNotification('Please complete all registration fields', 'error');
            return;
        }

        if (password !== confirmPassword) {
            showNotification('Passwords do not match', 'error');
            return;
        }

        const passwordError = getPasswordStrengthError(password);
        if (passwordError) {
            showNotification(passwordError, 'error');
            return;
        }

        try {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, phone, role, password })
            });
            const result = await response.json();
            if (!response.ok || !result?.ok) {
                showNotification(result?.error || 'Registration failed. Please try again.', 'error');
                return;
            }

            const registeredUser = result.user;
            showNotification(`Account created. Your User ID is ${registeredUser.userId}`, 'success');
            if (result.notifications?.email === 'sent' && result.notifications?.sms === 'sent') {
                showNotification('Registration details sent via email and SMS.', 'success');
            } else {
                showNotification('Account created. Some notification channels are not configured or failed.', 'info');
            }

            registerForm.reset();
            localStorage.removeItem(AUTH_SESSION_KEY);
            document.getElementById('mainApp')?.classList.add('hidden');
            document.getElementById('authScreen')?.classList.remove('hidden');
            document.getElementById('mobileMenuToggle')?.classList.add('hidden');
            updateUserRoleBadge();
            switchAuthTab('login');
        } catch (error) {
            console.error('Registration API error:', error);
            showNotification('Unable to connect to server. Registration was not saved to database.', 'error');
        }
    });

    forgotStep1?.addEventListener('submit', async (event) => {
        event.preventDefault();
        const selectedMethod = document.querySelector('input[name="resetMethod"]:checked')?.value || 'email';
        const identifierRaw = forgotIdentifierInput?.value.trim() || '';
        const identifier = selectedMethod === 'email'
            ? identifierRaw.toLowerCase()
            : identifierRaw;
        if (!identifier) {
            const label = selectedMethod === 'email' ? 'email' : 'phone number';
            showNotification(`Please enter your ${label}`, 'error');
            return;
        }

        try {
            const response = await fetch('/api/auth/forgot/request', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ identifier, method: selectedMethod })
            });
            const result = await response.json();
            if (!response.ok || !result?.ok) {
                showNotification(result?.error || 'Unable to send reset code', 'error');
                return;
            }

            const expiresIn = Number(result?.expiresInSeconds) || 300;
            const resetEmail = result?.email || (selectedMethod === 'email' ? identifier : '');
            if (!resetEmail) {
                showNotification('Unable to start reset session. Please try again.', 'error');
                return;
            }
            setResetState({
                email: resetEmail,
                method: selectedMethod,
                expiresAt: Date.now() + expiresIn * 1000
            });

            forgotStep1.classList.add('hidden');
            forgotStep2?.classList.remove('hidden');
            forgotStep3?.classList.add('hidden');
            updateForgotProgress(2);
            showNotification(`OTP sent via ${selectedMethod.toUpperCase()}.`, 'success');
        } catch (error) {
            console.error('Forgot password request failed:', error);
            showNotification('Unable to reach server. Please try again.', 'error');
        }
    });

    forgotStep2?.addEventListener('submit', async (event) => {
        event.preventDefault();
        const resetState = getResetState();
        const enteredOtp = document.getElementById('forgotOtp').value.trim();

        if (!resetState || Date.now() > resetState.expiresAt) {
            clearResetState();
            showNotification('OTP expired. Please request a new code.', 'error');
            switchAuthTab('forgot');
            return;
        }

        try {
            const response = await fetch('/api/auth/forgot/verify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: resetState.email, otp: enteredOtp })
            });
            const result = await response.json();
            if (!response.ok || !result?.ok) {
                showNotification(result?.error || 'Invalid OTP code', 'error');
                return;
            }

            setResetState({
                ...resetState,
                resetToken: result.resetToken
            });

            forgotStep2.classList.add('hidden');
            forgotStep3?.classList.remove('hidden');
            updateForgotProgress(3);
            showNotification('OTP verified. You can now reset your password.', 'success');
        } catch (error) {
            console.error('OTP verification failed:', error);
            showNotification('Unable to verify OTP. Please try again.', 'error');
        }
    });

    forgotStep3?.addEventListener('submit', async (event) => {
        event.preventDefault();
        const resetState = getResetState();
        if (!resetState) {
            showNotification('Reset session not found. Please restart forgot password.', 'error');
            switchAuthTab('forgot');
            return;
        }

        if (!resetState.resetToken) {
            showNotification('OTP verification missing. Please restart forgot password.', 'error');
            switchAuthTab('forgot');
            return;
        }

        const newPassword = document.getElementById('forgotNewPassword').value;
        const confirmPassword = document.getElementById('forgotConfirmPassword').value;

        if (newPassword !== confirmPassword) {
            showNotification('Passwords do not match', 'error');
            return;
        }

        const passwordError = getPasswordStrengthError(newPassword);
        if (passwordError) {
            showNotification(passwordError, 'error');
            return;
        }

        try {
            const response = await fetch('/api/auth/forgot/reset', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: resetState.email,
                    resetToken: resetState.resetToken,
                    newPassword
                })
            });
            const result = await response.json();
            if (!response.ok || !result?.ok) {
                showNotification(result?.error || 'Password reset failed', 'error');
                return;
            }

            clearResetState();
            forgotStep3.reset();
            forgotStep2?.reset?.();
            forgotStep1?.reset?.();
            showNotification('Password updated. Please login.', 'success');
            switchAuthTab('login');
        } catch (error) {
            console.error('Password reset failed:', error);
            showNotification('Unable to reset password. Please try again.', 'error');
        }
    });
}

function startAppAfterAuth() {
    document.getElementById('authScreen')?.classList.add('hidden');
    showLoadingScreen();
    setupAdaptiveViewport();

    setTimeout(() => {
        try {
            loadSavedData();
            setupEventListeners();
            updateClock();
            setInterval(updateClock, 1000);
            hideLoadingScreen();
            loadCampus('iba');
            updateUserRoleBadge();
            console.log('Initialization complete!');
        } catch (error) {
            console.error('Error during initialization:', error);
            alert('Error loading app: ' + error.message);
        }
    }, 1600);
}

function setupAdaptiveViewport() {
    const applyViewportHeight = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--app-vh', `${vh}px`);
    };

    applyViewportHeight();
    window.addEventListener('resize', applyViewportHeight);
    window.addEventListener('orientationchange', () => {
        setTimeout(applyViewportHeight, 120);
    });
}

function init() {
    console.log('Initializing app...');
    document.getElementById('mainApp')?.classList.add('hidden');
    document.getElementById('authScreen')?.classList.remove('hidden');
    setupAdaptiveViewport();
    setupAuthHandlers();
    localStorage.removeItem(AUTH_SESSION_KEY);
    updateUserRoleBadge();
    switchAuthTab('login');
    clearResetState();

    hideLoadingScreen();
    document.getElementById('mainApp')?.classList.add('hidden');
    document.getElementById('authScreen')?.classList.remove('hidden');
}

window.logoutUser = logoutUser;
window.confirmLogout = confirmLogout;

// Clock Update
function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    const displayMinutes = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('currentTime').textContent = `${displayHours}:${displayMinutes} ${ampm}`;
}

// Load saved data
function loadSavedData() {
    const saved = localStorage.getItem('campusNavigatorData');
    if (saved) {
        const data = JSON.parse(saved);
        state.savedLocations = data.savedLocations || [];
        state.routeHistory = data.routeHistory || [];
    }
}

// Save data
function saveData() {
    localStorage.setItem('campusNavigatorData', JSON.stringify({
        savedLocations: state.savedLocations,
        routeHistory: state.routeHistory,
        lastCampus: state.currentCampus
    }));
}

// ============================================
// 🆕 ROOM MARKER MANAGER - Clean Architecture
// ============================================

const RoomMarkerManager = {
    // Configuration
    config: {
        iconColor: '#9c27b0',
        iconSize: 20,  // 🆕 Changed from 34 to 28 (smaller)
        borderColor: '#ffffff',
        borderWidth: 1,  // 🆕 Changed from 3 to 2 (thinner border)
        shadowColor: 'rgba(156, 39, 176, 0.4)',
        debugMode: false  // 🆕 Turn off debug for cleaner console
    },
    
    // Extract floor number from floor string
    getFloorNumber(floorString) {
        const floorMap = {
            '1st': '1',
            '2nd': '2', 
            '3rd': '3',
            '4th': '4',
            '5th': '5',
            'ground': 'G',
            'basement': 'B'
        };
        
        const normalized = floorString.toLowerCase();
        for (const [key, value] of Object.entries(floorMap)) {
            if (normalized.includes(key)) {
                return value;
            }
        }
        return '1'; // Default to 1st floor
    },
    
    // 🆕 Validate room coordinates are near campus
    validateRoomCoords(coords, campusCenter) {
        const latDiff = Math.abs(coords[0] - campusCenter.lat);
        const lngDiff = Math.abs(coords[1] - campusCenter.lng);
        
        // Rooms should be within ~0.02 degrees (~2km) of campus center
        const isValid = latDiff < 0.02 && lngDiff < 0.02;
        
        if (!isValid && this.config.debugMode) {
            console.warn(`⚠️ Room coordinates seem far from campus:`, {
                roomCoords: coords,
                campusCenter: [campusCenter.lat, campusCenter.lng],
                latDiff: latDiff.toFixed(5),
                lngDiff: lngDiff.toFixed(5)
            });
        }
        
        return isValid;
    },
    
    // ✅ UPDATED: Create room marker icon with offset support
    createIcon(floorNumber, iconOffset = [0, 0]) {
        const { iconColor, iconSize, borderColor, borderWidth, shadowColor } = this.config;
        const xOffset = iconOffset[0] || 0;
        const yOffset = iconOffset[1] || 0;
        
        return L.divIcon({
            className: 'room-marker-custom',
            html: `
                <div class="room-marker-wrapper" style="
                    position: relative;
                    width: ${iconSize}px;
                    height: ${iconSize}px;
                    transform: translate(${xOffset}px, ${yOffset}px);
                ">
                    <div class="room-marker-icon" style="
                        width: 100%;
                        height: 100%;
                        background: ${iconColor};
                        border: ${borderWidth}px solid ${borderColor};
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        box-shadow: 0 4px 10px ${shadowColor};
                        position: relative;
                        z-index: 1000;
                    ">
                        <span style="
                            color: white;
                            font-weight: 800;
                            font-size: 13px;
                            font-family: 'Segoe UI', Arial, sans-serif;
                            text-shadow: 0 1px 2px rgba(0,0,0,0.2);
                        ">R${floorNumber}</span>
                    </div>
                </div>
            `,
            iconSize: [iconSize, iconSize],
            iconAnchor: [iconSize / 2, iconSize / 2],
            popupAnchor: [0, -(iconSize / 2)]
        });
    },
    
    // Create popup content for room
    createPopup(room, buildingName) {
        return `
            <div style="
                padding: 8px;
                min-width: 200px;
            ">
                <div style="
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    margin-bottom: 10px;
                    padding-bottom: 8px;
                    border-bottom: 2px solid ${this.config.iconColor};
                ">
                    <span style="font-size: 24px;">🚪</span>
                    <div>
                        <h4 style="
                            margin: 0;
                            color: ${this.config.iconColor};
                            font-size: 15px;
                            font-weight: 600;
                        ">${room.name}</h4>
                        ${room.instructor ? `
                        <div style="
                            font-size: 12px;
                            color: #777;
                            margin-top: 3px;
                        ">👨‍🏫 ${room.instructor}</div>` : ''}
                    </div>
                </div>
                
                <div style="margin-bottom: 8px;">
                    <div style="font-size: 13px; color: #555; margin-bottom: 4px;">
                        <strong>🏢 Building:</strong> ${buildingName}
                    </div>
                    <div style="font-size: 13px; color: #555;">
                        <strong>📍 Floor:</strong> ${room.floor}
                    </div>
                    ${room.instructor ? `
                    <div style="font-size: 13px; color: #555; margin-top: 4px;">
                        <strong>👨‍🏫 Instructor:</strong> ${room.instructor}
                    </div>` : ''}
                </div>
                
                <button 
                    onclick="RoomMarkerManager.navigateToRoom(${room.coords[0]}, ${room.coords[1]}, '${room.name.replace(/'/g, "\\'")}')"
                    style="
                        width: 100%;
                        padding: 8px;
                        background: linear-gradient(135deg, ${this.config.iconColor} 0%, #7b1fa2 100%);
                        color: white;
                        border: none;
                        border-radius: 6px;
                        cursor: pointer;
                        font-weight: 600;
                        font-size: 13px;
                        transition: transform 0.2s;
                    "
                    onmouseover="this.style.transform='translateY(-2px)'"
                    onmouseout="this.style.transform='translateY(0)'"
                >
                    🧭 Navigate to Room
                </button>
                <button
                    onclick="RoomMarkerManager.goBackToBuilding()"
                    style="
                        width: 100%;
                        margin-top: 6px;
                        padding: 8px;
                        background: #f1f3f5;
                        color: #333;
                        border: 1px solid #e1e5ea;
                        border-radius: 6px;
                        cursor: pointer;
                        font-weight: 600;
                        font-size: 12px;
                    "
                >
                    ↩ Go Back
                </button>
            </div>
        `;
    },
    
    // 🆕 NEW METHOD: Show rooms for a building without clearing all (for auto-display)
    showRoomsForBuilding(building) {
        // Don't clear all rooms - we're adding to existing
        if (!state.rooms.layerGroup) {
            state.rooms.layerGroup = L.layerGroup().addTo(state.map);
        }
        
        // Validate building has rooms
        if (!building.rooms || building.rooms.length === 0) {
            return;
        }
        
        const campus = campusData[state.currentCampus];
        let validRoomCount = 0;
        
        // Add each room marker
        building.rooms.forEach(room => {
            // Validate coords exist
            if (!room.coords) {
                if (this.config.debugMode) {
                    console.error('❌ Missing coords for room:', room.name);
                }
                return;
            }
            
            // Normalize coordinates
            const coords = normalizeCoords(room.coords);
            
            if (!coords) {
                if (this.config.debugMode) {
                    console.error('❌ Invalid coords format:', room.coords);
                }
                return;
            }
            
            // Validate coordinates are reasonable
            if (!this.validateRoomCoords(coords, campus.center)) {
                if (this.config.debugMode) {
                    console.warn(`⚠️ Room "${room.name}" coords outside campus`);
                }
                return;
            }
            
            // Validate floor exists
            if (!room.floor) {
                if (this.config.debugMode) {
                    console.warn('⚠️ Missing floor for room:', room.name);
                }
                return;
            }
            
            try {
                // ✅ UPDATED: Get floor number and create icon with offset
                const floorNumber = this.getFloorNumber(room.floor);
                const icon = this.createIcon(floorNumber, room.iconOffset || [0, 0]);
                
                // Create marker with high z-index
                const marker = L.marker(coords, { 
                    icon: icon,
                    zIndexOffset: 1000
                });
                
                // Add popup
                const popup = this.createPopup(room, building.name);
                marker.bindPopup(popup, {
                    maxWidth: 250,
                    className: 'room-popup-styled'
                });
                
                // Add to layer and state
                marker.addTo(state.rooms.layerGroup);
                state.rooms.markers.push(marker);
                
                validRoomCount++;
                
                if (this.config.debugMode) {
                    console.log(`✅ Added room marker: ${room.name}`);
                }
            } catch (error) {
                if (this.config.debugMode) {
                    console.error('❌ Error creating marker:', error);
                }
            }
        });
        
        if (this.config.debugMode && validRoomCount > 0) {
            console.log(`✅ Added ${validRoomCount} rooms for ${building.name}`);
        }
    },
    
    // Show rooms for a building (with zoom)
    show(building) {
        // Clear previous room markers
        this.clear();
        
        // Validate building has rooms
        if (!building.rooms || building.rooms.length === 0) {
            showNotification(`${building.name} has no rooms to display`, 'info');
            return;
        }
        
        // Create layer group
        state.rooms.layerGroup = L.layerGroup().addTo(state.map);
        state.rooms.activeBuilding = building;
        
        const campus = campusData[state.currentCampus];
        let validRoomCount = 0;
        
        // Add each room marker
        building.rooms.forEach(room => {
            const coords = normalizeCoords(room.coords);
            
            if (!coords) {
                console.warn(`Skipping room "${room.name}" - invalid coordinates`);
                return;
            }
            
            // Validate coordinates
            if (!this.validateRoomCoords(coords, campus.center)) {
                return;
            }
            
            // ✅ UPDATED: Get floor number and create icon with offset
            const floorNumber = this.getFloorNumber(room.floor);
            const icon = this.createIcon(floorNumber, room.iconOffset || [0, 0]);
            
            // Create marker
            const marker = L.marker(coords, { 
                icon: icon,
                zIndexOffset: 1000
            });
            
            // Add popup
            const popup = this.createPopup(room, building.name);
            marker.bindPopup(popup, {
                maxWidth: 250,
                className: 'room-popup-styled'
            });
            
            // Add to layer and state
            marker.addTo(state.rooms.layerGroup);
            state.rooms.markers.push(marker);
            
            validRoomCount++;
        });
        
        // Zoom to building
        const buildingCoords = normalizeCoords(building.coords);
        if (buildingCoords) {
            state.map.setView(buildingCoords, 19, {
                animate: true,
                duration: 0.5
            });
        }
        
        // Show notification
        if (validRoomCount > 0) {
            showNotification(`📍 Showing ${validRoomCount} room(s) in ${building.name}`, 'success');
        } else {
            showNotification(`No valid room locations found`, 'warning');
        }
    },
    
    // Clear all room markers
    clear() {
        if (state.rooms.layerGroup) {
            state.map.removeLayer(state.rooms.layerGroup);
            state.rooms.layerGroup = null;
        }
        
        state.rooms.markers = [];
        state.rooms.activeBuilding = null;
    },

    // Go back to building popup and hide room markers
    goBackToBuilding() {
        const building = state.rooms.activeBuilding;
        this.clear();
        state.map?.closePopup();

        if (building) {
            const coords = normalizeCoords(building.coords);
            if (coords) {
                state.map.setView(coords, 19, {
                    animate: true,
                    duration: 0.4
                });

                const marker = state.markers.find(m => {
                    const latLng = m.getLatLng();
                    return Math.abs(latLng.lat - coords[0]) < 0.00001 &&
                           Math.abs(latLng.lng - coords[1]) < 0.00001;
                });

                if (marker) {
                    marker.openPopup();
                }
            }
            showNotification(`Back to ${building.name}`, 'info');
            return;
        }

        showNotification('Room markers hidden', 'info');
    },
    
    // Navigate to specific room
    navigateToRoom(lat, lng, roomName) {
        const destination = {
            name: roomName,
            coords: [lat, lng],
            matchType: 'room'
        };
        
        state.selectedLocation = destination;
        state.lastRoomBuilding = state.rooms.activeBuilding || null;
        state.isRoomNavigation = true;
        state.map?.closePopup();
        this.clear();
        
        navigateToSelected();
    },
    
    // Toggle room visibility
    toggle(building) {
        if (state.rooms.activeBuilding?.id === building.id) {
            this.clear();
            showNotification('Room markers hidden', 'info');
        } else {
            this.show(building);
        }
    },
    
    // 🆕 Enable/Disable debug mode
    setDebugMode(enabled) {
        this.config.debugMode = enabled;
        console.log(`Room marker debug mode: ${enabled ? 'ENABLED' : 'DISABLED'}`);
    }
};

function createTextLabelIcon(shortName, type, offset = [0, 0, 0]) {
    const colors = {
        'administration': '#2c5aa0',
        'department': '#39af56',
        'facilities': '#FBBC04',
        'office': '#EA4335',
        'landmark': '#9C27B0',
    };

    const bgColor = colors[type] || '#757575';
    const xOffset = offset[0] || 0;
    const yOffset = offset[1] || 0;
    const rotation = offset[2] || 0;

    const charWidth = 6;
    const padX = 10;
    const padY = 8;
    const W = (shortName.length * charWidth) + padX;
    const H = 22;

    const anchorX = W / 2 - xOffset;
    const anchorY = H / 2 - yOffset;

    return L.divIcon({
        className: '',
        html: `
            <div style="
                display: inline-block;
                background: ${bgColor};
                color: white;
                padding: ${padY / 2}px ${padX / 2}px;
                border-radius: 10px;
                font-weight: 700;
                font-size: 10px;
                font-family: 'Segoe UI', Arial, sans-serif;
                text-align: center;
                border: 2px solid white;
                box-shadow: 0 2px 6px rgba(0,0,0,0.3);
                white-space: nowrap;
                cursor: pointer;
                transform: rotate(${rotation}deg);
                transform-origin: center center;
                pointer-events: auto;
                line-height: 1;
            "
            onmouseover="this.style.transform='rotate(${rotation}deg) scale(1.15)'; this.style.boxShadow='0 4px 12px rgba(0,0,0,0.5)';"
            onmouseout="this.style.transform='rotate(${rotation}deg) scale(1)'; this.style.boxShadow='0 2px 6px rgba(0,0,0,0.3)';">
                ${shortName}
            </div>
        `,
        iconSize: [W, H],
        iconAnchor: [anchorX, anchorY],
        popupAnchor: [0, -20]
    });
}

// Event Listeners
function setupEventListeners() {
    try {   
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', (event) => {
                event.preventDefault();
                confirmLogout();
            });
        }

        // Center map button
        const centerMapBtn = document.getElementById('centerMapBtn');
        if (centerMapBtn) {
            centerMapBtn.addEventListener('click', centerMap);
        } else {
            console.warn('Center map button not found');
        }

        // Search
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', handleSearch);
        }
        
        const searchBtn = document.getElementById('searchBtn');
        if (searchBtn) {
            searchBtn.addEventListener('click', handleSearch);
        }

        // Category filters
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                state.currentFilter = btn.dataset.filter;
                updateMarkers();
                RoomMarkerManager.clear();
            });
        });

        // Quick access buttons
        document.querySelectorAll('.quick-access-btn').forEach(btn => {
            btn.addEventListener('click', () => handleQuickAction(btn.dataset.action));
        });

        // Modal controls
        document.querySelectorAll('.close-modal').forEach(btn => {
            btn.addEventListener('click', () => {
                document.getElementById('locationModal').classList.remove('active');
            });
        });

        const logoutModal = document.getElementById('logoutModal');
        const cancelLogout = document.getElementById('cancelLogout');
        const confirmLogoutBtn = document.getElementById('confirmLogout');

        if (cancelLogout) {
            cancelLogout.addEventListener('click', () => {
                logoutModal?.classList.remove('active');
            });
        }

        if (confirmLogoutBtn) {
            confirmLogoutBtn.addEventListener('click', () => {
                logoutModal?.classList.remove('active');
                logoutUser();
            });
        }

        if (logoutModal) {
            logoutModal.addEventListener('click', (event) => {
                if (event.target === logoutModal) {
                    logoutModal.classList.remove('active');
                }
            });
        }

        const navigateBtn = document.getElementById('navigateBtn');
        if (navigateBtn) {
            navigateBtn.addEventListener('click', navigateToSelected);
        }
        
        const saveLocationBtn = document.getElementById('saveLocationBtn');
        if (saveLocationBtn) {
            saveLocationBtn.addEventListener('click', saveCurrentLocation);
        }
        
        // UPDATED: Route controls - Two separate buttons
        const minimizeRouteBtn = document.getElementById('minimizeRoute');
        if (minimizeRouteBtn) {
            minimizeRouteBtn.addEventListener('click', minimizeRoutePanel);
        }

        const navModeMap = document.getElementById('navModeMap');
        if (navModeMap) {
            navModeMap.addEventListener('click', () => setNavigationMode('map'));
        }

        const navModeRoute = document.getElementById('navModeRoute');
        if (navModeRoute) {
            navModeRoute.addEventListener('click', () => setNavigationMode('route'));
        }

        const navMode3d = document.getElementById('navMode3d');
        if (navMode3d) {
            navMode3d.addEventListener('click', () => setNavigationMode('3d'));
        }

        const goBackRouteBtn = document.getElementById('goBackRoute');
        if (goBackRouteBtn) {
            goBackRouteBtn.addEventListener('click', goBackFromRoute);
        }
        
        const clearRouteBtn = document.getElementById('clearRoute');
        if (clearRouteBtn) {
            clearRouteBtn.addEventListener('click', clearRouteCompletely);
        }

        // Mobile menu
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        const sidebar = document.getElementById('sidebar');
        const sidebarOverlay = document.getElementById('sidebarOverlay');
        let isSidebarTransitioning = false;

        const setSidebarState = (isOpen) => {
            if (!sidebar) return;
            if (isSidebarTransitioning) return;
            isSidebarTransitioning = true;
            sidebar.classList.toggle('active', isOpen);
            document.body.classList.toggle('sidebar-open', isOpen);
            if (mobileMenuToggle) {
                mobileMenuToggle.classList.toggle('active', isOpen);
                mobileMenuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            }
            if (sidebarOverlay) {
                sidebarOverlay.classList.toggle('active', isOpen);
            }
            window.setTimeout(() => {
                isSidebarTransitioning = false;
            }, 320);
        };

        const closeSidebarForMobile = () => {
            if (window.matchMedia('(max-width: 768px)').matches) {
                setSidebarState(false);
            }
        };

        if (mobileMenuToggle && sidebar) {
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
            const handleSidebarToggle = (event) => {
                if (event) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                setSidebarState(!sidebar.classList.contains('active'));
            };
            mobileMenuToggle.addEventListener('click', handleSidebarToggle);
            mobileMenuToggle.addEventListener('touchstart', handleSidebarToggle, { passive: false });
        }

        if (sidebarOverlay) {
            sidebarOverlay.addEventListener('click', () => {
                setSidebarState(false);
            });
        }

        window.addEventListener('resize', () => {
            if (window.matchMedia('(min-width: 769px)').matches) {
                setSidebarState(false);
            }
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                logoutModal?.classList.remove('active');
                setSidebarState(false);
            }
        });

        const searchResults = document.getElementById('searchResults');
        if (searchResults) {
            searchResults.addEventListener('click', (event) => {
                if (event.target.closest('.search-result-item')) {
                    closeSidebarForMobile();
                }
            });
        }

        document.querySelectorAll('.category-btn, .quick-access-btn').forEach((btn) => {
            btn.addEventListener('click', closeSidebarForMobile);
        });

        // Click outside to close
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-section') && !e.target.closest('.search-btn')) {
                const searchResultsPanel = document.getElementById('searchResults');
                if (searchResultsPanel) {
                    searchResultsPanel.classList.add('hidden');
                }
            }
        });
        
        console.log('Event listeners setup complete');
    } catch (error) {
        console.error('Error setting up event listeners:', error);
    }
}
function centerMap() {
    if (state.map && state.currentCampus) {
        const campus = campusData[state.currentCampus];
        state.map.setView([campus.center.lat, campus.center.lng], campus.zoom);
        showNotification('Map centered');
    }
}

function loadCampus(campusKey) {
    if (!getAuthSession()) {
        document.getElementById('mainApp')?.classList.add('hidden');
        document.getElementById('authScreen')?.classList.remove('hidden');
        showNotification('Please login first to access the campus navigator.', 'error');
        return;
    }

    state.currentCampus = campusKey;
    const campus = campusData[campusKey];

    document.getElementById('mainApp').classList.remove('hidden');
    document.getElementById('campusNameHeader').textContent = campus.name;
    document.getElementById('mobileMenuToggle').classList.remove('hidden');

    // Show alerts — cycle through multiple
    if (campus.alerts && campus.alerts.length > 0) {
        let currentAlertIndex = 0;

        const showCurrentAlert = () => {
            const alert = campus.alerts[currentAlertIndex];
            showAlert(alert.message, alert.type);

            // ✅ Update counter e.g. "2 / 3"
            const counter = document.getElementById('alertCounter');
            if (counter && campus.alerts.length > 1) {
                counter.textContent = `${currentAlertIndex + 1} / ${campus.alerts.length}`;
            }
        };

        showCurrentAlert();

        // Cycle through alerts every 5 seconds if more than one
        if (campus.alerts.length > 1) {
            if (window._alertCycleInterval) clearInterval(window._alertCycleInterval);

            window._alertCycleInterval = setInterval(() => {
                currentAlertIndex = (currentAlertIndex + 1) % campus.alerts.length;
                showCurrentAlert();
            }, 5000);
        }
    }

    initializeMap();
    saveData();
}

function showNotification(message, type = 'info') {
    // Remove existing notification if any
    const existingNotif = document.querySelector('.notification-toast');
    if (existingNotif) {
        existingNotif.remove();
    }

    const notification = document.createElement('div');
    notification.className = `notification-toast ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('show');
    }, 100);

    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ============================================
// 📷 QR CODE SCANNER — Capture to Find Location
// ============================================

let _qrScanInterval = null;
let _qrScanLineDir = 1;
let _qrScanLinePos = 0;
let _qrAnimFrame = null;

function openQrScanner() {
    const modal = document.getElementById('qrScannerModal');
    if (!modal) return;
    modal.style.display = 'flex';
    document.getElementById('qrStatusText').textContent = 'Point camera at the QR code on the building entrance';
    document.getElementById('qrStatusText').style.color = '#555';
    startQrCamera();
    animateScanLine();
}

function closeQrScanner() {
    const modal = document.getElementById('qrScannerModal');
    if (modal) modal.style.display = 'none';
    stopQrCamera();
    if (_qrAnimFrame) {
        cancelAnimationFrame(_qrAnimFrame);
        _qrAnimFrame = null;
    }
}

function animateScanLine() {
    const line = document.getElementById('qrScanLine');
    if (!line) return;
    _qrScanLinePos += _qrScanLineDir * 2;
    if (_qrScanLinePos >= 176) _qrScanLineDir = -1;
    if (_qrScanLinePos <= 0) _qrScanLineDir = 1;
    line.style.top = _qrScanLinePos + 'px';
    _qrAnimFrame = requestAnimationFrame(animateScanLine);
}

async function startQrCamera() {
    // Load jsQR first
    if (!window.jsQR) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js';
        document.head.appendChild(script);
        await new Promise(resolve => script.onload = resolve);
    }

    // Use native file input instead of getUserMedia
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.capture = 'environment'; // opens rear camera directly

    input.onchange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const statusText = document.getElementById('qrStatusText');
        if (statusText) {
            statusText.textContent = '🔍 Reading QR code...';
            statusText.style.color = '#1e5b7a';
        }

        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const code = window.jsQR(imageData.data, imageData.width, imageData.height);

            if (code) {
                handleQrResult(code.data);
            } else {
                if (statusText) {
                    statusText.textContent = '❌ No QR code found. Please try again.';
                    statusText.style.color = '#ea4335';
                }
            }
            URL.revokeObjectURL(img.src);
        };
        img.src = URL.createObjectURL(file);
    };

    input.click();
}
function startQrScanning(video) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    _qrScanInterval = setInterval(() => {
        if (video.readyState !== video.HAVE_ENOUGH_DATA) return;

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const code = window.jsQR(imageData.data, imageData.width, imageData.height);

        if (code) {
            clearInterval(_qrScanInterval);
            handleQrResult(code.data);
        }
    }, 300);
}

function stopQrCamera() {
    if (_qrScanInterval) {
        clearInterval(_qrScanInterval);
        _qrScanInterval = null;
    }
}

function handleQrResult(data) {
    // Expected QR format: PRMSU:BUILDING_ID:FLOOR
    // Example: PRMSU:1:Ground Floor
    try {
        const parts = data.split(':');
        if (parts[0] !== 'PRMSU' || !parts[1]) {
            showQrError('Invalid QR code. Please scan a PRMSU building QR code.');
            return;
        }

        const buildingId = parseInt(parts[1]);
        const floor = parts[2] || 'Ground Floor';
        const campus = campusData[state.currentCampus];
        const building = campus.locations.find(l => l.id === buildingId);

        if (!building) {
            showQrError('Building not found. Please try again.');
            return;
        }

        // Set user location to building coords
        const coords = normalizeCoords(building.coords);
        if (!coords) return;

        state.userLocation = { lat: coords[0], lng: coords[1] };
        updateUserLocationMarker(coords[0], coords[1], null, { pan: true });

        closeQrScanner();
        showQrSuccess(building.name, floor);

    } catch (err) {
        showQrError('Could not read QR code. Please try again.');
    }
}

function showQrError(message) {
    const statusText = document.getElementById('qrStatusText');
    if (statusText) {
        statusText.textContent = '❌ ' + message;
        statusText.style.color = '#ea4335';
    }
    // Restart scanning after 2 seconds
    setTimeout(() => {
        if (statusText) {
            statusText.textContent = 'Point camera at the QR code on the building entrance';
            statusText.style.color = '#555';
        }
        const video = document.getElementById('qrVideo');
        if (video) startQrScanning(video);
    }, 2000);
}

function showQrSuccess(buildingName, floor) {
    const banner = document.getElementById('qrSuccessBanner');
    if (!banner) return;
    banner.innerHTML = `✅ Location set!<br><span style="font-size:12px; opacity:0.9;">${buildingName} — ${floor}</span>`;
    banner.style.display = 'block';
    showNotification(`📍 Location set to ${buildingName}`, 'success');
    setTimeout(() => {
        banner.style.display = 'none';
    }, 4000);
}

// ============================================
// 📄 QR CODE GENERATOR — for printing
// ============================================

function generateQrCodes() {
    const campus = campusData[state.currentCampus];
    const win = window.open('', '_blank');

    const qrCards = campus.locations.map(loc => `
        <div style="
            display: inline-block;
            width: 200px;
            margin: 12px;
            padding: 16px;
            border: 2px solid #1e5b7a;
            border-radius: 12px;
            text-align: center;
            font-family: sans-serif;
            vertical-align: top;
        ">
            <div style="font-size:12px; font-weight:700; color:#1e5b7a; margin-bottom:8px;">${loc.name}</div>
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=PRMSU:${loc.id}:Ground+Floor" 
                 width="150" height="150" alt="QR for ${loc.name}"/>
            <div style="font-size:11px; color:#666; margin-top:8px;">PRMSU:${loc.id}:Ground Floor</div>
        </div>
    `).join('');

    win.document.write(`
        <html>
        <head><title>PRMSU Building QR Codes</title></head>
        <body style="padding:20px; background:white;">
            <h1 style="font-family:sans-serif; color:#1e5b7a; text-align:center;">PRMSU Campus Building QR Codes</h1>
            <p style="font-family:sans-serif; text-align:center; color:#666;">Print and post at each building entrance</p>
            <div style="text-align:center;">${qrCards}</div>
        </body>
        </html>
    `);
    win.document.close();
    win.print();
}

// Map Initialization
function initializeMap() {
    const campus = campusData[state.currentCampus];

    if (state.map) {
        state.map.remove();
    }

    state.map = L.map('map').setView([campus.center.lat, campus.center.lng], campus.zoom);

    // ✅ Define tile layers
    window.tileLayers = {
        default: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap contributors'
        }),
        satellite: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            maxZoom: 19,
            maxNativeZoom: 18,
            attribution: '© Esri, Maxar, Earthstar Geographics'
        })
    };

    // ✅ Add default layer on load
    window.tileLayers.default.addTo(state.map);
    window.currentMapStyle = 'default';

    // Draw campus boundary
    drawCampusBoundary();

    // Add location markers
    addMarkers();

    addBuildingFootprints();
}


// Draw campus boundary with red outline like the example
function drawCampusBoundary() {
    // Remove old boundary if exists
    if (state.campusBoundary) {
        state.map.removeLayer(state.campusBoundary);
    }
    
    const campus = campusData[state.currentCampus];
    
    if (!campus.boundary) return;
    
    // Create polygon for campus boundary with RED outline
    state.campusBoundary = L.polygon(campus.boundary, {
        color: '#ff0000ff',           // Red color like the example
        weight: 4,                   // Thick line
        opacity: 0.9,                // Almost fully opaque
        fillColor: 'transparent',    // No fill, just outline
        fillOpacity: 0,              // Completely transparent fill
        lineJoin: 'round',
        lineCap: 'round',
        smoothFactor: 1
    }).addTo(state.map);
    
    // Add popup to boundary
    state.campusBoundary.bindPopup(`
        <div style="text-align: center; padding: 5px;">
            <strong style="color: #2c5aa0;">🏫 ${campus.name}</strong><br>
            <small style="color: #666;">Campus Boundary</small>
        </div>
    `);
}

function addBuildingFootprints() {
    if (state.currentCampus !== 'iba') return;
    if (!state.map) return;

    // Clear old footprints if map was re-initialized
    if (window._buildingFootprints && window._buildingFootprints.length > 0) {
        window._buildingFootprints.forEach(p => state.map.removeLayer(p));
    }

    window._buildingFootprints = [];

    const footprintStyle = {
        color: '#aaaaaa',
        weight: 1,
        fillColor: '#d1cdc7',
        fillOpacity: 1,
        interactive: false
    };

    window._buildingFootprints.push(
        L.polygon([
            [15.31845, 119.98261],
            [15.31845, 119.98309],
            [15.31785, 119.98311],
            [15.31784, 119.98262]
        ], footprintStyle).addTo(state.map)
    );

    window._buildingFootprints.push(
        L.polygon([
            [15.31684, 119.98294],
            [15.31668, 119.98310],
            [15.31664, 119.98306],
            [15.31680, 119.98289]
        ], footprintStyle).addTo(state.map)
    );

    console.log('✅ Footprints created:', window._buildingFootprints.length);
}

function switchMapStyle(style) {
    if (style === window.currentMapStyle) return;

    // Remove current layer
    state.map.removeLayer(window.tileLayers[window.currentMapStyle]);

    // Add new layer
    window.tileLayers[style].addTo(state.map);
    window.currentMapStyle = style;

    // Update button styles
    const defaultBtn   = document.getElementById('mapStyleDefault');
    const satelliteBtn = document.getElementById('mapStyleSatellite');

    if (defaultBtn && satelliteBtn) {
        defaultBtn.classList.toggle('is-active', style === 'default');
        satelliteBtn.classList.toggle('is-active', style === 'satellite');
    }

    // ✅ Update building footprint colors based on map style
    if (window._buildingFootprints && window._buildingFootprints.length > 0) {
        const isSatellite = style === 'satellite';
        window._buildingFootprints.forEach(polygon => {
            polygon.setStyle({
                color:       isSatellite ? '#b37272' : '#aaaaaa',
                fillColor:   isSatellite ? '#e05555' : '#d1cdc7',
                fillOpacity: isSatellite ? 0.6 : 1,
                weight:      isSatellite ? 2 : 1
            });
        });
    }
}


// Marker Icons
function getMarkerIcon(type) {
    const icons = {
        administration: '🏛️', // Government / Admin building
        department: '🏢',     // Department / Academic building
        facilities: '⚡',     // Facilities (power, lab, utilities)
        office: '📋',         // Office / Staff room
        landmark: '📍',       // Landmark or point of interest
        all: '🗺️'            // General marker for all types
    };

    const colors = {
        administration: '#2c5aa0',
        department: '#34a853',
        facilities: '#fbbc04',
        office: '#ea4335',
        landmark: '#9c27b0',
        all: '#666'
    };
    
    return L.divIcon({
        className: 'custom-marker',
        html: `<div style="background: ${colors[type]}; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 18px; box-shadow: 0 2px 6px rgba(0,0,0,0.3); border: 2px solid white;">${icons[type]}</div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 15]
    });
}

function updateMiniMap(floorIndex, spotIndex, building) {
    const floor = building.tourPhotos[floorIndex];
    const spot = floor.spots[spotIndex];

    // Update floor label
    const label = document.getElementById('miniMapLabel');
    if (label) label.textContent = floor.floor;

    // Update spot name
    const spotName = document.getElementById('miniMapSpotName');
    if (spotName) spotName.textContent = spot.label;

    // Rebuild dots if floor changed
    const dotsContainer = document.getElementById('miniMapDots');
    if (dotsContainer) {
        dotsContainer.innerHTML = floor.spots.map((s, i) => `
            <div id="miniDot_${i}" title="${s.label}" style="
                width:${i === spotIndex ? '12px' : '8px'};
                height:${i === spotIndex ? '12px' : '8px'};
                border-radius:50%;
                background:${i === spotIndex ? '#6c63ff' : 'rgba(255,255,255,0.25)'};
                border:${i === spotIndex ? '2px solid white' : '1px solid rgba(255,255,255,0.3)'};
                transition:all 0.3s ease;
                cursor:pointer;
                box-shadow:${i === spotIndex ? '0 0 0 4px rgba(108,99,255,0.3)' : 'none'};
            " onclick="goToSpot(${i})"></div>
        `).join('');
    }
}

function updateMarkers() {
    // Clear existing markers
    state.markers.forEach(marker => marker.remove());
    state.markers = [];
    
    // Clear room markers when updating building markers
    RoomMarkerManager.clear();
    
    const campus = campusData[state.currentCampus];
    
    campus.locations.forEach(location => {
        // Apply filter
        if (state.currentFilter !== 'all' && location.type !== state.currentFilter) {
            return;
        }
        
        const coords = normalizeCoords(location.coords);
        if (!coords) {
            console.error('Skipping location with invalid coords:', location.name);
            return;
        }
        
        // ✅ FIXED: Pass labelOffset with rotation support
        const icon = createTextLabelIcon(
            location.shortName || location.name.substring(0, 4).toUpperCase(), 
            location.type,
            location.labelOffset || [0, 0, 0]  // ✅ [x, y, rotation]
        );
        
        const marker = L.marker(coords, {
            icon: icon
        }).addTo(state.map);
        
        // ✅ FIXED: Complete popup content (same as addMarkers)
        const popupContent = `
            <div class="custom-popup-with-image" style="
                display: flex;
                gap: 15px;
                min-width: 400px;
                padding: 5px;
            ">
                <!-- Left side: Text content -->
                <div style="flex: 1; min-width: 200px;">
                    <h3 style="
                        margin: 0 0 8px 0;
                        color: #2c5aa0;
                        font-size: 16px;
                        font-weight: 600;
                        line-height: 1.3;
                    ">${location.name}</h3>
                    
                    <p style="
                        margin: 5px 0;
                        color: #666;
                        font-size: 13px;
                    ">
                        <strong>Type:</strong> ${location.type.charAt(0).toUpperCase() + location.type.slice(1)}
                    </p>
                    
                    <!-- Show Rooms Button (if rooms exist) -->
                    ${location.rooms && location.rooms.length > 0 ? 
                        `<button 
                            onclick='RoomMarkerManager.toggle(${JSON.stringify(location).replace(/'/g, "\\'")})'
                            style="
                                width: 100%;
                                padding: 10px;
                                background: linear-gradient(135deg, #9c27b0 0%, #7b1fa2 100%);
                                color: white;
                                border: none;
                                border-radius: 6px;
                                cursor: pointer;
                                margin-bottom: 8px;
                                font-size: 14px;
                                font-weight: 600;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                gap: 8px;
                                transition: all 0.3s;
                            "
                            onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 12px rgba(156, 39, 176, 0.4)'"
                            onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'"
                        >
                            <span style="font-size: 18px;">🚪</span>
                            <span>Show ${location.rooms.length} Room(s)</span>
                        </button>` 
                        : ''}
                    
                    <button class="popup-btn" onclick="showLocationDetails(${JSON.stringify(location).replace(/"/g, '&quot;')})" style="
                        width: 100%;
                        padding: 10px;
                        background: linear-gradient(135deg, #2c5aa0 0%, #1e3a6f 100%);
                        color: white;
                        border: none;
                        border-radius: 6px;
                        cursor: pointer;
                        font-weight: 600;
                        transition: all 0.3s;
                        font-size: 14px;
                    " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 12px rgba(44, 90, 160, 0.3)';" 
                       onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none';">
                        View Details
                    </button>
                </div>
                
                <!-- Right side: Building Image -->
                ${location.image ? `
                    <div style="
                        flex-shrink: 0;
                        width: 180px;
                        height: 150px;
                        border-radius: 8px;
                        overflow: hidden;
                        border: 2px solid #e0e0e0;
                        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                    ">
                        <img 
                            src="${location.image}" 
                            alt="${location.name}"
                            style="
                                width: 100%;
                                height: 100%;
                                object-fit: cover;
                                display: block;
                            "
                            onerror="this.src='https://via.placeholder.com/180x150/cccccc/666666?text=No+Image';"
                        />
                    </div>
                ` : ''}
            </div>
        `;
        
        marker.bindPopup(popupContent, {
            maxWidth: 450,
            minWidth: 400,
            className: 'building-popup-with-image'
        });
        
        state.markers.push(marker);
    });
    
    const filteredCount = state.markers.length;
    const filterName = state.currentFilter === 'all' ? 'All locations' : state.currentFilter.charAt(0).toUpperCase() + state.currentFilter.slice(1);
    showNotification(`Showing ${filteredCount} ${filterName}`, 'info');
}

// Add Markers with Image in Popup - Auto-show rooms
function addMarkers() {
    // Clear existing markers
    state.markers.forEach(marker => marker.remove());
    state.markers = [];
    
    const campus = campusData[state.currentCampus];
    
    campus.locations.forEach(location => {
        // Skip if filtering and doesn't match
        if (state.currentFilter !== 'all' && location.type !== state.currentFilter) {
            return;
        }
        
        // Normalize coordinates
        const coords = normalizeCoords(location.coords);
        if (!coords) {
            console.error('Skipping location with invalid coords:', location.name);
            return;
        }
        
        // 🆕 CHANGED: Use text label instead of icon
        const icon = createTextLabelIcon(
            location.shortName || location.name.substring(0, 4).toUpperCase(), 
            location.type,
            location.labelOffset || [0, 0, 0]  // ✅ Use custom offset or default [0, 0]
        );
        
        const marker = L.marker(coords, {
            icon: icon
        }).addTo(state.map);
        
        // Your existing popup code...
        const popupContent = `
            <div class="custom-popup-with-image" style="
                display: flex;
                gap: 15px;
                min-width: 400px;
                padding: 5px;
            ">
                <!-- Left side: Text content -->
                <div style="flex: 1; min-width: 200px;">
                    <h3 style="
                        margin: 0 0 8px 0;
                        color: #2c5aa0;
                        font-size: 16px;
                        font-weight: 600;
                        line-height: 1.3;
                    ">${location.name}</h3>
                    
                    <p style="
                        margin: 5px 0;
                        color: #666;
                        font-size: 13px;
                    ">
                        <strong>Type:</strong> ${location.type.charAt(0).toUpperCase() + location.type.slice(1)}
                    </p>
                    
                    <!-- Show Rooms Button (if rooms exist) -->
                    ${location.rooms && location.rooms.length > 0 ? 
                        `<button 
                            onclick='RoomMarkerManager.toggle(${JSON.stringify(location).replace(/'/g, "\\'")})'
                            style="
                                width: 100%;
                                padding: 10px;
                                background: linear-gradient(135deg, #9c27b0 0%, #7b1fa2 100%);
                                color: white;
                                border: none;
                                border-radius: 6px;
                                cursor: pointer;
                                margin-bottom: 8px;
                                font-size: 14px;
                                font-weight: 600;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                gap: 8px;
                                transition: all 0.3s;
                            "
                            onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 12px rgba(156, 39, 176, 0.4)'"
                            onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'"
                        >
                            <span style="font-size: 18px;">🚪</span>
                            <span>Show ${location.rooms.length} Room(s)</span>
                        </button>` 
                        : ''}
                    
                    <button class="popup-btn" onclick="showLocationDetails(${JSON.stringify(location).replace(/"/g, '&quot;')})" style="
                        width: 100%;
                        padding: 10px;
                        background: linear-gradient(135deg, #2c5aa0 0%, #1e3a6f 100%);
                        color: white;
                        border: none;
                        border-radius: 6px;
                        cursor: pointer;
                        font-weight: 600;
                        transition: all 0.3s;
                        font-size: 14px;
                    " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 12px rgba(44, 90, 160, 0.3)';" 
                       onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none';">
                        View Details
                    </button>
                </div>
                
                <!-- Right side: Building Image -->
                ${location.image ? `
                    <div style="
                        flex-shrink: 0;
                        width: 180px;
                        height: 150px;
                        border-radius: 8px;
                        overflow: hidden;
                        border: 2px solid #e0e0e0;
                        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                    ">
                        <img 
                            src="${location.image}" 
                            alt="${location.name}"
                            style="
                                width: 100%;
                                height: 100%;
                                object-fit: cover;
                                display: block;
                            "
                            onerror="this.src='https://via.placeholder.com/180x150/cccccc/666666?text=No+Image';"
                        />
                    </div>
                ` : ''}
            </div>
        `;
        
        marker.bindPopup(popupContent, {
            maxWidth: 450,
            minWidth: 400,
            className: 'building-popup-with-image'
        });
        
        state.markers.push(marker);
    });
    
    console.log(`Added ${state.markers.length} markers to map`);
}
// Add room markers (optional - call this if you want to show individual rooms)
function addRoomMarkers() {
    const campus = campusData[state.currentCampus];
    
    campus.locations.forEach(building => {
        if (Array.isArray(building.rooms) && typeof building.rooms[0] === 'object') {
            building.rooms.forEach(room => {
                const roomIcon = L.divIcon({
                    className: 'room-marker',
                    html: `<div style="
                        background: #4285f4; 
                        width: 20px; 
                        height: 20px; 
                        border-radius: 50%; 
                        border: 2px solid white;
                        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
                    "></div>`,
                    iconSize: [20, 20],
                    iconAnchor: [10, 10]
                });
                
                const marker = L.marker(room.coords, {
                    icon: roomIcon
                }).addTo(state.map);
                
                marker.bindPopup(`
                    <div style="text-align: center;">
                        <strong>🚪 ${room.name}</strong><br>
                        <small>${building.name}</small><br>
                        <small>${room.floor} • ${room.type}</small><br>
                        <button class="popup-btn" onclick="navigateToRoom(${room.id}, ${building.id})" style="
                            margin-top: 8px;
                            padding: 6px 12px;
                            background: #2c5aa0;
                            color: white;
                            border: none;
                            border-radius: 4px;
                            cursor: pointer;
                        ">Navigate</button>
                    </div>
                `);
                
                state.markers.push(marker);
            });
        }
    });
}

// Update initializeMap to include room markers (optional)
// Add this line to your initializeMap() function if you want room markers:
// addRoomMarkers();  // Uncomment to show room markers

// Global functions for popup buttons
window.navigateToLocation = function(locationId) {
    const campus = campusData[state.currentCampus];
    const location = campus.locations.find(loc => loc.id === locationId);
    if (location) {
        state.selectedLocation = location;
        navigateToSelected();
    }
};

window.viewDetails = function(locationId) {
    const campus = campusData[state.currentCampus];
    const location = campus.locations.find(loc => loc.id === locationId);
    if (location) {
        showLocationDetails(location);
    }
};

// Enhanced Search Functionality - FIXED
function handleSearch() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    const resultsDiv = document.getElementById('searchResults');
    
    if (!query) {
        resultsDiv.classList.add('hidden');
        return;
    }
    
    const campus = campusData[state.currentCampus];
    const results = [];
    
    campus.locations.forEach(building => {
        // Search building names and short names
        if (building.name.toLowerCase().includes(query) ||
            (building.shortName && building.shortName.toLowerCase().includes(query))) {
            results.push({ 
                ...building, 
                matchType: 'building',
                displayName: building.name,
                subtitle: building.type
            });
        }
        // Search room names - FIX: Check if rooms exist and is array
        if (building.rooms && Array.isArray(building.rooms) && building.rooms.length > 0) {
            building.rooms.forEach(room => {
                // FIX: Check if room.name exists before searching
                if (room.name && room.name.toLowerCase().includes(query)) {
                    results.push({ 
                        ...room,
                        buildingName: building.name,
                        buildingId: building.id,
                        matchType: 'room',
                        displayName: room.name,
                        subtitle: `${building.name} - ${room.floor}`
                    });
                }
            });
        }
    });
    
    console.log(`Search query: "${query}" - Found ${results.length} results`);
    displaySearchResults(results);
}

function displaySearchResults(results) {
    const resultsDiv = document.getElementById('searchResults');
    resultsDiv.innerHTML = '';

        // In displaySearchResults(), add this after getting results:
    const MAX_RESULTS = 50; // Show only first 50 results
    const displayResults = results.slice(0, MAX_RESULTS);

    if (results.length > MAX_RESULTS) {
        // Show message that there are more results
        const moreMsg = document.createElement('div');
        moreMsg.style.cssText = 'padding: 10px; text-align: center; color: #666; font-size: 12px; border-top: 1px solid #e0e0e0;';
        moreMsg.textContent = `Showing ${MAX_RESULTS} of ${results.length} results. Be more specific to narrow down.`;
        resultsDiv.appendChild(moreMsg);
    }
    
    if (results.length === 0) {
        resultsDiv.innerHTML = '<div class="search-result-item">No results found</div>';
        resultsDiv.classList.remove('hidden');
        return;
    }
    
    // Add result count header
    const countHeader = document.createElement('div');
    countHeader.style.cssText = 'padding: 10px 15px; background: #f0f7ff; color: #2c5aa0; font-weight: 600; font-size: 13px; border-bottom: 2px solid #2c5aa0; position: sticky; top: 0; z-index: 10;';
    countHeader.textContent = `${results.length} Result${results.length > 1 ? 's' : ''} Found`;
    resultsDiv.appendChild(countHeader);
    
    results.forEach(result => {
        const item = document.createElement('div');
        item.className = 'search-result-item';
        
        const icon = result.matchType === 'building' ? '🏢' : '🚪';
        
        item.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <span style="font-size: 24px;">${icon}</span>
                <div style="flex: 1;">
                    <div class="result-name">${result.displayName}</div>
                    <div class="result-type" style="font-size: 12px; color: #666;">
                        ${result.subtitle}
                    </div>
                    ${result.matchType === 'room' && result.instructor ? `
                    <div style="font-size: 12px; color: #9c27b0; margin-top: 2px;">
                        👨‍🏫 ${result.instructor}
                    </div>` : ''}
                </div>
            </div>
        `;
        
        item.addEventListener('click', () => {
            if (result.matchType === 'building') {
                // FIX: Handle both array [lat, lng] and object {lat, lng} formats
                let coords;
                if (Array.isArray(result.coords)) {
                    coords = result.coords; // Already array format
                } else if (result.coords && result.coords.lat && result.coords.lng) {
                    coords = [result.coords.lat, result.coords.lng]; // Convert object to array
                } else {
                    console.error('Invalid coords format:', result.coords);
                    showNotification('Error: Invalid location coordinates', 'error');
                    return;
                }
                
                // Show popup and zoom to building
                state.map.setView(coords, 19);
                
                // Find the marker and open its popup
                const marker = state.markers.find(m => {
                    const markerLat = m.getLatLng().lat;
                    const markerLng = m.getLatLng().lng;
                    return Math.abs(markerLat - coords[0]) < 0.00001 && 
                           Math.abs(markerLng - coords[1]) < 0.00001;
                });
                
                if (marker) {
                    marker.openPopup();
                }
            } else {
                showRoomDetails(result);
                state.map.setView(result.coords, 20);
            }
            resultsDiv.classList.add('hidden');
        });
        resultsDiv.appendChild(item);
    });
    
    resultsDiv.classList.remove('hidden');
}

function showLocationDetails(location) {
    state.selectedLocation = location;
    
    const modal = document.getElementById('locationModal');
    document.getElementById('locationTitle').textContent = location.name;
    
    let roomsList = '';
    if (Array.isArray(location.rooms) && location.rooms.length > 0) {
        if (typeof location.rooms[0] === 'object') {
            roomsList = `
                <p><strong>Available Rooms:</strong></p>
                <div style="max-height: 300px; overflow-y: auto;">
                    ${location.rooms.map(room => `
                        <div class="room-item" onclick="navigateToRoom(${room.id}, ${location.id})" style="
                            padding: 12px;
                            margin: 8px 0;
                            background: #f8faf8;
                            border-radius: 8px;
                            cursor: pointer;
                            border-left: 4px solid #2c5aa0;
                            transition: all 0.3s;
                        " onmouseover="this.style.background='#e9ecef'; this.style.transform='translateX(5px)'" 
                           onmouseout="this.style.background='#f8f9fa'; this.style.transform='translateX(0)'">
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <div>
                                    <strong>🚪 ${room.name}</strong>
                                    <div style="font-size: 12px; color: #666; margin-top: 4px;">
                                        ${room.floor}
                                    </div>
                                </div>
                                <span style="color: #000000ff;">→ Go</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        } else {
            roomsList = `
                <p><strong>Available Rooms:</strong></p>
                <ul>
                    ${location.rooms.map(room => `<li>${room}</li>`).join('')}
                </ul>
            `;
        }
    }

    // ✅ Virtual Tour button — only shows for buildings with tourPhotos
    const tourBtn = location.tourPhotos && location.tourPhotos.length > 0
        ? `<button onclick="openVirtualTour('${location.name}')" style="
            width: 100%;
            margin-top: 8px;
            padding: 10px;
            background: linear-gradient(135deg, #2c5aa0, #6c63ff);
            color: white;
            border: none;
            border-radius: 10px;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
        ">🏛️ Virtual Tour</button>`
        : '';
    
    const details = `
        <p><strong>Type:</strong> ${location.type.charAt(0).toUpperCase() + location.type.slice(1)}</p>
        ${location.description ? `<p><strong>Description:</strong> ${location.description}</p>` : ''}
        ${roomsList}
        ${tourBtn}
    `;
    
    document.getElementById('locationDetails').innerHTML = details;
    modal.classList.add('active');
}

function openVirtualTour(buildingName) {
    const campus = campusData[state.currentCampus];
    const building = campus.locations.find(l => l.name === buildingName);
    if (!building || !building.tourPhotos) return;

    const existing = document.getElementById('virtualTourModal');
    if (existing) existing.remove();

    const floors = building.tourPhotos;

    const modal = document.createElement('div');
    modal.id = 'virtualTourModal';
    modal.className = 'virtual-tour-modal';
    modal.dataset.building = buildingName;
    modal.dataset.floorIndex = '0';
    modal.dataset.spotIndex = '0';
    modal.style.cssText = `
        position: fixed;
        top: 0; left: 0;
        width: 100%; height: 100%;
        background: rgba(0,0,0,0.97);
        z-index: 99999;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `;

    modal.innerHTML = `
        <div class="virtual-tour-shell">

            <!-- Header -->
            <div class="virtual-tour-header">
                <h2 class="virtual-tour-title">🏛️ ${buildingName} — Virtual Tour</h2>
                <button class="virtual-tour-exit-btn" type="button">Exit Tour</button>
            </div>

            <!-- Floor Tabs -->
            <div id="floorTabs" style="display:flex; gap:10px; margin-bottom:16px; flex-wrap:wrap;">
                ${floors.map((f, i) => `
                    <button onclick="switchFloor(${i})" id="floorTab_${i}" style="
                        padding: 8px 20px;
                        border-radius: 20px;
                        border: 2px solid ${i === 0 ? '#6c63ff' : 'rgba(255,255,255,0.3)'};
                        background: ${i === 0 ? '#6c63ff' : 'transparent'};
                        color: white;
                        font-weight: 600;
                        font-size: 13px;
                        cursor: pointer;
                        transition: all 0.2s;
                    ">${f.floor}</button>
                `).join('')}
            </div>

            <!-- Panorama Wrapper -->
            <div class="virtual-tour-panorama" style="position: relative; width: 100%; border-radius: 12px; overflow: hidden; background: #111;">

                <button class="virtual-tour-exit-fab" type="button" aria-label="Exit virtual tour">Exit</button>

                <!-- Fade overlay for transitions -->
                <div id="tourFade" style="
                    position: absolute;
                    inset: 0;
                    background: black;
                    opacity: 0;
                    z-index: 5;
                    pointer-events: none;
                    transition: opacity 0.35s ease;
                    border-radius: 12px;
                "></div>

                <!-- Pannellum container -->
                <div id="panoramaContainer" style="
                    width: 100%;
                    height: 100%;
                    border-radius: 12px;
                "></div>

                <!-- Back Arrow -->
                <div id="arrowBack" onclick="moveSpot(-1)" style="
                    position: absolute;
                    left: 50%;
                    bottom: 80px;
                    transform: translateX(-50%) translateX(-60px) rotate(270deg);
                    width: 64px;
                    height: 64px;
                    border-radius: 50%;
                    background: rgba(255,255,255,0.25);
                    backdrop-filter: blur(4px);
                    cursor: pointer;
                    z-index: 10;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: background 0.2s, transform 0.2s, opacity 0.3s;
                    border: 2px solid rgba(255,255,255,0.4);
                " onmouseover="this.style.background='rgba(255,255,255,0.45)'"
                   onmouseout="this.style.background='rgba(255,255,255,0.25)'">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <polyline points="7,18 14,10 21,18" stroke="white" stroke-width="3.5"
                            stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>

                <!-- Forward Arrow -->
                <div id="arrowForward" onclick="moveSpot(1)" style="
                    position: absolute;
                    left: 50%;
                    bottom: 80px;
                    transform: translateX(-50%) translateX(60px);
                    width: 64px;
                    height: 64px;
                    border-radius: 50%;
                    background: rgba(255,255,255,0.25);
                    backdrop-filter: blur(4px);
                    cursor: pointer;
                    z-index: 10;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: background 0.2s, transform 0.2s, opacity 0.3s;
                    border: 2px solid rgba(255,255,255,0.4);
                " onmouseover="this.style.background='rgba(255,255,255,0.45)'"
                   onmouseout="this.style.background='rgba(255,255,255,0.25)'">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <polyline points="7,18 14,10 21,18" stroke="white" stroke-width="3.5"
                            stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>

                <!-- Dot Indicator (bottom right) -->
                <div id="miniMap" style="
                    position: absolute;
                    bottom: 16px;
                    right: 16px;
                    background: rgba(0,0,0,0.65);
                    border: 2px solid rgba(255,255,255,0.3);
                    border-radius: 12px;
                    padding: 10px 14px;
                    z-index: 10;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 8px;
                    min-width: 120px;
                ">
                    <!-- Floor label -->
                    <div id="miniMapLabel" style="
                        color: rgba(255,255,255,0.6);
                        font-size: 11px;
                        font-weight: 600;
                        letter-spacing: 0.5px;
                        text-transform: uppercase;
                    ">${floors[0].floor}</div>

                    <!-- Dot trail -->
                    <div id="miniMapDots" style="
                        display: flex;
                        gap: 6px;
                        align-items: center;
                        justify-content: center;
                        flex-wrap: wrap;
                        max-width: 100px;
                    ">
                        ${floors[0].spots.map((s, i) => `
                            <div id="miniDot_${i}" title="${s.label}" style="
                                width: ${i === 0 ? '12px' : '8px'};
                                height: ${i === 0 ? '12px' : '8px'};
                                border-radius: 50%;
                                background: ${i === 0 ? '#6c63ff' : 'rgba(255,255,255,0.25)'};
                                border: ${i === 0 ? '2px solid white' : '1px solid rgba(255,255,255,0.3)'};
                                transition: all 0.3s ease;
                                cursor: pointer;
                                box-shadow: ${i === 0 ? '0 0 0 4px rgba(108,99,255,0.3)' : 'none'};
                            " onclick="goToSpot(${i})"></div>
                        `).join('')}
                    </div>

                    <!-- Current spot name -->
                    <div id="miniMapSpotName" style="
                        color: white;
                        font-size: 11px;
                        font-weight: 500;
                        text-align: center;
                        max-width: 100px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    ">${floors[0].spots[0].label}</div>
                </div>

            </div>

            <!-- Spot label + dots -->
            <div style="display:flex; justify-content:center; align-items:center; gap:16px; margin-top:10px;">
                <p id="spotLabel" style="color:rgba(255,255,255,0.7); font-size:13px; margin:0;">
                    📍 <strong style="color:white;">${floors[0].spots[0].label}</strong>
                </p>
                <p id="spotCounter" style="color:rgba(255,255,255,0.4); font-size:12px; margin:0;">
                    1 / ${floors[0].spots.length}
                </p>
            </div>

            <!-- Dot indicators -->
            <div id="spotDots" style="display:flex; justify-content:center; gap:8px; margin-top:8px;">
                ${floors[0].spots.map((_, i) => `
                    <div id="dot_${i}" onclick="goToSpot(${i})" style="
                        width: 8px; height: 8px;
                        border-radius: 50%;
                        background: ${i === 0 ? '#6c63ff' : 'rgba(255,255,255,0.3)'};
                        cursor: pointer;
                        transition: background 0.2s;
                    "></div>
                `).join('')}
            </div>

        </div>
    `;

    document.body.appendChild(modal);

    const exitButtons = modal.querySelectorAll('.virtual-tour-exit-btn, .virtual-tour-exit-fab');
    exitButtons.forEach(btn => btn.addEventListener('click', closeVirtualTour));

    modal.addEventListener('click', e => {
        if (e.target === modal) closeVirtualTour();
    });

    document._tourKeyHandler = e => {
        if (e.key === 'ArrowRight') moveSpot(1);
        if (e.key === 'ArrowLeft')  moveSpot(-1);
        if (e.key === 'Escape')     closeVirtualTour();
    };
    document.addEventListener('keydown', document._tourKeyHandler);

    loadPanorama(floors[0].spots[0].src, false);
    updateArrows(0, floors[0].spots.length);
}

function updateMiniMap(floorIndex, spotIndex, building) {
    const floor = building.tourPhotos[floorIndex];
    const spot = floor.spots[spotIndex];

    const label = document.getElementById('miniMapLabel');
    if (label) label.textContent = floor.floor;

    const spotName = document.getElementById('miniMapSpotName');
    if (spotName) spotName.textContent = spot.label;

    const dotsContainer = document.getElementById('miniMapDots');
    if (dotsContainer) {
        dotsContainer.innerHTML = floor.spots.map((s, i) => `
            <div id="miniDot_${i}" title="${s.label}" style="
                width: ${i === spotIndex ? '12px' : '8px'};
                height: ${i === spotIndex ? '12px' : '8px'};
                border-radius: 50%;
                background: ${i === spotIndex ? '#6c63ff' : 'rgba(255,255,255,0.25)'};
                border: ${i === spotIndex ? '2px solid white' : '1px solid rgba(255,255,255,0.3)'};
                transition: all 0.3s ease;
                cursor: pointer;
                box-shadow: ${i === spotIndex ? '0 0 0 4px rgba(108,99,255,0.3)' : 'none'};
            " onclick="goToSpot(${i})"></div>
        `).join('');
    }
}

function loadPanorama(src, fade = true) {
    const fadeEl = document.getElementById('tourFade');

    const doLoad = () => {
        if (window.pannellumViewer) {
            window.pannellumViewer.destroy();
            window.pannellumViewer = null;
        }
        window.pannellumViewer = pannellum.viewer('panoramaContainer', {
            type: 'equirectangular',
            panorama: src,
            autoLoad: true,
            autoRotate: 0,
            compass: false,
            showFullscreenCtrl: false,
            showZoomCtrl: false,
            mouseZoom: true,
            hfov: 90,
            minHfov: 50,
            maxHfov: 110,
            pitch: 0,
            minPitch: -20,
            maxPitch: 20,
            strings: { loadingLabel: "Loading..." }
        });

        // Fade back in after photo loads
        window.pannellumViewer.on('load', () => {
            if (fadeEl) fadeEl.style.opacity = '0';
        });
    };

    if (fade && fadeEl) {
        fadeEl.style.opacity = '1';
        setTimeout(doLoad, 350);
    } else {
        doLoad();
    }
}

function moveSpot(direction) {
    const modal = document.getElementById('virtualTourModal');
    if (!modal) return;

    const campus = campusData[state.currentCampus];
    const building = campus.locations.find(l => l.name === modal.dataset.building);
    if (!building) return;

    const floorIndex = parseInt(modal.dataset.floorIndex);
    let spotIndex = parseInt(modal.dataset.spotIndex);
    const spots = building.tourPhotos[floorIndex].spots;

    spotIndex += direction;
    if (spotIndex < 0 || spotIndex >= spots.length) return;

    modal.dataset.spotIndex = spotIndex;
    loadPanorama(spots[spotIndex].src, true);
    updateSpotUI(floorIndex, spotIndex, building);
}

function goToSpot(index) {
    const modal = document.getElementById('virtualTourModal');
    if (!modal) return;

    const campus = campusData[state.currentCampus];
    const building = campus.locations.find(l => l.name === modal.dataset.building);
    if (!building) return;

    const floorIndex = parseInt(modal.dataset.floorIndex);
    const spots = building.tourPhotos[floorIndex].spots;

    modal.dataset.spotIndex = index;
    loadPanorama(spots[index].src, true);
    updateSpotUI(floorIndex, index, building);
}

function switchFloor(floorIndex) {
    const modal = document.getElementById('virtualTourModal');
    if (!modal) return;

    const campus = campusData[state.currentCampus];
    const building = campus.locations.find(l => l.name === modal.dataset.building);
    if (!building) return;

    modal.dataset.floorIndex = floorIndex;
    modal.dataset.spotIndex = '0';

    const floors = building.tourPhotos;
    const spots = floors[floorIndex].spots;

    // Update floor tabs
    floors.forEach((_, i) => {
        const tab = document.getElementById(`floorTab_${i}`);
        tab.style.background = i === floorIndex ? '#6c63ff' : 'transparent';
        tab.style.borderColor = i === floorIndex ? '#6c63ff' : 'rgba(255,255,255,0.3)';
    });

    // Rebuild dots
    const dotsContainer = document.getElementById('spotDots');
    dotsContainer.innerHTML = spots.map((_, i) => `
        <div id="dot_${i}" onclick="goToSpot(${i})" style="
            width: 8px; height: 8px;
            border-radius: 50%;
            background: ${i === 0 ? '#6c63ff' : 'rgba(255,255,255,0.3)'};
            cursor: pointer;
            transition: background 0.2s;
        "></div>
    `).join('');

    loadPanorama(spots[0].src, true);
    updateSpotUI(floorIndex, 0, building);
}

function updateSpotUI(floorIndex, spotIndex, building) {
    const spots = building.tourPhotos[floorIndex].spots;

    const label = document.getElementById('spotLabel');
    const counter = document.getElementById('spotCounter');
    if (label) label.innerHTML = `📍 <strong style="color:white;">${spots[spotIndex].label}</strong>`;
    if (counter) counter.textContent = `${spotIndex + 1} / ${spots.length}`;

    spots.forEach((_, i) => {
        const dot = document.getElementById(`dot_${i}`);
        if (dot) dot.style.background = i === spotIndex ? '#6c63ff' : 'rgba(255,255,255,0.3)';
    });

    updateArrows(spotIndex, spots.length);
    updateMiniMap(floorIndex, spotIndex, building);
}
function updateArrows(spotIndex, total) {
    const back    = document.getElementById('arrowBack');
    const forward = document.getElementById('arrowForward');
    if (back) {
        back.style.opacity = spotIndex === 0 ? '0.3' : '1';
        back.style.cursor  = spotIndex === 0 ? 'not-allowed' : 'pointer';
    }
    if (forward) {
        forward.style.opacity = spotIndex >= total - 1 ? '0.3' : '1';
        forward.style.cursor  = spotIndex >= total - 1 ? 'not-allowed' : 'pointer';
    }
}

function closeVirtualTour() {
    if (window.pannellumViewer) {
        window.pannellumViewer.destroy();
        window.pannellumViewer = null;
    }
    if (document._tourKeyHandler) {
        document.removeEventListener('keydown', document._tourKeyHandler);
        document._tourKeyHandler = null;
    }
    const modal = document.getElementById('virtualTourModal');
    if (modal) modal.remove();
}

// Global function to navigate to a specific room
window.navigateToRoom = function(roomId, buildingId) {
    const campus = campusData[state.currentCampus];
    const building = campus.locations.find(loc => loc.id === buildingId);
    
    if (building) {
        const room = building.rooms.find(r => r.id === roomId);
        if (room) {
            // Create a temporary location object for the room
            const roomLocation = {
                ...room,
                name: room.name,
                coords: room.coords,
                buildingName: building.name
            };
            
            state.selectedLocation = roomLocation;
            state.lastRoomBuilding = building;
            document.getElementById('locationModal').classList.remove('active');
            state.map?.closePopup();
            RoomMarkerManager.clear();
            navigateToSelected();
            
            // Zoom to room location
            state.map.setView(room.coords, 20);
        }
    }
};

// Show Room Details
function showRoomDetails(room) {
    state.selectedLocation = room;
    
    const modal = document.getElementById('locationModal');
    document.getElementById('locationTitle').textContent = room.name;
    
    const details = `
        <p><strong>Building:</strong> ${room.buildingName}</p>
        <p><strong>Floor:</strong> ${room.floor}</p>
        <p><strong>Type:</strong> ${room.type}</p>
        <p><strong>Capacity:</strong> ${room.capacity} persons</p>
        <div style="margin-top: 15px; padding: 10px; background: #f0f7ff; border-radius: 8px; border-left: 4px solid #2c5aa0;">
            <strong>📍 Location:</strong> ${room.buildingName}, ${room.floor}
        </div>
    `;
    
    document.getElementById('locationDetails').innerHTML = details;
    modal.classList.add('active');
}

// Enhanced Navigation with Color Differentiation
// Enhanced Navigation with Color Differentiation
async function navigateToSelected() {
    if (!state.selectedLocation) return;
    
    // Clear existing route
    clearRoute();

    // Hide popups/panels so only route details remain
    state.map?.closePopup();
    document.getElementById('locationModal')?.classList.remove('active');
    const buildingPanel = document.getElementById('buildingImagePanel');
    if (buildingPanel) {
        buildingPanel.style.display = 'none';
        buildingPanel.setAttribute('aria-hidden', 'true');
    }
    const searchResults = document.getElementById('searchResults');
    if (searchResults) searchResults.classList.add('hidden');
    
    const destination = state.selectedLocation;
    const campus = campusData[state.currentCampus];

    state.navigationBuilding = getNavigationBuilding(destination, campus);
    showNavigationModeSwitcher();
    setNavigationMode('route');
    
    // Use actual user location if available (and inside campus), otherwise use campus center
    // USE actual user location if available, regardless of boundary
    let startCoords = [campus.center.lat, campus.center.lng];
    let hasCampusUserLocation = false;
    
    if (state.userLocation) {
        // ✅ FIX: Use user location even if outside boundary
        startCoords = [state.userLocation.lat, state.userLocation.lng];
        hasCampusUserLocation = true;
    } else {
        // No location yet — try to get it now
        const campusLocation = await getCampusUserLocation(campus);
        if (campusLocation) {
            startCoords = campusLocation.coords;
            state.userLocation = {
                lat: startCoords[0],
                lng: startCoords[1],
                accuracy: campusLocation.accuracy
            };
            hasCampusUserLocation = true;
        } else {
            showNotification('Location not found. Using campus center as start.', 'warning');
        }
    }

    if (hasCampusUserLocation) {
        updateUserLocationMarker(startCoords[0], startCoords[1], state.userLocation?.accuracy);
    } else {
        if (state.userMarker) {
            state.map.removeLayer(state.userMarker);
            state.userMarker = null;
        }
        if (state.accuracyCircle) {
            state.map.removeLayer(state.accuracyCircle);
            state.accuracyCircle = null;
        }
    }
    
    // Show loading notification
    showNotification('Calculating route...', 'info');
    
    // Determine if this is room navigation
    const isRoom = destination.matchType === 'room' || destination.buildingName;
    state.isRoomNavigation = isRoom;
    
    // Choose route color based on destination type
    const routeColor = isRoom ? '#9c27b0' : '#2c5aa0';  // Purple for rooms, Blue for buildings
    
    // Create routing control
    state.routingControl = L.Routing.control({
        waypoints: [
            L.latLng(startCoords[0], startCoords[1]),
            L.latLng(destination.coords[0], destination.coords[1])
        ],
        router: L.Routing.osrmv1({
            serviceUrl: 'https://router.project-osrm.org/route/v1',
            profile: 'foot'
        }),
        routeWhileDragging: false,
        addWaypoints: false,
        draggableWaypoints: false,
        fitSelectedRoutes: true,
        showAlternatives: false,
        lineOptions: {
            styles: [
                {color: routeColor, opacity: 0.8, weight: 6}
            ]
        },
        createMarker: function() { return null; },
        show: false,
        collapsible: false
    }).addTo(state.map);
    
    // Listen for route found event
    state.routingControl.on('routesfound', function(e) {
        const routes = e.routes;
        const route = routes[0];
        
        msActivate(destination);
        
        // Store route data
        state.currentRoute = {
            coordinates: route.coordinates,
            distance: route.summary.totalDistance,
            duration: route.summary.totalTime,
            instructions: route.instructions
        };
        
        // Add animated overlay
        addAnimatedOverlay(route.coordinates);
        
        // ADD THIS LINE - Add dotted line at the end of the route
        addEndDottedLine(route.coordinates, destination);
        
        // Show custom route info
        showCustomRouteInfo(route, destination);

        recordRoute({
            route,
            destination,
            startCoords,
            source: 'osrm'
        });
        
        showNotification('Route calculated!', 'success');
    });
    
    // Handle routing errors
    state.routingControl.on('routingerror', function(e) {
        console.error('Routing error:', e);
        showNotification('Could not calculate route. Using direct path.', 'error');
        drawFallbackRoute(startCoords, destination);
    });
    
    // Close location modal
    document.getElementById('locationModal').classList.remove('active');
}

// Add direct dotted path from building entrance to room (like the example image)
function addDirectPathToRoom(buildingCoords, roomCoords) {
    // Create a dotted line from building to room
    state.directPathLine = L.polyline(
        [buildingCoords, roomCoords],
        {
            color: '#9c27b0',        // Purple/violet color
            weight: 5,
            opacity: 0.7,
            dashArray: '10, 10',     // Dotted line
            lineJoin: 'round',
            lineCap: 'round'
        }
    ).addTo(state.map);
    
    // Add small circle marker at building entrance
    const buildingMarker = L.circleMarker(buildingCoords, {
        radius: 8,
        fillColor: '#9c27b0',
        fillOpacity: 0.8,
        color: '#ffffff',
        weight: 2
    }).addTo(state.map);
    
    buildingMarker.bindPopup(`
        <div style="text-align: center; font-size: 12px;">
            <strong>🏢 Building Entrance</strong><br>
            <small>Continue inside to room</small>
        </div>
    `);
    
    // Add destination marker at room
    const roomMarker = L.circleMarker(roomCoords, {
        radius: 10,
        fillColor: '#9c27b0',
        fillOpacity: 1,
        color: '#ffffff',
        weight: 3
    }).addTo(state.map);
    
    roomMarker.bindPopup(`
        <div style="text-align: center; font-size: 12px;">
            <strong>🎯 Room Location</strong><br>
            <small>Your destination</small>
        </div>
    `);
    
    // Store markers for cleanup
    if (!state.waypointMarkers) {
        state.waypointMarkers = [];
    }
    state.waypointMarkers.push(buildingMarker, roomMarker);
    
    // Animate the dotted line
    let offset = 0;
    const directPathAnimation = setInterval(() => {
        offset = (offset + 1) % 20;
        if (state.directPathLine && state.map.hasLayer(state.directPathLine)) {
            state.directPathLine.setStyle({ dashOffset: -offset });
        } else {
            clearInterval(directPathAnimation);
        }
    }, 100);
}

// Add animated dashed overlay on the route
function addAnimatedOverlay(coordinates) {
    // Convert Leaflet LatLng objects to coordinate arrays
    const coords = coordinates.map(coord => [coord.lat, coord.lng]);
    
    state.dashedOverlay = L.polyline(coords, {
        color: '#ffffff',
        weight: 6,
        opacity: 0.7,
        dashArray: '12, 18',
        lineJoin: 'round',
        lineCap: 'round'
    }).addTo(state.map);
    
    // Animate the dashed line
    let offset = 0;
    state.routeAnimation = setInterval(() => {
        offset = (offset + 1) % 30;
        if (state.dashedOverlay && state.map.hasLayer(state.dashedOverlay)) {
            state.dashedOverlay.setStyle({ dashOffset: -offset });
        } else {
            clearInterval(state.routeAnimation);
        }
    }, 50);
}

// Add dotted line directly to the room/destination (like the example image)
function addEndDottedLine(routeCoordinates, destination) {
    if (routeCoordinates.length < 1) return;
    
    // Get the last point of the main route
    const lastRoutePoint = routeCoordinates[routeCoordinates.length - 1];
    
    // Create direct line from last route point to exact destination
    const directLine = [
        [lastRoutePoint.lat, lastRoutePoint.lng],
        [destination.coords[0], destination.coords[1]]
    ];
    
    // Determine color based on navigation type
    const isRoom = state.isRoomNavigation;
    const dottedColor = isRoom ? '#9c27b0' : '#2c5aa0';
    
    // Create the dotted line directly to destination
    state.endDottedLine = L.polyline(directLine, {
        color: dottedColor,
        weight: 6,           // Slightly thicker for better visibility
        opacity: 0.9,        // More opaque
        dashArray: '10, 15', // Larger, more consistent pattern
        lineJoin: 'round',
        lineCap: 'round',
        className: 'dotted-end-line' // Add CSS class for additional styling
    }).addTo(state.map);
    
    // Animate the dotted line
    let offset = 0;
    const dottedAnimation = setInterval(() => {
        offset = (offset + 1) % 25;
        if (state.endDottedLine && state.map.hasLayer(state.endDottedLine)) {
            state.endDottedLine.setStyle({ dashOffset: -offset });
        } else {
            clearInterval(dottedAnimation);
        }
    }, 100);
}

function toggleBuildingPanel() {
    const panel = document.getElementById('buildingImagePanel');
    const isVisible = panel.style.display === 'flex';
    panel.style.display = isVisible ? 'none' : 'flex';
    panel.setAttribute('aria-hidden', isVisible ? 'true' : 'false');
    document.body.classList.toggle('building-panel-open', !isVisible);

    if (!isVisible) populateBuildingPanel();
}

function closeBuildingPanel() {
    const panel = document.getElementById('buildingImagePanel');
    if (!panel) return;
    panel.style.display = 'none';
    panel.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('building-panel-open');
}

function populateBuildingPanel() {
    const campus = campusData[state.currentCampus];
    const list = document.getElementById('buildingImageList');
    if (!list) return;

    // Only show buildings that have a photo
    const buildings = campus.locations.filter(l => l.photo);

    list.innerHTML = buildings.map(loc => `
        <div class="building-card" onclick="flyToBuilding(${loc.id})" id="buildingCard_${loc.id}">
            <img class="building-card-image" src="${loc.photo}" alt="${loc.name}" onerror="this.style.display='none'"/>
            <div class="building-card-title">🏛️ ${loc.name}</div>
        </div>
    `).join('');
}

function flyToBuilding(locationId) {
    const campus = campusData[state.currentCampus];
    const location = campus.locations.find(l => l.id === locationId);
    if (!location || !state.map) return;

    // Close the panel
    const buildingPanel = document.getElementById('buildingImagePanel');
    if (buildingPanel) {
        buildingPanel.style.display = 'none';
        buildingPanel.setAttribute('aria-hidden', 'true');
    }

    // ✅ FIX: coords is an array [lat, lng], not .lat/.lng
    const coords = normalizeCoords(location.coords);
    if (!coords) return;

    // Fly to building
    state.map.flyTo(coords, 19, {
        animate: true,
        duration: 1.2
    });

    // Show arrow after flying
    setTimeout(() => {
        pulseMarker(location);
    }, 1300);
}
function pulseMarker(location) {
    // Remove any existing arrow
    if (window._pulseMarker) {
        state.map.removeLayer(window._pulseMarker);
        window._pulseMarker = null;
    }

    // ✅ FIX: use normalizeCoords instead of location.lat/location.lng
    const coords = normalizeCoords(location.coords);
    if (!coords) return;

    const arrowIcon = L.divIcon({
        className: '',
        html: `
            <div style="
                display: flex;
                flex-direction: column;
                align-items: center;
                animation: bounceArrow 0.8s ease-in-out infinite;
            ">
                <div style="
                    background: #6c63ff;
                    color: white;
                    font-size: 11px;
                    font-weight: 700;
                    padding: 4px 10px;
                    border-radius: 20px;
                    white-space: nowrap;
                    box-shadow: 0 2px 8px rgba(108,99,255,0.5);
                    margin-bottom: 4px;
                ">${location.name}</div>

                <svg width="28" height="36" viewBox="0 0 28 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="14" y1="0" x2="14" y2="26" stroke="#6c63ff" stroke-width="4" stroke-linecap="round"/>
                    <polyline points="4,16 14,30 24,16" fill="none" stroke="#6c63ff" stroke-width="4"
                        stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <div style="
                    width: 14px;
                    height: 14px;
                    border-radius: 50%;
                    background: #6c63ff;
                    border: 3px solid white;
                    box-shadow: 0 0 0 4px rgba(108,99,255,0.35);
                    margin-top: -4px;
                "></div>
            </div>
        `,
        iconSize: [120, 90],
        iconAnchor: [60, 90]
    });

    // ✅ FIX: use coords array
    window._pulseMarker = L.marker(coords, {
        icon: arrowIcon,
        zIndexOffset: 9999
    }).addTo(state.map);

    // Remove arrow after 4 seconds
    setTimeout(() => {
        if (window._pulseMarker) {
            state.map.removeLayer(window._pulseMarker);
            window._pulseMarker = null;
        }
    }, 4000);
}
// Show custom route information
function showCustomRouteInfo(route, destination) {
    const routeInfo = document.getElementById('routeInfo');
    const details = document.getElementById('routeDetails');
    
    const distanceKm = (route.summary.totalDistance / 1000).toFixed(2);
    const distanceM = Math.round(route.summary.totalDistance);
    const timeMin = Math.ceil(route.summary.totalTime / 60);
    
    // Check if this is room navigation
    const isRoom = state.isRoomNavigation;
    const routeColor = isRoom ? '#9c27b0' : '#2c5aa0';
    
    // Generate turn-by-turn directions
    let directionsHTML = '';
    if (route.instructions && route.instructions.length > 0) {
        directionsHTML = `
            <div class="route-directions">
                <strong>📍 Turn-by-turn directions:</strong>
                ${route.instructions.map((step, i) => {
                    if (i === route.instructions.length - 1) return ''; // Skip "arrive" as we add custom one
                    
                    return `
                        <div class="route-step">
                            <span class="step-number" style="background: linear-gradient(135deg, ${routeColor} 0%, ${routeColor}dd 100%);">${i + 1}</span>
                            <span class="step-text">
                                ${getDirectionIcon(step.type)} ${step.text || step.road || 'Continue'}
                                ${step.distance ? `<br><small style="color: #666;">${Math.round(step.distance)} m</small>` : ''}
                            </span>
                        </div>
                    `;
                }).join('')}
                <div class="route-step">
                    <span class="step-number" style="background: linear-gradient(135deg, ${routeColor} 0%, ${routeColor}dd 100%);">${route.instructions.length}</span>
                    <span class="step-text">🎯 Arrive at ${destination.name}</span>
                </div>
            </div>
        `;
    }
    
    details.innerHTML = `
        <div class="route-summary">
            <div class="route-stat" style="border-left-color: ${routeColor};">
                <strong>📏 Distance:</strong> ${distanceM < 1000 ? distanceM + ' m' : distanceKm + ' km'}
            </div>
            <div class="route-stat" style="border-left-color: ${routeColor};">
                <strong>⏱️ Walking Time:</strong> ${timeMin} min
            </div>
            <div class="route-stat" style="border-left-color: ${routeColor};">
                <strong>📍 Destination:</strong> ${destination.name}
            </div>
        </div>
        <div class="route-divider" style="background: linear-gradient(to right, ${routeColor}, transparent);"></div>
        ${directionsHTML}
    `;
    
    routeInfo.classList.remove('hidden');
}

// Get direction icon based on instruction type
function getDirectionIcon(type) {
    const directions = {
        'turn-left': '⬅️ Turn left',
        'turn-right': '➡️ Turn right',
        'turn-slight-left': '↩️ Slight left',
        'turn-slight-right': '↪️ Slight right',
        'turn-sharp-left': '↖️ Sharp left',
        'turn-sharp-right': '↗️ Sharp right',
        'straight': '⬆️ Continue straight',
        'uturn': '↩️ Make U-turn',
        'arrive': '🎯 Arrive',
        'depart': '🚶 Depart',
        'merge': '↗️ Merge',
        'on-ramp': '↗️ Take ramp',
        'off-ramp': '↘️ Take exit',
        'fork': '↗️ Keep',
        'end-of-road': '⬆️ Continue',
        'continue': '⬆️ Continue',
        'roundabout': '🔄 Roundabout'
    };
    
    return directions[type] || '➡️';
}

// Fallback route if routing fails
function drawFallbackRoute(start, destination) {
    const pathPoints = [start, destination.coords];
    
    state.routeLine = L.polyline(pathPoints, {
        color: '#ea4335',
        weight: 5,
        opacity: 0.7,
        dashArray: '10, 10',
        smoothFactor: 1
    }).addTo(state.map);
    
    state.map.fitBounds(state.routeLine.getBounds(), { 
        padding: [80, 80],
        maxZoom: 18
    });
    
    const distance = calculateDistance(start, destination.coords);
    const estimatedTime = Math.ceil(distance / 80);
    
    const routeInfo = document.getElementById('routeInfo');
    const details = document.getElementById('routeDetails');
    
    details.innerHTML = `
        <div class="route-summary">
            <div class="route-stat">
                <strong>📏 Distance:</strong> ${Math.round(distance)} m (direct)
            </div>
            <div class="route-stat">
                <strong>⏱️ Est. Time:</strong> ${estimatedTime} min
            </div>
            <div class="route-stat">
                <strong>📍 Destination:</strong> ${destination.name}
            </div>
        </div>
        <div class="route-divider"></div>
        <p style="color: #ea4335; font-size: 13px; padding: 10px; background: #fee; border-radius: 6px;">
            ⚠️ Could not find walking route. Showing direct path. Actual route may differ.
        </p>
    `;

    recordRoute({
        route: {
            summary: {
                totalDistance: distance,
                totalTime: estimatedTime * 60
            },
            coordinates: pathPoints,
            instructions: []
        },
        destination,
        startCoords: start,
        source: 'direct'
    });
    
    routeInfo.classList.remove('hidden');
}

function recordRoute({ route, destination, startCoords, source }) {
    if (!route || !destination || !startCoords) return;

    const entry = {
        id: Date.now(),
        campus: state.currentCampus,
        source: source || 'osrm',
        isRoom: state.isRoomNavigation,
        start: {
            lat: startCoords[0],
            lng: startCoords[1]
        },
        destination: {
            name: destination.name,
            coords: destination.coords
        },
        distance: route.summary?.totalDistance || 0,
        duration: route.summary?.totalTime || 0,
        createdAt: new Date().toISOString()
    };

    state.routeHistory.push(entry);
    if (state.routeHistory.length > 200) {
        state.routeHistory = state.routeHistory.slice(-200);
    }

    saveData();
}

// Updated clearRoute function
function clearRoute() {
    // Remove routing control
    if (state.routingControl) {
        state.map.removeControl(state.routingControl);
        state.routingControl = null;
    }
    
    // Remove old route line
    if (state.routeLine) {
        state.routeLine.remove();
        state.routeLine = null;
    }
    
    // Remove dashed overlay
    if (state.dashedOverlay) {
        state.dashedOverlay.remove();
        state.dashedOverlay = null;
    }
    
    // Remove end dotted line - ADD THIS
    if (state.endDottedLine) {
        state.endDottedLine.remove();
        state.endDottedLine = null;
    }
    
    // Clear waypoint markers
    if (state.waypointMarkers) {
        state.waypointMarkers.forEach(marker => marker.remove());
        state.waypointMarkers = [];
    }
    
    // Stop animation
    if (state.routeAnimation) {
        clearInterval(state.routeAnimation);
        state.routeAnimation = null;
    }
    
    // Clear current route data
    state.currentRoute = null;
    state.isRoomNavigation = false;
    
    document.getElementById('routeInfo').classList.add('hidden');
}

// Minimize route panel (hide panel but keep route on map)
function minimizeRoutePanel() {
    document.getElementById('routeInfo').classList.add('hidden');
    showNotification('Route still visible on map', 'info');
}

// Complete route removal
function clearRouteCompletely() {

    // ✅ Reset multi-stop v2
    msClearArrivalCheck();
    msInit();
    // Remove routing control
    if (state.routingControl) {
        state.map.removeControl(state.routingControl);
        state.routingControl = null;
    }
    
    // Remove old route line
    if (state.routeLine) {
        state.routeLine.remove();
        state.routeLine = null;
    }
    
    // Remove dashed overlay
    if (state.dashedOverlay) {
        state.dashedOverlay.remove();
        state.dashedOverlay = null;
    }
    
    // Remove end dotted line - ADD THIS
    if (state.endDottedLine) {
        state.endDottedLine.remove();
        state.endDottedLine = null;
    }
    
    // Clear waypoint markers
    if (state.waypointMarkers) {
        state.waypointMarkers.forEach(marker => marker.remove());
        state.waypointMarkers = [];
    }
    
    // Stop animation
    if (state.routeAnimation) {
        clearInterval(state.routeAnimation);
        state.routeAnimation = null;
    }
    
    // Clear current route data
    state.currentRoute = null;
    state.isRoomNavigation = false;
    
    document.getElementById('routeInfo').classList.add('hidden');
    hideNavigationModeSwitcher();
    closeVirtualTour();
    state.navigationMode = 'route';
    state.navigationBuilding = null;
    showNotification('Route cleared', 'success');
}

// Go back to the building popup from route details
function goBackFromRoute() {
    const building = state.lastRoomBuilding || state.rooms.activeBuilding;
    clearRouteCompletely();

    if (building) {
        state.rooms.activeBuilding = building;
        RoomMarkerManager.goBackToBuilding();
        return;
    }

    showNotification('Route cleared', 'info');
}

function showNavigationModeSwitcher() {
    const switcher = document.getElementById('navModeSwitcher');
    if (switcher) {
        switcher.classList.remove('hidden');
    }
}

function hideNavigationModeSwitcher() {
    const switcher = document.getElementById('navModeSwitcher');
    if (switcher) {
        switcher.classList.add('hidden');
    }
}

function setNavigationMode(mode) {
    state.navigationMode = mode;

    const routeInfo = document.getElementById('routeInfo');
    const mapBtn = document.getElementById('navModeMap');
    const routeBtn = document.getElementById('navModeRoute');
    const view3dBtn = document.getElementById('navMode3d');

    [mapBtn, routeBtn, view3dBtn].forEach(btn => btn?.classList.remove('is-active'));

    if (mode === 'map') {
        mapBtn?.classList.add('is-active');
        routeInfo?.classList.add('hidden');
        closeVirtualTour();
        return;
    }

    if (mode === 'route') {
        routeBtn?.classList.add('is-active');
        closeVirtualTour();
        if (routeInfo) routeInfo.classList.remove('hidden');
        return;
    }

    if (mode === '3d') {
        view3dBtn?.classList.add('is-active');
        routeInfo?.classList.add('hidden');

        const building = state.navigationBuilding;
        if (building && building.tourPhotos && building.tourPhotos.length > 0) {
            openVirtualTour(building.name);
            return;
        }

        showNotification('3D view is not available for this destination', 'info');
        setNavigationMode('route');
    }
}

function getNavigationBuilding(destination, campus) {
    if (destination?.buildingName) {
        return campus.locations.find(loc => loc.name === destination.buildingName) || null;
    }

    if (destination?.name) {
        return campus.locations.find(loc => loc.name === destination.name) || null;
    }

    return null;
}
// Quick Actions
function handleQuickAction(action) {
    switch(action) {
        case 'findLocation':
            setUserLocation();
            break;
        case 'accessibleRoutes':
            toggleAccessiblePaths();
            break;
        case 'savedLocations':
            showSavedLocations();
            break;
    }
}

function setUserLocation() {
    if (!navigator.geolocation) {
        showNotification('Geolocation is not supported by your browser', 'error');
        return;
    }

    showNotification('Getting your location...', 'info');

    const options = {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
    };

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const userLat = position.coords.latitude;
            const userLng = position.coords.longitude;
            const accuracy = position.coords.accuracy;

            console.log('User location:', userLat, userLng, 'Accuracy:', accuracy, 'meters');

            // Remove old user marker if exists
            if (state.userMarker) {
                state.map.removeLayer(state.userMarker);
            }

            // Remove old accuracy circle if exists
            if (state.accuracyCircle) {
                state.map.removeLayer(state.accuracyCircle);
            }

            // Create custom icon for user location
            const userIcon = L.divIcon({
                className: 'user-location-marker',
                html: `
                    <div class="user-marker-pulse"></div>
                    <div class="user-marker-dot"></div>
                `,
                iconSize: [30, 30],
                iconAnchor: [15, 15]
            });

            // Add user marker
            state.userMarker = L.marker([userLat, userLng], { 
                icon: userIcon,
                zIndexOffset: 1000 
            }).addTo(state.map);

            // Add accuracy circle
            state.accuracyCircle = L.circle([userLat, userLng], {
                radius: accuracy,
                color: '#4285f4',
                fillColor: '#4285f4',
                fillOpacity: 0.1,
                weight: 2,
                opacity: 0.5
            }).addTo(state.map);

            // Bind popup to marker
            state.userMarker.bindPopup(`
                <div style="text-align: center;">
                    <strong>📍 Your Location</strong><br>
                    <small>Accuracy: ±${Math.round(accuracy)}m</small>
                </div>
            `).openPopup();

            // Pan to user location smoothly
            state.map.flyTo([userLat, userLng], 18, {
                animate: true,
                duration: 1.5
            });

            // Store user location in state
            state.userLocation = { lat: userLat, lng: userLng };

            showNotification(`Location found! Accuracy: ±${Math.round(accuracy)}m`, 'success');

            // Watch position for continuous updates
            if (state.watchId) {
                navigator.geolocation.clearWatch(state.watchId);
            }

            state.watchId = navigator.geolocation.watchPosition(
                (pos) => {
                    const newLat = pos.coords.latitude;
                    const newLng = pos.coords.longitude;
                    const newAccuracy = pos.coords.accuracy;

                    // Update marker position
                    state.userMarker.setLatLng([newLat, newLng]);
                    state.accuracyCircle.setLatLng([newLat, newLng]);
                    state.accuracyCircle.setRadius(newAccuracy);
                    state.userLocation = { lat: newLat, lng: newLng };
                },
                (error) => {
                    console.error('Watch position error:', error);
                },
                options
            );
        },
        (error) => {
            let errorMessage = 'Unable to get your location';
            
            switch(error.code) {
                case error.PERMISSION_DENIED:
                    errorMessage = 'Location permission denied. Please enable location access.';
                    break;
                case error.POSITION_UNAVAILABLE:
                    errorMessage = 'Location information unavailable. Please check your GPS.';
                    break;
                case error.TIMEOUT:
                    errorMessage = 'Location request timed out. Please try again.';
                    break;
            }
            
            showNotification(errorMessage, 'error');
            console.error('Geolocation error:', error);
        },
        options
    );
}

function toggleAccessiblePaths() {
    state.accessibleOnly = !state.accessibleOnly;
    showNotification(state.accessibleOnly ? 'Showing accessible routes only' : 'Showing all routes');
}

function saveCurrentLocation() {
    if (!state.selectedLocation) return;
    
    const exists = state.savedLocations.find(loc => loc.id === state.selectedLocation.id);
    if (!exists) {
        state.savedLocations.push(state.selectedLocation);
        saveData();
        showNotification(`${state.selectedLocation.name} saved!`);
    } else {
        showNotification('Location already saved!');
    }
}

function showSavedLocations() {
    if (state.savedLocations.length === 0) {
        showNotification('No saved locations yet!');
        return;
    }
    
    const resultsDiv = document.getElementById('searchResults');
    resultsDiv.innerHTML = '<div class="search-result-item" style="font-weight: bold; background: #f0f7ff;">⭐ Saved Locations</div>';
    
    state.savedLocations.forEach(loc => {
        const item = document.createElement('div');
        item.className = 'search-result-item';
        item.innerHTML = `
            <span class="result-name">${loc.name}</span>
            <span class="result-type">${loc.type}</span>
        `;
        item.addEventListener('click', () => {
            showLocationDetails(loc);
            state.map.setView(loc.coords, 18);
            resultsDiv.classList.add('hidden');
        });
        resultsDiv.appendChild(item);
    });
    
    resultsDiv.classList.remove('hidden');
}

// ============================================
// 🆕 MULTI-STOP NAVIGATION V2
// ============================================

function msInit() {
    state.multiStop = {
        active: false,
        stops: [],
        currentIndex: 0,
        countdownTimer: null,
        arrivalChecker: null
    };
    document.getElementById('msProgressBar').style.display = 'none';
    document.getElementById('msArrivedSection').style.display = 'none';
    document.getElementById('msOfflineBanner').style.display = 'none';
    document.getElementById('msCountdownBanner').style.display = 'none';
}

function msActivate(destination) {
    // Called when navigation starts
    if (!state.multiStop.active) {
        state.multiStop.active = true;
        state.multiStop.stops = [{
            location: destination,
            status: 'current',
            cachedRoute: null
        }];
        state.multiStop.currentIndex = 0;
    }
    msRenderProgress();
    msStartArrivalCheck(destination);
}

function msRenderProgress() {
    const ms = state.multiStop;
    if (!ms.active || ms.stops.length === 0) {
        document.getElementById('msProgressBar').style.display = 'none';
        return;
    }

    document.getElementById('msProgressBar').style.display = 'block';

    const total = ms.stops.length;
    const current = ms.currentIndex;

    // Update counter
    document.getElementById('msStopCount').textContent =
        `Stop ${current + 1} of ${total}`;

    // Build step indicator (dots connected by lines)
    const indicator = document.getElementById('msStepIndicator');
    indicator.innerHTML = ms.stops.map((stop, i) => {
        const isDone = stop.status === 'done';
        const isCurrent = stop.status === 'current';
        const isPending = stop.status === 'pending';

        const dotColor = isDone ? '#34a853' : isCurrent ? '#2c5aa0' : '#ccc';
        const dotBorder = isCurrent ? '3px solid #2c5aa0' : 'none';
        const lineColor = isDone ? '#34a853' : '#e0e0e0';

        return `
            <div style="display:flex; align-items:center; flex:1;">
                <div style="
                    width:${isCurrent ? '16px' : '12px'};
                    height:${isCurrent ? '16px' : '12px'};
                    border-radius:50%;
                    background:${dotColor};
                    border:${dotBorder};
                    flex-shrink:0;
                    transition: all 0.3s;
                    ${isCurrent ? 'box-shadow:0 0 0 4px rgba(44,90,160,0.2);' : ''}
                "></div>
                ${i < ms.stops.length - 1 ? `
                    <div style="
                        flex:1;
                        height:3px;
                        background:${lineColor};
                        transition: background 0.3s;
                    "></div>
                ` : ''}
            </div>
        `;
    }).join('');

    // Build stop names list
    const namesList = document.getElementById('msStopNames');
    namesList.innerHTML = ms.stops.map((stop, i) => {
        const isDone = stop.status === 'done';
        const isCurrent = stop.status === 'current';

        return `
            <div style="
                display:flex;
                align-items:center;
                gap:8px;
                padding:6px 8px;
                border-radius:8px;
                background:${isCurrent ? '#e8f0fe' : 'transparent'};
                opacity:${isDone ? '0.5' : '1'};
            ">
                <span style="
                    font-size:11px;
                    font-weight:700;
                    color:${isDone ? '#34a853' : isCurrent ? '#2c5aa0' : '#999'};
                    width:16px;
                    text-align:center;
                ">${isDone ? '✓' : i + 1}</span>
                <span style="
                    font-size:12px;
                    font-weight:${isCurrent ? '600' : '400'};
                    color:${isCurrent ? '#2c5aa0' : isDone ? '#666' : '#888'};
                    flex:1;
                ">${stop.location.name}</span>
                ${stop.cachedRoute ? `
                    <span style="
                        font-size:10px;
                        background:#e8f5e9;
                        color:#2e7d32;
                        padding:2px 6px;
                        border-radius:10px;
                        font-weight:600;
                    ">📥 Cached</span>
                ` : ''}
                ${stop.status === 'pending' ? `
                    <button onclick="msRemoveStop(${i})" style="
                        background:none;
                        border:none;
                        color:#ea4335;
                        cursor:pointer;
                        font-size:13px;
                        padding:0 2px;
                    ">✕</button>
                ` : ''}
            </div>
        `;
    }).join('');
}

function msOpenAddStop() {
    const modal = document.getElementById('msAddStopModal');
    modal.style.display = 'flex';
    document.getElementById('msStopSearchInput').value = '';
    document.getElementById('msStopSearchResults').innerHTML = '';
    setTimeout(() => document.getElementById('msStopSearchInput').focus(), 100);
}

function msCloseAddStop() {
    document.getElementById('msAddStopModal').style.display = 'none';
}

function msSearchStop(query) {
    const resultsDiv = document.getElementById('msStopSearchResults');
    if (!query || query.trim().length < 1) {
        resultsDiv.innerHTML = '';
        return;
    }

    const campus = campusData[state.currentCampus];
    const existing = state.multiStop.stops.map(s => s.location.id);
    const q = query.toLowerCase();
    const results = [];

    // Search buildings
    campus.locations.forEach(loc => {
        if (!existing.includes(loc.id) &&
            (loc.name.toLowerCase().includes(q) ||
            (loc.shortName && loc.shortName.toLowerCase().includes(q)))) {
            results.push({
                id: `building_${loc.id}`,
                name: loc.name,
                subtitle: loc.type,
                icon: '🏢',
                coords: loc.coords,
                matchType: 'building'
            });
        }

        // Search rooms inside each building
        if (loc.rooms && Array.isArray(loc.rooms)) {
            loc.rooms.forEach(room => {
                if (room.name && room.name.toLowerCase().includes(q)) {
                    results.push({
                        id: `room_${loc.id}_${room.id}`,
                        name: room.name,
                        subtitle: `${loc.name} — ${room.floor}`,
                        icon: '🚪',
                        coords: room.coords,
                        matchType: 'room',
                        instructor: room.instructor || null
                    });
                }
            });
        }
    });

    if (results.length === 0) {
        resultsDiv.innerHTML = `
            <div style="padding:12px; color:#999; font-size:13px; text-align:center;">
                No results found
            </div>`;
        return;
    }

    resultsDiv.innerHTML = results.slice(0, 10).map(item => `
        <div onclick="msAddStopDirect(${JSON.stringify(item).replace(/"/g, '&quot;')})" style="
            padding:10px 12px;
            border:1px solid #e0e0e0;
            border-radius:8px;
            cursor:pointer;
            display:flex;
            align-items:center;
            gap:10px;
            transition:background 0.2s;
            background:white;
        "
        onmouseover="this.style.background='#f0f7ff'"
        onmouseout="this.style.background='white'">
            <span style="font-size:18px;">${item.icon}</span>
            <div>
                <div style="font-weight:600; font-size:13px; color:#222;">${item.name}</div>
                <div style="font-size:11px; color:#888;">${item.subtitle}</div>
                ${item.instructor ? `<div style="font-size:11px; color:#9c27b0;">👨‍🏫 ${item.instructor}</div>` : ''}
            </div>
        </div>
    `).join('');
}

async function msAddStopDirect(item) {
    const location = {
        id: item.id,
        name: item.name,
        coords: item.coords,
        matchType: item.matchType
    };

    state.multiStop.stops.push({
        location,
        status: 'pending',
        cachedRoute: null
    });

    msCloseAddStop();
    showNotification(`📍 ${location.name} added as next stop`, 'success');

    await msCacheRoute(location, state.multiStop.stops.length - 1);
    msRenderProgress();
}

async function msAddStop(locationId) {
    const campus = campusData[state.currentCampus];
    const location = campus.locations.find(l => l.id === locationId);
    if (!location) return;

    // Add to stops list as pending
    state.multiStop.stops.push({
        location,
        status: 'pending',
        cachedRoute: null
    });

    msCloseAddStop();
    showNotification(`📍 ${location.name} added as next stop`, 'success');

    // Pre-cache the route immediately
    await msCacheRoute(location, state.multiStop.stops.length - 1);

    msRenderProgress();
}

async function msCacheRoute(destination, stopIndex) {
    let startCoords;

    // Use previous stop as start if available
    const prevStop = state.multiStop.stops[stopIndex - 1];
    if (prevStop) {
        startCoords = normalizeCoords(prevStop.location.coords);
    } else if (state.userLocation) {
        startCoords = [state.userLocation.lat, state.userLocation.lng];
    } else {
        const campus = campusData[state.currentCampus];
        startCoords = [campus.center.lat, campus.center.lng];
    }

    const destCoords = normalizeCoords(destination.coords);
    if (!destCoords || !startCoords) return;

    try {
        const url = `https://router.project-osrm.org/route/v1/foot/${startCoords[1]},${startCoords[0]};${destCoords[1]},${destCoords[0]}?overview=full&geometries=geojson&steps=true`;
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed');

        const data = await response.json();
        if (data.code !== 'Ok' || !data.routes.length) throw new Error('No route');

        const route = data.routes[0];
        state.multiStop.stops[stopIndex].cachedRoute = {
            coordinates: route.geometry.coordinates.map(c => [c[1], c[0]]),
            distance: route.distance,
            duration: route.duration,
            isFallback: false
        };

        showNotification(`📥 Route to ${destination.name} cached`, 'info');

    } catch (err) {
        // Fallback straight line
        state.multiStop.stops[stopIndex].cachedRoute = {
            coordinates: [startCoords, destCoords],
            distance: calculateDistance(startCoords, destCoords),
            duration: calculateDistance(startCoords, destCoords) / 1.4,
            isFallback: true
        };
    }

    msRenderProgress();
}

function msRemoveStop(index) {
    if (state.multiStop.stops[index]?.status === 'current') return;
    state.multiStop.stops.splice(index, 1);
    msRenderProgress();
    showNotification('Stop removed', 'info');
}

function msStartArrivalCheck(destination) {
    msClearArrivalCheck();

    const THRESHOLD = 25;
    const destCoords = normalizeCoords(destination.coords);
    if (!destCoords) return;

    state.multiStop.arrivalChecker = setInterval(() => {
        if (!state.userLocation) return;

        const userCoords = [state.userLocation.lat, state.userLocation.lng];
        const distance = calculateDistance(userCoords, destCoords);

        // Show arrived button when within 50m
        const arrivedSection = document.getElementById('msArrivedSection');
        if (arrivedSection) {
            arrivedSection.style.display = distance <= 50 ? 'block' : 'none';
        }

        // Trigger countdown when within 25m
        if (distance <= THRESHOLD) {
            msClearArrivalCheck();
            msStartCountdown();
        }

    }, 3000);
}

function msClearArrivalCheck() {
    if (state.multiStop.arrivalChecker) {
        clearInterval(state.multiStop.arrivalChecker);
        state.multiStop.arrivalChecker = null;
    }
    if (state.multiStop.countdownTimer) {
        clearInterval(state.multiStop.countdownTimer);
        state.multiStop.countdownTimer = null;
    }
}

function msStartCountdown() {
    let seconds = 5;
    const banner = document.getElementById('msCountdownBanner');
    const arrivedSection = document.getElementById('msArrivedSection');

    if (!banner) return;

    arrivedSection.style.display = 'block';
    banner.style.display = 'block';

    const nextStop = state.multiStop.stops[state.multiStop.currentIndex + 1];
    const nextName = nextStop ? nextStop.location.name : null;

    const update = () => {
        banner.innerHTML = `
            <div>You have arrived!</div>
            <div style="font-size:18px; margin:4px 0;">${seconds}s</div>
            ${nextName ? `<div style="font-size:11px; opacity:0.8;">Switching to ${nextName}...</div>` : ''}
            <button onclick="msCancelCountdown()" style="
                margin-top:6px;
                background:rgba(255,255,255,0.2);
                border:1px solid rgba(255,255,255,0.4);
                color:white;
                padding:4px 12px;
                border-radius:6px;
                font-size:11px;
                cursor:pointer;
            ">Cancel</button>
        `;
    };

    update();

    state.multiStop.countdownTimer = setInterval(() => {
        seconds--;
        if (seconds <= 0) {
            clearInterval(state.multiStop.countdownTimer);
            state.multiStop.countdownTimer = null;
            banner.style.display = 'none';
            msArrived();
        } else {
            update();
        }
    }, 1000);
}

function msCancelCountdown() {
    if (state.multiStop.countdownTimer) {
        clearInterval(state.multiStop.countdownTimer);
        state.multiStop.countdownTimer = null;
    }
    document.getElementById('msCountdownBanner').style.display = 'none';
    showNotification('Auto-switch cancelled — tap Arrived when ready', 'info');
}

async function msArrived() {
    const ms = state.multiStop;
    msClearArrivalCheck();

    // Mark current stop as done
    ms.stops[ms.currentIndex].status = 'done';
    ms.currentIndex++;

    // Check if there are more stops
    if (ms.currentIndex >= ms.stops.length) {
        showNotification('🎉 You have reached your final destination!', 'success');
        document.getElementById('msArrivedSection').style.display = 'none';
        msRenderProgress();
        return;
    }

    // Move to next stop
    const nextStop = ms.stops[ms.currentIndex];
    nextStop.status = 'current';
    ms.active = true;

    msRenderProgress();
    showNotification(`🧭 Navigating to ${nextStop.location.name}`, 'info');

    // Check if online or offline
    if (!navigator.onLine && nextStop.cachedRoute) {
        // Use cached route
        document.getElementById('msOfflineBanner').style.display = 'block';
        msDrawCachedRoute(nextStop);
    } else {
        // Navigate normally
        document.getElementById('msOfflineBanner').style.display = 'none';
        state.selectedLocation = nextStop.location;
        await navigateToSelected();
    }
}

function msDrawCachedRoute(stop) {
    clearRoute();

    const cached = stop.cachedRoute;
    const coords = cached.coordinates;

    state.routeLine = L.polyline(coords, {
        color: '#2c5aa0',
        weight: 6,
        opacity: 0.8
    }).addTo(state.map);

    state.dashedOverlay = L.polyline(coords, {
        color: '#ffffff',
        weight: 6,
        opacity: 0.6,
        dashArray: '12, 18'
    }).addTo(state.map);

    let offset = 0;
    state.routeAnimation = setInterval(() => {
        offset = (offset + 1) % 30;
        if (state.dashedOverlay && state.map.hasLayer(state.dashedOverlay)) {
            state.dashedOverlay.setStyle({ dashOffset: -offset });
        } else {
            clearInterval(state.routeAnimation);
        }
    }, 50);

    state.map.fitBounds(state.routeLine.getBounds(), {
        padding: [80, 80],
        maxZoom: 18
    });

    // Show route info
    const distanceM = Math.round(cached.distance);
    const timeMin = Math.ceil(cached.duration / 60);
    const routeInfo = document.getElementById('routeInfo');
    const details = document.getElementById('routeDetails');

    details.innerHTML = `
        <div class="route-summary">
            <div class="route-stat" style="border-left-color:#2c5aa0;">
                <strong>📏 Distance:</strong> ${distanceM < 1000 ? distanceM + ' m' : (distanceM/1000).toFixed(2) + ' km'}
            </div>
            <div class="route-stat" style="border-left-color:#2c5aa0;">
                <strong>⏱️ Walking Time:</strong> ${timeMin} min
            </div>
            <div class="route-stat" style="border-left-color:#2c5aa0;">
                <strong>📍 Destination:</strong> ${stop.location.name}
            </div>
        </div>
        ${cached.isFallback ? `
        <p style="color:#ea4335; font-size:13px; padding:10px; background:#fee; border-radius:6px; margin-top:8px;">
            ⚠️ Showing direct path — offline mode.
        </p>` : ''}
    `;

    routeInfo.classList.remove('hidden');
    msStartArrivalCheck(stop.location);
}

// ✅ Monitor online/offline
window.addEventListener('online', () => {
    document.getElementById('msOfflineBanner').style.display = 'none';
    showNotification('✅ Back online!', 'success');
});

window.addEventListener('offline', () => {
    document.getElementById('msOfflineBanner').style.display = 'block';
    showNotification('📵 Offline — cached routes still available', 'warning');
});


function showSavedLocations() {
    if (state.savedLocations.length === 0) {
        showNotification('No saved locations yet!');
        return;
    }
    
    const resultsDiv = document.getElementById('searchResults');
    resultsDiv.innerHTML = '<div class="search-result-item" style="font-weight: bold; background: #f0f7ff;">⭐ Saved Locations</div>';
    
    state.savedLocations.forEach(loc => {
        const item = document.createElement('div');
        item.className = 'search-result-item';
        item.innerHTML = `
            <span class="result-name">${loc.name}</span>
            <span class="result-type">${loc.type}</span>
        `;
        item.addEventListener('click', () => {
            showLocationDetails(loc);
            state.map.setView(loc.coords, 18);
            resultsDiv.classList.add('hidden');
        });
        resultsDiv.appendChild(item);
    });
    
    resultsDiv.classList.remove('hidden');
}
// Auto-start the app
document.addEventListener('DOMContentLoaded', () => {
    const session = getAuthSession();
    if (session) {
        startAppAfterAuth();
    } else {
        init();
    }
});