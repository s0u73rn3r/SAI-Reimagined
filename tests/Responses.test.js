var assert = require('assert');

import Responses from "../src/models/Responses";

describe('Responses', function() {
  describe('Create Response', function() {
    it('Should create a response with question and answer', function() {
      const testResponse = new Responses("Is this a question?", "yes");
      assert.equal(testResponse._question, "Is this a question?");
      assert.equal(testResponse._answer, "yes");
    });
  });
});