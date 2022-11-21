import Questions from "../models/Questions.js";

const electron = require('electron');
const ipc = electron.ipcRenderer;

let questionContainer = document.getElementById('questions');
let submitButton = document.getElementById('submitButton');
let questionCount = 1;

ipc.send('retrieveQuestions');

submitButton.addEventListener("click", function(e) {
    e.preventDefault();

    // Loops through all of the questions
    for (let i = 0; i < questionCount; i++) {
        let question = document.getElementById(i + "q");
        let answerElement = null;
        let answer = null;
        // Checks what type of question to get an answer for
        if (document.getElementById(i + "text") != null) {      
            answerElement = document.getElementById(i + "text");
            
            answer = answerElement.value;
        } else if (document.getElementsByName(i + "radial") != null) {
            answerElement = document.getElementsByName(i + "radial");
            
            answerElement.forEach(radio => {
                if (radio.checked) {
                    answer = radio.value;
                }
            });
        } else if (document.getElementsByName(i + "gradeRadial") != null) {
            answerElement = document.getElementsByName(i + "gradeRadial");
            
            answerElement.forEach(radio => {
                if (radio.checked) {
                    answer = radio.value;
                }
            });
        } else {
            console.log("ERROR IN RESPONSE RETRIEVAL");
        }
        
        // Adds response to the database
        if (answerElement != null && question != null && answer != null) {
            ipc.send('addResponse', question.textContent, answer);
        }
    }
    
    /*****************************CHECK THIS**************************************/
    setTimeout(function() {  document.write("Survey Submitted"); }, 10000);
    document.location.href = "../views/courseList.html";
});

 
function addQuestionToDisplay(question) {
    let newLine = document.createElement('br');
    let questionBlock = document.createElement("div");
    let questionLabel = document.createElement("label");
    questionLabel.textContent = question._question;
    questionLabel.id = questionCount + "q";

    questionBlock.classList.add("question");
    questionBlock.appendChild(questionLabel);
    questionContainer.appendChild(newLine);
    questionContainer.appendChild(questionBlock);

    if (question._answerType == "text") {
        let questionTextArea = document.createElement("textarea");
        questionTextArea.id = questionCount + question._answerType;

        questionContainer.appendChild(questionTextArea);
        questionContainer.appendChild(newLine);
     } else if (question._answerType == "radial") {
        const MAX_RADIALS = 5;
        let radioBlock = document.createElement("div");

        for (let i = 0; i < MAX_RADIALS; i++) {
            let questionRadio = document.createElement("input");
            questionRadio.type = "radio";
            questionRadio.name = questionCount + question._answerType;
            questionRadio.value = i;

            let questionLabel = document.createElement("label");
            questionLabel.textContent = i + 1;
            questionLabel.id = questionCount + "label";

            radioBlock.appendChild(questionRadio);
            radioBlock.appendChild(questionLabel);
        }

        radioBlock.id = questionCount + question._answerType;
        questionContainer.appendChild(newLine);
        questionContainer.appendChild(radioBlock);
        questionContainer.appendChild(newLine);
     } else if (question._answerType == "gradeRadial") {
        const MAX_RADIALS = 'F';
        let radioBlock = document.createElement("div");

        for (let i = 'A'; i <= MAX_RADIALS; i = String.fromCharCode(i.charCodeAt(0) + 1)) {
            if (i != 'E') {
                let questionRadio = document.createElement("input");
                questionRadio.type = "radio";
                questionRadio.name = questionCount + question._answerType;
                questionRadio.value = i;

                let questionLabel = document.createElement("label");
                questionLabel.textContent = i;
                questionLabel.id = questionCount + "label";

                radioBlock.appendChild(questionRadio);
                radioBlock.appendChild(questionLabel);
            }
        }
        
        questionContainer.appendChild(newLine);
        questionContainer.appendChild(radioBlock);
        questionContainer.appendChild(newLine);
     } else {
        // ERROR OR INVALID INPUT
        console.log("ERROR WITH QUESTION ANSWER TYPE");
     }

     ++questionCount;
}

ipc.on('questionSuccess', (event, questions) => {
    questions.forEach(question => {
        addQuestionToDisplay(question);
    });
});