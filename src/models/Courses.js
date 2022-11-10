const User = require('../models/User');

export default class Courses {
  constructor(name, course_id, professor, students) {
    this.name = name;
    this.course_id = course_id;
    
    if ((typeof(professor) === "User") && (professor.role === "professor")) {
      this.professor = professor;
    }

    if (students !== null) {
      this.students = [];
      students.foreach(student => {
          if ((typeof(student) === "User") && (student.role === "student")) {
            this.students.push(student);
          }
      });
    } else {
      this.students = null;
    }
  }

  set setName(name) {
    this.name = name;
  }

  set setCourse_id(course_id) {
    this.course_id = course_id;
  }

  set setProfessor(professor) {
    this.professor = professor;
  }

  get getName() {
    return this.name;
  }

  get getCourse_id() {
    return this.course_id;
  }

  get getProfessor() {
    return this.professor;
  }

  get getStudents() {
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

