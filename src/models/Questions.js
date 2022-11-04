/*const mongoose = require("mongoose");


const QuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answerType: {
    type: String,
    required: true,
  }
});

const Question = mongoose.model("questions", QuestionSchema);

module.exports = Question;*/

export default class Questions {
  constructor(question, answerType) {
    this.question = question;
    this.answerType = answerType;
  }

  set question(question) {
    this.question = question;
  }

  set answerType(answerType) {
    this.answerType = answerType;
  }

  get question() {
    return this.question;
  }

  get answerType() {
    return this.answerType;
  }
}