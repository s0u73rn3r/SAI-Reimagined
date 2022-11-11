export default class Responses {
  constructor(question, answer) {
    this._question = question;
    this._answer = answer;
  }

  set _question(question) {
    this._question = question;
  }

  set _answer(answer) {
    this._answer = answer;
  }

  get _question() {
    return this._question;
  }

  get _answer() {
    return this._answer;
  }
}