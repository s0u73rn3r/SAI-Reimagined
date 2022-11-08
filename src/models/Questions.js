export default class Questions {
  constructor(question, answerType) {
    this.question = question;
    this.answerType = answerType;
  }

  set setQuestion(question) {
    this.question = question;
  }

  set setAnswerType(answerType) {
    this.answerType = answerType;
  }

  get getQuestion() {
    return this.question;
  }

  get getAnswerType() {
    return this.answerType;
  }
}