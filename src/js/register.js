import User from "../models/User.js";

const electron = require('electron'); 
const ipc = electron.ipcRenderer; 

let currentUser; 
let confirmBtn = document.getElementById('confirm'); 
let backBtn = document.getElementById('back'); 


confirmBtn.addEventListener('click', (e) => {
    
    e.preventDefault();

    let currentUsername = document.getElementById('Uname').value;
    let currentPassword = document.getElementById('Pass').value;
    let currentConfirmation = document.getElementById('ConfirmPass').value;
    let currentRole = document.getElementById('role').value;
    

    if (currentUsername === ""){

        ipc.send('emptyUsername'); 

    } else {

        if (currentPassword === '' || currentConfirmation === ''){

            ipc.send('emptyPasswords');

        } else {

            if (isPasswordConfirmed(currentPassword, currentConfirmation)) {
                
                currentUser = new User(currentUsername, currentPassword, currentRole);
                ipc.send('checkUsernameRegistration', currentUsername);
                

            } else {

                ipc.send('unmatchingPasswords'); 

                document.getElementById('Pass').value = ''; 
                document.getElementById('ConfirmPass').value = '';
            }

        }

    }

});

ipc.on('isUsernameValid', (event, validUsername) =>{
    console.log("here")
    if (validUsername === true){

        event.sender.send('addUserToDatabase', currentUser);

    } else if (validUsername === false){

        document.getElementById('Uname').value = ''; 

    }

}); 

function isPasswordConfirmed(currentPassword, currentConfirmation) {
    return (currentPassword === currentConfirmation);
}


backBtn.addEventListener('click', (e) => {
    window.location.href = '../views/adminPanel.html';
})