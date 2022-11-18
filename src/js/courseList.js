import Courses from "../models/Courses.js";
import User from "../models/User.js";

let buttonsDiv = document.getElementById("buttons");
let logoutButton = document.getElementById("logout");

const electron = require('electron');
const ipc = electron.ipcRenderer;

ipc.send('retrieveCourses');


ipc.on('courseSuccess', (event, courses) => {
    
    for(let i = 0; i < courses.length; i++) {
        let button = $(`<input type ="button" value = "${courses[i]}"></input><br>`);
        $(button).appendTo(buttonsDiv);
    }
    
});

logoutButton.addEventListener("click", function(e) {
    window.location.href = '../views/entry.html';
})

function startSAI() {
    //conditional to check has student completed the selected SAI
    //if true display message "You have already completed the SAI for this course."
    //else goto SAI survey html
    window.location.href="survey.html";
}

