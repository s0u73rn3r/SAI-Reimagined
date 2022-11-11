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

if (require('electron-squirrel-startup')) {
  app.quit();
}

MongoClient.connect(URI, (err, client) => {

  if (err) {
      console.log("Something unexpected happened connecting to MongoDB Atlas...");
  }

  console.log("Connected to MongoDB Atlas...");

  currentDatabase = client.db('Capstone-Db'); /* currentDatabase contains a Db */

});


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
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
  }
});

let user = {};

ipc.on('loginUser', async(event, loginInfo) => {
  currentCollection = currentDatabase.collection('users');
  user = await currentCollection.findOne({_username: loginInfo.username });
  console.log(user)

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
    console.log('in else statement');
    event.sender.send('questionSuccess', questions);
    console.log('after else');
  }
});