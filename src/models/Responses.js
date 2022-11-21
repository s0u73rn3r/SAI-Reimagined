export default class Responses {
  constructor(question, answer) {
    this._question = question;
    this._answer = answer;
  }

  set question(question) {
    this._question = question;
  }

  set answer(answer) {
    this._answer = answer;
  }

  get question() {
    return this._question;
  }

  get answer() {
    return this._answer;
  }
}