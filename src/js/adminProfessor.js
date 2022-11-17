const electron = require('electron');
const ipc = electron.ipcRenderer;

let professorList;
let professorDisplay = document.getElementById("listofprofessors")
ipc.send('getListOfProfessors');

ipc.on('professorsRecieved', (event, professors)=> {
    console.log(professors)
    professorList = $(`<div> <h3> ${professors + `<br>`} </h3></div>`)

    professorList.appendTo(professorDisplay)


    

});

