// import questionModel from "../models/Questions";
// const mongoose = require("mongoose");
// mongoose.connect(URI);
// const db = mongoose.connection;
// const questionModel = require("./models/Questions.js");


//const questions = await questionModel.find({});
//var questionList = document.getElementById("questionList");
//var question = document.getElementById("questions");
// let submitButton = $('submitBtn');
//let length = $(questions).length;

/*requirejs(['jquery', '../models/Questions'], async function() {
    $('h1').hide();

    const questionModel = require('../models/Questions');
    document.write('0');
    const questions = await questionModel.find({});
    document.write('1');
    $('container#in').append('<p>' + $questions + '</p>');
    $('h1').show();
});*/

import Courses from "../models/Courses";

const electron = require('electron');
const ipc = electron.ipcRenderer;

