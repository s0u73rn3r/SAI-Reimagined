export default class Questions {
  constructor(question, answerType) {
    this._question = question;
    this._answerType = answerType;
  }

  set question(question) {
    this._question = question;
  }

  set answerType(answerType) {
    this._answerType = answerType;
  }

  get question() {
    return this._question;
  }

  get answerType() {
    return this._answerType;
  }
}