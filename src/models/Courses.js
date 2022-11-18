/*
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

module.exports = name;*/

export default class Courses {
  constructor(name, courseId, student) {
    this.name = name;
    this.answer = answer;
    this.student = student;
  }

  set name(name) {
    this.name = name;
  }

  set answer(answer) {
    this.answer = answer;
  }

  get name() {
    return this.name;
  }

  get answer() {
    return this.answer;
  }
}