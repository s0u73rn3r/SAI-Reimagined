<<<<<<< Updated upstream

const mongoose = require("mongoose");

=======
/*const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;
>>>>>>> Stashed changes

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

<<<<<<< Updated upstream
module.exports = Question;
=======
module.exports = Courses;*/

export default class Courses {
  constructor(name, course_id, student) {
    this.name = name;
    this.course_id = course_id;
    this.student = student;
  }

  set name(name) {
    this.name = name;
  }

  set course_id(course_id) {
    this.course_id = course_id;
  }

  set student(student) {
    this.student = student;
  }

  get name() {
    return this.name;
  }

  get course_id() {
    return this.course_id;
  }

  get student() {
    return this.student;
  }
}
>>>>>>> Stashed changes
