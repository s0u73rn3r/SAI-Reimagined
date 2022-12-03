var assert = require('assert');

import Questions from '../src/models/Questions';

describe('Questions', function() {
  describe('Create Questions', function() {
    it('Should create a question with question and question type', function() {
      const testQuestion = new Questions("Is this a question?", "short answer");
      assert.equal(testQuestion._question, "Is this a question?");
      assert.equal(testQuestion._answerType, "short answer");
    });
  });
});
