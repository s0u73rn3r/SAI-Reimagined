export default class Responses {
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
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