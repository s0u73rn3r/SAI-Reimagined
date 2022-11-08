export default class Responses {
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
  }

  set setQuestion(question) {
    this.question = question;
  }

  set setAnswer(answer) {
    this.answer = answer;
  }

  get getQuestion() {
    return this.question;
  }

  get getAnswer() {
    return this.answer;
  }
}