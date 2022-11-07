const User = require('../models/User');

export default class Courses {
  constructor(name, course_id, professor, students) {
    this.name = name;
    this.course_id = course_id;
    
    if ((typeof(professor) === "User") && (professor.role === "professor")) {
      this.professor = professor;
    }

    this.students = [];
    if (students !== null) {
      students.foreach(student => {
          if ((typeof(student) === "User") && (student.role === "student")) {
            this.students.push(student);
          }
      });
    }
  }

  set name(name) {
    this.name = name;
  }

  set course_id(course_id) {
    this.course_id = course_id;
  }

  get name() {
    return this.name;
  }

  get course_id() {
    return this.course_id;
  }

  get students() {
    return this.students;
  }

  addStudent(student) {
    if (students !== null) {
      if ((typeof(student) === "User") && (student.role === "student")) {
        this.students.push(student);
      }
    }
  }

  addStudents(students) {
    if (students !== null) {
      students.foreach(student => {
          if ((typeof(student) === "User") && (student.role === "student")) {
            this.students.push(student);
          }
      });
    }
  }
}
