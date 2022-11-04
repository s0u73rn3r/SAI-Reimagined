/*const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;


const ResponseSchema = new mongoose.Schema({
  question: {type: ObjectId, ref: 'questions'},
  answer: {
    type: String,
    required: true,
  },
  student:{type: ObjectId, ref: 'user'}
});

const Response = mongoose.model("response", ResponseSchema);

module.exports = Response;*/

export default class Responses {
  constructor(question, answer, student) {
    this.question = question;
    this.answer = answer;
    this.student = student;
  }

  set question(question) {
    this.question = question;
  }

  set answer(answer) {
    this.answer = answer;
  }

  get question() {
    return this.question;
  }

  get answer() {
    return this.answer;
  }
}