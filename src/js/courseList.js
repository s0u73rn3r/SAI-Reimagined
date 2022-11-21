import Courses from "../models/Courses.js";
import User from "../models/User.js";

let buttonsDiv = document.getElementById("buttons");
let logoutButton = document.getElementById("logout");


const electron = require('electron');
const ipc = electron.ipcRenderer;

ipc.send('retrieveCourses');


ipc.on('courseSuccess', (event, courses) => {
    console.log("made it to course success");
    for(let i = 0; i < courses.length; i++) {
        let button = $(`<input type ="button" id = "startSurvey" value = "${courses[i]}"></input><br>`);
        $(button).appendTo(buttonsDiv);
    }

    let startSurvey = document.querySelectorAll("#startSurvey")

    startSurvey.forEach(box => {
        box.addEventListener('click', function(e) {
          window.location.href = '../views/survey.html';
        });
      });
});

logoutButton.addEventListener("click", function(e) {
    window.location.href = '../views/entry.html';
});



