var assert = require('assert');
const Courses = require('../src/models/Courses');

jest.disableAutomock();

describe('Courses', function() {
  describe('Create Courses', function() {
    it('Should create a course with name, course_id, no professor, and no students', function() {
      const testCourse = new Courses("Course", "CCC3333", null, null);
      assert.equal(testCourse.name, "Course");
      assert.equal(testCourse.course_id, "CCC3333");
      assert.equal(testCourse.students, null)
    });
  });
});