export default class Questions {
  constructor(question, answerType) {
    this._question = question;
    this._answerType = answerType;
  }

  set _question(question) {
    this._question = question;
  }

  set _answerType(answerType) {
    this._answerType = answerType;
  }

  get _question() {
    return this._question;
  }

  get _answerType() {
    return this._answerType;
  }
}