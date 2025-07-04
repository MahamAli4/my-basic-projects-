const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

// Load from localStorage
function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes") || "";
}
showNotes();

// Save to localStorage
function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

// Create new note
createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "./images/delete.jfif";
    img.width = 50;
    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox);
    updateStorage();
});

// Handle delete and typing
notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
});

notesContainer.addEventListener("keyup", function () {
    updateStorage();
});

// Prevent Enter from making new paragraph
document.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        document.execCommand("insertLineBreak");
        e.preventDefault();
    }
});
