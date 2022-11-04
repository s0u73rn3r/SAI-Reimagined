const mongoose = require("mongoose");
const URI = 'mongodb+srv://admin:CapstoneProjectTeamTBD@cluster0.sroumus.mongodb.net/Capstone-Db?retryWrites=true&w=majority'
const Questions = require("../models/Questions");
const { disable } = require("../routes");

const testQuestionData = {
    question: "Am I a question?",
    answerType: "textbox"
};

describe('Inserting a Question', () => {
  jest.setTimeout(10000);
  let connection;
  let db;

  beforeAll(async () => {
    connection = await mongoose.connect(URI);
    db = mongoose.connection;
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('Should Insert a Question', async () => {
    const questions = db.collection('questions');
    
    await questions.insertOne(testQuestionData);

    const insertedQuestion = await questions.findOne({question: 'Am I a question?'});
    expect(insertedQuestion.question).toEqual(testQuestionData.question);
    expect(insertedQuestion.answerType).toEqual(testQuestionData.answerType);
  });
});