const electron = require('electron');
const ipc = electron.ipcRenderer;

let loginBtn = document.getElementById('log');

loginBtn.addEventListener("click", function(e) {
    e.preventDefault();

    let un = document.getElementById('username').value;
    let pw = document.getElementById('pwrd').value;
    console.log(un,pw)
    if (un === "") {
        ipc.send('emptyUsername');
    } else if (pw === "") {
        ipc.send('emptyPasswords');
    } else {
        ipc.send('loginUser', { username: un, password: pw });
    }
});

ipc.on('loginSuccesful', (event, user, role) => {
    
    if(role==="Student")
    {
        window.location.href = '../views/survey.html';
    }
    if(role==="Professor")
    {
        window.location.href = '../views/professorCourseList.html';
    }
    if(role==="Admin")
    {
        window.location.href = '../views/adminPanel.html';
    }
    else
    {
    let alertMsg = document.querySelector('.login');
    let input = document.createElement("text");
    input.id = "alert1";
    let msg = document.createElement("div");
    msg.classList.add("alert");
    msg.classList.add("error");
    let p = document.createElement("p");
    p.classList.add("inner");
    let strong = document.createElement("b");
    strong.append("Error:");
    msg.prepend(input);
    p.prepend(strong);
    p.append("Something went wrong, please email a professor or admin to figure out what went wrong!");
    msg.append(p);
    alertMsg.prepend(msg);
    }

});

function alertMsg() {
    let alertMsg = document.querySelector('.login');
    let input = document.createElement("input");
    input.type = "checkbox";
    input.id = "alert1";
    let msg = document.createElement("div");
    msg.classList.add("alert");
    msg.classList.add("error");
    let p = document.createElement("p");
    p.classList.add("inner");
    let strong = document.createElement("b");
    strong.append("Error:");
    msg.prepend(input);
    p.prepend(strong);
    p.append(" Username or Password is incorrect!");
    msg.append(p);
    alertMsg.prepend(msg);
}

