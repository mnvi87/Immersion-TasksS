function addNote() {
  const notesContainer = document.getElementById("notesContainer");

  // Create new note
  const note = document.createElement("div");
  note.className = "note";
  note.contentEditable = true;
  note.setAttribute("placeholder", "Type something...");

  // Add delete on double click
  
  // Insert before the "+" box
  const addBox = document.querySelector(".add-box");
  notesContainer.insertBefore(note, addBox);

  // Focus immediately
  note.focus();
}
