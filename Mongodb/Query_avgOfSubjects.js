// Inserting dummy documents [db: task, collection: students]
db.students.insertMany([
  {
    name: "Alice",
    subjects: [
      { name: "Math", score: 88 },
      { name: "English", score: 78 },
      { name: "Physics", score: 70 },
      { name: "Chemistry", score: 95 },
      { name: "Sanskrit", score: 82 },
      { name: "Biology", score: 91 },
    ],
  },
  {
    name: "Bob",
    subjects: [
      { name: "Math", score: 92 },
      { name: "English", score: 89 },
      { name: "Physics", score: 75 },
      { name: "Chemistry", score: 88 },
      { name: "Sanskrit", score: 80 },
      { name: "Biology", score: 94 },
    ],
  },
  {
    name: "Eva",
    subjects: [
      { name: "Math", score: 85 },
      { name: "English", score: 93 },
      { name: "Physics", score: 68 },
      { name: "Chemistry", score: 87 },
      { name: "Sanskrit", score: 76 },
      { name: "Biology", score: 89 },
    ],
  },
  {
    name: "Charlie",
    subjects: [
      { name: "Math", score: 78 },
      { name: "English", score: 85 },
      { name: "Physics", score: 92 },
      { name: "Chemistry", score: 79 },
      { name: "Sanskrit", score: 88 },
      { name: "Biology", score: 90 },
    ],
  },
  {
    name: "David",
    subjects: [
      { name: "Math", score: 90 },
      { name: "English", score: 82 },
      { name: "Physics", score: 73 },
      { name: "Chemistry", score: 94 },
      { name: "Sanskrit", score: 85 },
      { name: "Biology", score: 87 },
    ],
  },
  {
    name: "Fiona",
    subjects: [
      { name: "Math", score: 94 },
      { name: "English", score: 88 },
      { name: "Physics", score: 79 },
      { name: "Chemistry", score: 91 },
      { name: "Sanskrit", score: 83 },
      { name: "Biology", score: 95 },
    ],
  },
  {
    name: "George",
    subjects: [
      { name: "Math", score: 86 },
      { name: "English", score: 90 },
      { name: "Physics", score: 77 },
      { name: "Chemistry", score: 92 },
      { name: "Sanskrit", score: 79 },
      { name: "Biology", score: 88 },
    ],
  },
  {
    name: "Hannah",
    subjects: [
      { name: "Math", score: 89 },
      { name: "English", score: 91 },
      { name: "Physics", score: 72 },
      { name: "Chemistry", score: 90 },
      { name: "Sanskrit", score: 84 },
      { name: "Biology", score: 93 },
    ],
  },
  {
    name: "Ian",
    subjects: [
      { name: "Math", score: 91 },
      { name: "English", score: 86 },
      { name: "Physics", score: 76 },
      { name: "Chemistry", score: 89 },
      { name: "Sanskrit", score: 81 },
      { name: "Biology", score: 92 },
    ],
  },
  {
    name: "Jessica",
    subjects: [
      { name: "Math", score: 83 },
      { name: "English", score: 94 },
      { name: "Physics", score: 71 },
      { name: "Chemistry", score: 93 },
      { name: "Sanskrit", score: 77 },
      { name: "Biology", score: 86 },
    ],
  },
]);

// Write an aggregation query to find the average score for each subject across all students.
db.students.aggregate([
  {
    $unwind: "$subjects",
  },
  {
    $group: {
      _id: "$subjects.name",
      "Average Marks": {
        $avg: "$subjects.score",
      },
    },
  },
]);
