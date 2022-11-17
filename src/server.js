const electron = require('electron');
const app = electron.app;
const ipc = electron.ipcMain;
const dialog = electron.dialog;
const BrowserWindow = electron.BrowserWindow;

const express = require('express')
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const mongodb = require('mongodb');
const { ObjectId } = require('mongodb');

const URI = 'mongodb+srv://admin:CapstoneProjectTeamTBD@cluster0.sroumus.mongodb.net/Capstone-Db?retryWrites=true&w=majority'
let currentDatabase;
let currentCollection;
let window;



MongoClient.connect(URI, (err, client) => {

  if (err) {
      console.log("Something unexpected happened connecting to MongoDB Atlas...");
  }

  console.log("Connected to MongoDB Atlas...");

  currentDatabase = client.db('Capstone-Db'); /* currentDatabase contains a Db */

});

if (require('electron-squirrel-startup')) {
  app.quit();
}

const makeWindow = () => {
  express();
  window = new BrowserWindow({
    width: 1500,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false
    }
  });

  window.loadFile(path.join(__dirname, './views/entry.html'));
};

app.on('ready', makeWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
      app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
  }
});



//===============Login====================//
let user = {};

ipc.on('loginUser', async(event, loginInfo) => {
  currentCollection = currentDatabase.collection('users');
  user = await currentCollection.findOne({_username: loginInfo.username });

  if (user === null) {
      dialog.showErrorBox('Username does not exist', 'Try again');
  } else {

      if (user._password === loginInfo.password) {
          event.sender.send('loginSuccesful', user,user._role);
      } else {
          dialog.showErrorBox('Password is incorrect', 'Try again');
      }
  }
});
ipc.on('emptyUsername', (event) => {

  dialog.showErrorBox('Empty Username Field', 'Please provide a username.');

});

ipc.on('emptyPasswords', (event) => {

  dialog.showErrorBox('Empty Passwords Field', 'Please provide a password on both field');

});

ipc.on('unmatchingPasswords', (event) => {

  dialog.showErrorBox('Passwords Do Not Match', 'Please enter your password again.');

});

//===============Registration====================//
ipc.on('checkUsernameRegistration', async(event, currentUsername) => {
  currentCollection = currentDatabase.collection('users');
  console.log(currentUsername)
  let newUser = await currentCollection.findOne({_username: currentUsername});
  console.log(newUser)
  if (newUser != null) {

      let validUsername = false;

      dialog.showErrorBox('Username Already Exists', 'Please try a different username.');
      event.sender.send('isUsernameValid', validUsername);

  } else {

      let validUsername = true;
      event.sender.send('isUsernameValid', validUsername);

  }

});

ipc.on('addUserToDatabase', async(event, currentUser) => {

  currentCollection = currentDatabase.collection('users');
  await currentCollection.insertOne(currentUser);

  const myOptions = {
      type: 'info',
      buttons: ['Continue'],
      defaultId: 0,
      title: 'Success',
      message: 'The account has been created.'
  };

  dialog.showMessageBox(window, myOptions);

});
//=========Find Functions for Admin=============/
ipc.on('getListOfProfessors', async(event) => {
  professors=[];

  currentCollection = currentDatabase.collection('users');
 let findProfessors = await currentCollection.find({_role: "Professor"});
 await findProfessors.forEach(prof => professors.push(prof._username))
  console.log(professors)
  if (professors === null) {
      dialog.showErrorBox('No Professors to Display', 'Try adding some!');
  } else {
          event.sender.send('professorsRecieved', professors);
  }
});

ipc.on('getListOfStudents', async(event) => {
  students=[];

  currentCollection = currentDatabase.collection('users');
 let findStudents = await currentCollection.find({_role: "Student"});
 await findStudents.forEach(stu => students.push(stu._username))
  console.log(students)
  if (students === null) {
      dialog.showErrorBox('No Students to Display', 'Try adding some!');
  } else {
          event.sender.send('studentsRecieved', students);
  }
});