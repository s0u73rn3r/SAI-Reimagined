
const mongoose = require("mongoose");


const CoursesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  course_id: {
    type: String,
    required: true,
  },
  student: [{
    type: ObjectId,
    ref: 'user'
  }]
});

const Courses = mongoose.model("courses", CoursesSchema);

module.exports = Question;
