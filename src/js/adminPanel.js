let registerBtn = document.getElementById('register');
let professorBtn = document.getElementById('professor');
let studentBtn = document.getElementById('students');


registerBtn.addEventListener("click", function(e) {
    window.location.href = '../views/adminRegistration.html';
})
professorBtn.addEventListener("click", function(e) {
    window.location.href = '../views/adminProfessorList.html';
})
studentBtn.addEventListener("click", function(e) {
    window.location.href = '../views/adminStudentList.html';
})