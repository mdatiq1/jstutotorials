console.log("how are you guys");
console.log("i am fine guys");
//if user add the notes add it to the loacal storage

let addBtn = document.getElementById('submit');


addBtn.addEventListener("click", function (e) {
    let addtxt = document.getElementById("text-area");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addtxt.value);
    localStorage.setItem('notes', JSON.stringify(notes));
    addtxt.value = "";
    console.log(notesObj);
    showNotes();



})
function showNotes(){
    let notes= localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html ="";
    notes.forEach(function(element,index) {
        
    });

}