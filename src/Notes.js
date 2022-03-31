import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FiMaximize2, FiChevronsLeft } from "react-icons/fi";

function Notes({ notesDisplay, updateNotes }) {
  const navigate = useNavigate();
  const [buttonClicked, setButtonClicked] = useState(true);

  function handleClick() {
    setButtonClicked(!buttonClicked);
    navigate(-1);
  }

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
      {buttonClicked ? (
        <button
          onClick={() => setButtonClicked(!buttonClicked)}
          className="btn link"
        >
          <Link to="notes">
            <FiMaximize2 />
          </Link>
        </button>
      ) : (
        <button onClick={() => handleClick()} className="btn return">
          <FiChevronsLeft />
        </button>
      )}

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
