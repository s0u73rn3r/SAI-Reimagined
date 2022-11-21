export default class Courses {
  constructor(courseName, id, teacher, studentList) {
    this._name = courseName;
    this._course_id = id;
    
    if ((typeof(teacher) === "User") && (teacher._role === "professor")) {
      this._professor = teacher;
    }

    if (studentList !== null) {
      this._students = [];
      studentList.foreach(student => {
          if ((typeof(student) === "User") && (student._role === "student")) {
            this._students.push(student);
          }
      });
    } else {
      this._students = null;
    }
  }

  set name(courseName) {
    this._name = courseName;
  }

  set course_id(id) {
    this._course_id = id;
  }

  set professor(teacher) {
    this._professor = teacher;
  }

  set students(studentList) {
    if (studentList != null) {
      if (students !== null) {
        students.foreach(student => {
            if ((typeof(student) === "User") && (student._role === "student")) {
              this._students.push(student);
            }
        });
      }
    }
  }

  get name() {
    return this._name;
  }

  get course_id() {
    return this._course_id;
  }

  get professor() {
    return this._professor;
  }

  get students() {
    return this._students;
  }
}