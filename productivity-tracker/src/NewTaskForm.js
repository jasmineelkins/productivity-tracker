import React, { useState } from "react";

function NewTaskForm(props) {
  function handleSubmit(e) {
    e.preventDefault();

    // POST request to add new task to db
    // add new task to list & DOM
  }

  return (
    <>
      <form className="newTaskForm" onSubmit={(e) => handleSubmit(e)}>
        <input name="name" placeholder="Enter task"></input>

        <select name="selectList" id="selectList" defaultValue={"normal"}>
          <option value="high">High</option>
          <option value="normal">Normal</option>
          <option value="low">Low</option>
        </select>

        <input type="submit" value="Add to list" />
      </form>
    </>
  );
}

export default NewTaskForm;
