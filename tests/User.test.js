var assert = require('assert');

import User from "../src/models/User";

describe('Users', function() {
  describe('Create Users', function() {
    it('Should create a student user with username, password, and role', function() {
      const testUser = new User("testUsername", "testPassword", "student");
      assert.equal(testUser._username, "testUsername");
      //assert.equal(testUser.password, "testPassword");          // CHANGE THIS LATER FOR ENCRYPTION!!!!!
      assert.equal(testUser._role, "student");
    });

    it('Should create a student user with username, password, and null role', function() {
      const testUser = new User("testUsername", "testPassword", "invalid_input");
      assert.equal(testUser._username, "testUsername");
      //assert.equal(testUser.password, "testPassword");          // CHANGE THIS LATER FOR ENCRYPTION!!!!!
      assert.equal(testUser._role, null);
    });
  });
});