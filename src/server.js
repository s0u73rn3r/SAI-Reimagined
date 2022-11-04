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
// mongoose.connect(URI);
// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error: "));
// db.once("open", function () {
//   console.log("Connected successfully");
// });
MongoClient.connect(URI, (err, client) => {

  if (err) {
      console.log("Something unexpected happened connecting to MongoDB Atlas...");
  }

  console.log("Connected to MongoDB Atlas...");

  currentDatabase = client.db('Capstone-Db'); /* currentDatabase contains a Db */

});

/*app.use(Router);

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})*/


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
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
  }
});

let user = {};

ipc.on('loginUser', async(event, loginInfo) => {
  currentCollection = currentDatabase.collection('users');
  user = await currentCollection.findOne({username: loginInfo.username });

  if (user === null) {
      dialog.showErrorBox('Username does not exist', 'Try again');
  } else {

      if (user.password === loginInfo.password) {
          event.sender.send('loginSuccesful', user); // Don't understand why we are sending something if it is never used. 
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