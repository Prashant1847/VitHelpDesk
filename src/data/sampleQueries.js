const sampleQueries = [
  {
    id: 1,
    subject: "Course Registration Issue",
    description: "I am unable to register for the Advanced Database Management course. The system shows an error message saying 'Prerequisites not met' but I have completed all required courses.",
    status: "pending",
    studentName: "John Doe",
    studentEmail: "john.doe@vit.ac.in",
    registrationNumber: "20BCE1234",
    createdAt: new Date("2024-03-10T10:30:00").toLocaleString()
  },
  {
    id: 2,
    subject: "Exam Schedule Conflict",
    description: "There is a scheduling conflict in my end semester examination timetable. I have two exams scheduled at the same time slot on April 15th.",
    status: "inProgress",
    studentName: "Sarah Smith",
    studentEmail: "sarah.smith@vit.ac.in",
    registrationNumber: "21BCE1567",
    createdAt: new Date("2024-03-09T14:20:00").toLocaleString(),
    response: "We are reviewing your case with the examination department."
  },
  {
    id: 3,
    subject: "Hostel Maintenance Request",
    description: "The air conditioning unit in my hostel room (Block A, Room 304) is not functioning properly for the past three days.",
    status: "resolved",
    studentName: "Raj Patel",
    studentEmail: "raj.patel@vit.ac.in",
    registrationNumber: "19BCE2345",
    createdAt: new Date("2024-03-08T09:15:00").toLocaleString(),
    response: "Maintenance team has fixed the AC unit. Please let us know if you face any further issues."
  },
  {
    id: 4,
    subject: "Library Access Card",
    description: "My library access card is not working. I need immediate assistance as I have to submit an assignment by tomorrow.",
    status: "closed",
    studentName: "Emily Chen",
    studentEmail: "emily.chen@vit.ac.in",
    registrationNumber: "22BCE1890",
    createdAt: new Date("2024-03-07T16:45:00").toLocaleString(),
    response: "New access card has been issued. You can collect it from the library desk."
  },
  {
    id: 5,
    subject: "Scholarship Application Status",
    description: "I submitted my scholarship application two weeks ago but haven't received any update on its status.",
    status: "pending",
    studentName: "Michael Johnson",
    studentEmail: "michael.j@vit.ac.in",
    registrationNumber: "21BCE1789",
    createdAt: new Date("2024-03-11T11:00:00").toLocaleString()
  },
  {
    id: 6,
    subject: "Lab Equipment Access",
    description: "I need access to the Advanced Computing Lab during weekend hours for my final year project. Regular hours are not sufficient for the experiments.",
    status: "pending",
    studentName: "Alex Kumar",
    studentEmail: "alex.k@vit.ac.in",
    registrationNumber: "20BCE1456",
    createdAt: new Date("2024-03-11T15:20:00").toLocaleString()
  },
  {
    id: 7,
    subject: "Project Guide Assignment",
    description: "I haven't been assigned a project guide for my capstone project yet. The deadline for submitting the project proposal is approaching.",
    status: "pending",
    studentName: "Priya Sharma",
    studentEmail: "priya.s@vit.ac.in",
    registrationNumber: "21BCE1678",
    createdAt: new Date("2024-03-11T16:45:00").toLocaleString()
  },
  {
    id: 8,
    subject: "Internship Credit Transfer",
    description: "I completed my internship at Microsoft but the credits haven't been updated in my academic record. Need this resolved for graduation clearance.",
    status: "pending",
    studentName: "David Wilson",
    studentEmail: "david.w@vit.ac.in",
    registrationNumber: "20BCE1890",
    createdAt: new Date("2024-03-12T09:15:00").toLocaleString()
  },
  {
    id: 9,
    subject: "Sports Event Participation Leave",
    description: "Requesting leave for participating in Inter-University Basketball Championship from March 20-25. Need permission to reschedule my continuous assessment tests.",
    status: "pending",
    studentName: "Rahul Verma",
    studentEmail: "rahul.v@vit.ac.in",
    registrationNumber: "22BCE1234",
    createdAt: new Date("2024-03-12T10:30:00").toLocaleString()
  },
  {
    id: 10,
    subject: "Fee Structure Clarification",
    description: "There seems to be a discrepancy in my fee structure. I was charged for hostel facilities although I'm a day scholar.",
    status: "pending",
    studentName: "Lisa Chang",
    studentEmail: "lisa.c@vit.ac.in",
    registrationNumber: "21BCE2001",
    createdAt: new Date("2024-03-12T11:45:00").toLocaleString()
  },
  {
    id: 11,
    subject: "CGPA Calculation Error",
    description: "My CGPA for the last semester seems incorrect. My project credits (8 credits) haven't been included in the calculation.",
    status: "pending",
    studentName: "James Anderson",
    studentEmail: "james.a@vit.ac.in",
    registrationNumber: "20BCE1555",
    createdAt: new Date("2024-03-12T13:20:00").toLocaleString()
  },
  {
    id: 12,
    subject: "Exchange Program Application",
    description: "Need information about the status of my application for the Student Exchange Program with TU Berlin for the Fall semester.",
    status: "pending",
    studentName: "Sophia Lee",
    studentEmail: "sophia.l@vit.ac.in",
    registrationNumber: "21BCE1999",
    createdAt: new Date("2024-03-12T14:10:00").toLocaleString()
  },
  {
    id: 13,
    subject: "Research Lab Access",
    description: "Requesting extended access to the Robotics Research Lab for working on my IEEE paper submission. Current access hours are insufficient.",
    status: "pending",
    studentName: "Arjun Mehta",
    studentEmail: "arjun.m@vit.ac.in",
    registrationNumber: "20BCE1777",
    createdAt: new Date("2024-03-12T15:30:00").toLocaleString()
  },
  {
    id: 14,
    subject: "Course Material Access",
    description: "Unable to access the course materials for Advanced Machine Learning on the learning management system. Getting a 404 error.",
    status: "pending",
    studentName: "Emma Roberts",
    studentEmail: "emma.r@vit.ac.in",
    registrationNumber: "22BCE1444",
    createdAt: new Date("2024-03-12T16:15:00").toLocaleString()
  },
  {
    id: 15,
    subject: "Placement Portal Issue",
    description: "The placement portal is showing my profile as incomplete despite updating all required information. This is affecting my job applications.",
    status: "pending",
    studentName: "Karthik Rajan",
    studentEmail: "karthik.r@vit.ac.in",
    registrationNumber: "20BCE1666",
    createdAt: new Date("2024-03-12T17:00:00").toLocaleString()
  }
];

export default sampleQueries; 