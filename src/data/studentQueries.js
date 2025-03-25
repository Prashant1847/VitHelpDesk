const studentQueries = [
  {
    id: 1,
    subject: "Course Registration Issue",
    description: "I am unable to register for the Advanced Database Management course. The system shows an error message saying 'Prerequisites not met' but I have completed all required courses.",
    status: "pending",
    createdAt: new Date("2024-03-10T10:30:00").toLocaleString()
  },
  {
    id: 2,
    subject: "Library Access Card",
    description: "My library access card is not working. I need immediate assistance as I have to submit an assignment by tomorrow.",
    status: "resolved",
    createdAt: new Date("2024-03-07T16:45:00").toLocaleString(),
    response: "New access card has been issued. You can collect it from the library desk."
  },
  {
    id: 3,
    subject: "Exam Schedule Conflict",
    description: "There is a scheduling conflict in my end semester examination timetable. I have two exams scheduled at the same time slot on April 15th.",
    status: "inProgress",
    createdAt: new Date("2024-03-09T14:20:00").toLocaleString(),
    response: "We are reviewing your case with the examination department."
  },
  {
    id: 4,
    subject: "Scholarship Application Status",
    description: "I submitted my scholarship application two weeks ago but haven't received any update on its status.",
    status: "pending",
    createdAt: new Date("2024-03-11T11:00:00").toLocaleString()
  },
  {
    id: 5,
    subject: "Hostel Maintenance Request",
    description: "The air conditioning unit in my hostel room (Block A, Room 304) is not functioning properly for the past three days.",
    status: "closed",
    createdAt: new Date("2024-03-08T09:15:00").toLocaleString(),
    response: "Maintenance team has fixed the AC unit. Please let us know if you face any further issues."
  }
];

export default studentQueries; 