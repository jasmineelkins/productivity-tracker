import React, { useState } from "react";

function Notes({notesDisplay, updateNotes}) {

  function handleNote(e) {
    e.preventDefault();
    
    
    const newTaskNotes = {...notesDisplay, notes: e.target.notes.value}

    fetch(`http://localhost:3000/tasks/${notesDisplay.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTaskNotes)
    })
    .then(res => res.json())
    .then(updatedTask => updateNotes(updatedTask))

    e.target.reset();
  }


  
  return (
    <div className="notesContainer griditem item4">
      <h3>Notes</h3>
      <form onSubmit={handleNote}>
        <textarea name="notes"></textarea>
        <br></br>
        <button type="submit">Edit Note</button>
      </form>
      <br></br>
      <h4>{notesDisplay.name ? `Notes for ${notesDisplay.name}:` : `Click a Task To Edit Notes`}</h4>
      <br></br>
      <p>{notesDisplay.notes}</p>
    </div>
  );
}

export default Notes;
