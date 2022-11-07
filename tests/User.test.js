var assert = require('assert');
const User = require('../src/models/User');

describe('Users', function() {
  describe('Create Users', function() {
    it('Should create a student user with username, password, and role', function() {
      const testUser = new User("testUsername", "testPassword", "student")
      assert.equal(testUser.username, "testUsername");
      assert.equal(testUser.password, "testPassword");          // CHANGE THIS FOR ENCRYPTION!!!!!
      assert.equal(testUser.role, "student");
    });
  });
});