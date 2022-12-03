var assert = require('assert');

import Courses from '../src/models/Courses';
import User from '../src/models/User';

describe('Courses', function() {
  describe('Create Courses', function() {
    it('Should create a course with name, course_id, no professor, and no students', function() {
      const testCourse = new Courses("Course", "CCC3333", null, null);
      assert.equal(testCourse._name, "Course");
      assert.equal(testCourse._course_id, "CCC3333");
      assert.equal(testCourse._professor, null);
      assert.equal(testCourse._students, null);
    });

    it('Should create a course with name, course_id, valid professor, and no students', function() {
      const mockProfessor = new User("professor", "password", "professor");
      const testCourse = new Courses("Course", "CCC3333", mockProfessor, null);
      assert.equal(testCourse._name, "Course");
      assert.equal(testCourse._course_id, "CCC3333");
      assert.equal(testCourse._professor._username, mockProfessor._username);
      assert.equal(testCourse._professor._role, mockProfessor._role);
      assert.equal(testCourse._students, null);
    });

    it('Should create a course with name, course_id, professor, and one students', function() {
      const mockProfessor = new User("professor", "password", "professor");
      const mockStudent = new User("student1", "testing1", "student");
      const testCourse = new Courses("Course", "CCC3333", mockProfessor, mockStudent);
      assert.equal(testCourse._name, "Course");
      assert.equal(testCourse._course_id, "CCC3333");
      assert.equal(testCourse._professor._username, mockProfessor._username);
      assert.equal(testCourse._professor._role, mockProfessor._role);
      assert.equal(testCourse._students.at(0)._username, mockStudent._username);
      assert.equal(testCourse._students.at(0).role, mockStudent.role);
    });

    it('Should create a course with name, course_id, invalid professor, and one student', function() {
      const mockProfessor = new User("professor", "password", "invalid_input");
      const mockStudent = new User("student1", "testing1", "student");
      const testCourse = new Courses("Course", "CCC3333", mockProfessor, mockStudent);
      assert.equal(testCourse._name, "Course");
      assert.equal(testCourse._course_id, "CCC3333");
      assert.equal(testCourse._professor, null);
      assert.equal(testCourse._students.at(0)._username, mockStudent._username);
      assert.equal(testCourse._students.at(0).role, mockStudent.role);
    });

    it('Should create a course with name, course_id, professor, and an invalid student', function() {
      const mockProfessor = new User("professor", "password", "professor");
      const mockStudent = new User("student1", "testing1", "invalid_input");
      const testCourse = new Courses("Course", "CCC3333", mockProfessor, mockStudent);
      assert.equal(testCourse._name, "Course");
      assert.equal(testCourse._course_id, "CCC3333");
      assert.equal(testCourse._professor._username, mockProfessor._username);
      assert.equal(testCourse._professor._role, mockProfessor._role);
      assert.equal(testCourse._students.length, 0);
    });

    it('Should create a course with name, course_id, professor, and several valid student', function() {
      const mockProfessor = new User("professor", "password", "professor");
      const mockStudents = [new User("student1", "testing1", "student"),
                            new User("student2","testing2", "student"),
                            new User("student3", "testing", "student")
                            ];
      const testCourse = new Courses("Course", "CCC3333", mockProfessor, mockStudents);
      assert.equal(testCourse._name, "Course");
      assert.equal(testCourse._course_id, "CCC3333");
      assert.equal(testCourse._professor._username, mockProfessor._username);
      assert.equal(testCourse._professor._role, mockProfessor._role);

      // Checks for student 1
      assert.equal(testCourse._students.at(0)._username, mockStudents.at(0)._username);
      assert.equal(testCourse._students.at(0).role, mockStudents.at(0)._role);

      // Checks for student 2
      assert.equal(testCourse._students.at(1)._username, mockStudents.at(1)._username);
      assert.equal(testCourse._students.at(1).role, mockStudents.at(1)._role);

      // Checks for student 3
      assert.equal(testCourse._students.at(2)._username, mockStudents.at(2)._username);
      assert.equal(testCourse._students.at(2).role, mockStudents.at(2)._role);
    });

    it('Should create a course with name, course_id, professor, and several valid students with an invlid student', function() {
      const mockProfessor = new User("professor", "password", "professor");
      const mockStudents = [new User("student1", "testing1", "invalid_input"),
                            new User("student2","testing2", "student"),
                            new User("student3", "testing", "student")
                            ];
      const testCourse = new Courses("Course", "CCC3333", mockProfessor, mockStudents);
      assert.equal(testCourse._name, "Course");
      assert.equal(testCourse._course_id, "CCC3333");
      assert.equal(testCourse._professor._username, mockProfessor._username);
      assert.equal(testCourse._professor._role, mockProfessor._role);

      // Checks for student 1
      assert.equal(testCourse._students.at(0)._username, mockStudents.at(1)._username);
      assert.equal(testCourse._students.at(0).role, mockStudents.at(1)._role);

      // Checks for student 2
      assert.equal(testCourse._students.at(1)._username, mockStudents.at(2)._username);
      assert.equal(testCourse._students.at(1).role, mockStudents.at(2)._role);

      // Checks for student 3
      assert.equal(testCourse._students.at(2), null);
    });
  });
});
