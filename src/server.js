const electron = require('electron');
const app = electron.app;
const ipc = electron.ipcMain;
const dialog = electron.dialog;
const BrowserWindow = electron.BrowserWindow;

const express = require('express')
const path = require('path');
//const MongoClient = require('mongodb').MongoClient;
const mongodb = require('mongodb');
const { MongoClient } = require('mongodb');

const username = encodeURIComponent("angelica");
const password = encodeURIComponent("3s3krNKpypN5HMQd");
const clusterUrl = "cluster0.sroumus.mongodb.net/Capstone-Db?retryWrites=true&w=majority";
const authMechanism = "DEFAULT";

const URI = `mongodb+srv://${username}:${password}@${clusterUrl}`;
let currentDatabase;
let currentCollection;
let window;



const client = new MongoClient(URI);

async function run() {
  //try {
    // Establish and verify connection
    //await client.db("admin").command({ ping: 1 });
    //currentDatabase = await client.db('Capstone-Db').command({ping: 1});
    await client.db('Capstone-Db').command({ping: 1});
    console.log("Connected to MongoDB Atlas...");
    currentDatabase = client.db('Capstone-Db');
  //} finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  //}
}


run().catch(console.dir);

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
  //onsole.log("currentDb" + client.currentDatabase);
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


ipc.on('retrieveQuestions', async(event) => {
  let questions = {};
  
  currentCollection = currentDatabase.collection('questions');
  questions = await currentCollection.find({}).toArray();
  console.log(questions);

  if (questions === null) {
      dialog.showErrorBox('Error with questions', 'Try again later');
  } else {
    // Sends to a function to display the questions
    event.sender.send('questionSuccess', questions);
  }
});

ipc.on('addResponse', (event, question, answer) => {
  currentCollection = currentDatabase.collection('responses');
  currentCollection.insertOne({
    _question : question,
    _answer : answer
  });
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
  console.log(students);
  if (students === null) {
      dialog.showErrorBox('No Students to Display', 'Try adding some!');
  } else {
          event.sender.send('studentsRecieved', students);
  }
});

ipc.on('retrieveCourses', async(event) => {
  let courses =[];
  currentCollection = currentDatabase.collection('courses');
  let findCourses = await currentCollection.find({});
  await findCourses.forEach(crs => courses.push(crs._name))
  console.log(courses);

  if (courses === null) {
      dialog.showErrorBox('Error with courses', 'Try again later');
  } else {
    // Sends to a function to display the courses
    event.sender.send('courseSuccess', courses);
  }
});
