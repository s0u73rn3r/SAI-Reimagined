const electron = require('electron');
const ipc = electron.ipcRenderer;

let studentList;
let studentDisplay = document.getElementById("listofstudents")
ipc.send('getListOfStudents');

ipc.on('studentsRecieved', (event, students)=> {
    console.log(students)
    studentList = $(`<div> <h3> ${students + `<br>`} </h3></div>`)

    studentList.appendTo(studentDisplay)


    

});