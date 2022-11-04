//Log user out- return to login page
function logout() {
    window.location.href="entry.html";
}

//Not sure if this is the correct way to go about this
function pullCourse() {
    for(let i = 0; i <=4; i++) {
        //Pulls courses from DB to display in course list html
    }
}

function startSAI() {
    //conditional to check has student completed the selected SAI
    //if true display message "You have already completed the SAI for this course."
    //else goto SAI survey html
    window.location.href="survey.html";
}
