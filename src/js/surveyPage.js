import Questions from "../models/Questions.js";

const electron = require('electron');
const ipc = electron.ipcRenderer;

let questionContainer = document.getElementById('questions');
let submitButton = document.getElementById('submitButton');

ipc.send('retrieveQuestions');

submitButton.addEventListener("click", function(e) {
    e.preventDefault();

    document.write("button clicked");
});

 
function addQuestionToDisplay(question) {
    let newLine = document.createElement('br');
    let questionBlock = document.createElement("div");
    let questionText = document.createTextNode(question._question);
    questionBlock.classList.add("question");
    questionBlock.appendChild(questionText);
    questionContainer.appendChild(newLine);
    questionContainer.appendChild(questionBlock);

    if (question._answerType == "text") {
        let questionTextArea = document.createElement("textarea");
        
        questionContainer.appendChild(questionTextArea);
        questionContainer.appendChild(newLine);
     } else if (question._answerType == "radial") {
        const MAX_RADIALS = 5;
        let radioBlock = document.createElement("div");

        for (let i = 0; i < MAX_RADIALS; i++) {
            let questionRadio = document.createElement("input");
            questionRadio.type = "radio";
            let questionLabel = document.createElement("label");
            questionLabel.textContent = i + 1;

            radioBlock.appendChild(questionRadio);
            radioBlock.appendChild(questionLabel);
        }

        questionContainer.appendChild(newLine);
        questionContainer.appendChild(radioBlock);
        questionContainer.appendChild(newLine);
     } else {
        // NEED TO ADD DROP DOWN HERE  
     }
}

ipc.on('questionSuccess', (event, questions) => {
    questions.forEach(question => {
        addQuestionToDisplay(question);
    });
});