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

//const URI = 'mongodb+srv://admin:CapstoneProjectTeamTBD@cluster0.sroumus.mongodb.net/Capstone-Db?retryWrites=true&w=majority'

const URI = `mongodb+srv://${username}:${password}@${clusterUrl}/?authMechanism=${authMechanism}`
let currentDatabase;
let currentCollection;
let window;

if (require('electron-squirrel-startup')) {
  app.quit();
}

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
/*MongoClient.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true}, function (err, client) {
  
  if (err) {
      console.log("Something unexpected happened connecting to MongoDB Atlas...");
  }

  console.log("Connected to MongoDB Atlas...");

  currentDatabase = client.db('Capstone-Db'); /* currentDatabase contains a Db 

});*/


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
  //onsole.log("currentDb" + client.currentDatabase);
  currentCollection = currentDatabase.collection('users');
  user = await currentCollection.findOne({_username: loginInfo.username });
  console.log(user);

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
/*
ipc.on('addResponse', async(event, question, answer) => {
  ///   FIX THIS -----------------------------------------------
  response = new Responses(question, answer);
  currentCollection = currentDatabase.collection('responses');
  currentCollection.insert(response);
});*/