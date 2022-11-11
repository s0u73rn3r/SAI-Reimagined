const User = require('../models/User');

export default class Courses {
  constructor(name, course_id, professor, students) {
    this._namename = name;
    this._course_id = course_id;
    
    if ((typeof(professor) === "User") && (professor._role === "professor")) {
      this._professor = professor;
    }

    if (students !== null) {
      this._students = [];
      students.foreach(student => {
          if ((typeof(student) === "User") && (student._role === "student")) {
            this._students.push(student);
          }
      });
    } else {
      this._students = null;
    }
  }

  set _name(name) {
    this._name = name;
  }

  set _course_id(course_id) {
    this._course_id = course_id;
  }

  set _professor(professor) {
    this._professor = professor;
  }

  get _name() {
    return this._name;
  }

  get _course_id() {
    return this._course_id;
  }

  get _professor() {
    return this._professor;
  }

  get _students() {
    return this._students;
  }

  addStudent(student) {
    if (student !== null) {
      if ((typeof(student) === "User") && (student._role === "student")) {
        this._students.push(student);
      }
    }
  }

  addStudents(students) {
    if (students !== null) {
      students.foreach(student => {
          if ((typeof(student) === "User") && (student.role === "student")) {
            this._students.push(student);
          }
      });
    }
  }
}

