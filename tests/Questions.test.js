var assert = require('assert');
const Questions = require('../src/models/Questions');

describe('Questions', function() {
  describe('Create Questions', function() {
    it('Should create a question with question and question type', function() {
      const testQuestion = new Questions("Is this a question?", "short answer");
      assert.equal(testQuestion.question, "Is this a question?");
      assert.equal(testQuestion.answerType, "short answer");
    });
  });
});