const userInputBox = document.getElementById("input_box");
const clearButton = document.getElementById("clear_button");
const notebox = document.getElementById("notes");

const existingNotes = JSON.parse(localStorage.getItem("notes")) || [];
const noteData = [];

existingNotes.forEach(note => {
    console.log(note)
    addNote(note);
});

function addNote(text) {
    noteData.push(text);
    let str = text + "<br>";
    notebox.innerHTML += str;
    localStorage.setItem("notes", JSON.stringify(noteData));
    userInputBox.value = ''
}

userInputBox.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault()
        addNote(userInputBox.value);
    } 
});


clearButton.addEventListener("click", function(event) {
    localStorage.clear();
    userInputBox.value = ''
    notebox.innerHTML = ''
    while(noteData.length > 0) {
        noteData.pop();
    }
});


