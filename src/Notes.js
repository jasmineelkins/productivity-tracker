import React, { useState } from "react";
import { Link } from "react-router-dom";

function Notes({ notesDisplay, updateNotes }) {
  function handleNote(e) {
    e.preventDefault();

    const newTaskNotes = {
      ...notesDisplay,
      notes: [...notesDisplay.notes, e.target.notes.value],
    };

    fetch(`http://localhost:3000/tasks/${notesDisplay.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTaskNotes),
    })
      .then((res) => res.json())
      .then((updatedTask) => updateNotes(updatedTask));

    e.target.reset();
  }

  function handleResetNotes(e) {
    e.preventDefault();

    const newTaskNotes = { ...notesDisplay, notes: [] };

    fetch(`http://localhost:3000/tasks/${notesDisplay.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTaskNotes),
    })
      .then((res) => res.json())
      .then((updatedTask) => updateNotes(updatedTask));
  }

  return (
    <div className="notesContainer griditem item4">
      <Link to="notes">+</Link>

      <h3>Notes</h3>
      <form onSubmit={handleNote}>
        <textarea name="notes"></textarea>
        <br></br>
        <button type="submit" className="btn edit">
          Edit Notes
        </button>
        <br></br>
        <button onClick={handleResetNotes} className="btn reset-notes">
          Reset Notes
        </button>
      </form>
      <br></br>
      <h4>
        {notesDisplay.name
          ? `Notes for ${notesDisplay.name}:`
          : `Click a Task To Edit Notes`}
      </h4>
      <br></br>
      <ul>
        {notesDisplay.notes
          ? notesDisplay.notes.map((note, index) => <li key={index}>{note}</li>)
          : null}
      </ul>
    </div>
  );
}

export default Notes;
