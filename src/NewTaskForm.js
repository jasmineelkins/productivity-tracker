import React, { useState } from "react";

function NewTaskForm({
  formState,
  setFormState,
  defaultFormState,
  addNewTaskToList,
}) {
  const { name, priority } = formState;

  function handleChange(e) {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:3000/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: name,
        priority: priority,
        completed: false,
      }),
    })
      .then((res) => res.json())
      .then((newTaskObj) => addNewTaskToList(newTaskObj))
      .catch((error) => console.log(error.message));

    setFormState(defaultFormState);
  }

  return (
    <>
      <form className="newTaskForm" onSubmit={(e) => handleSubmit(e)}>
        <input
          name="name"
          placeholder="Enter task"
          onChange={(e) => handleChange(e)}
          value={name}
        ></input>

        <select
          name="priority"
          id="priority"
          onChange={(e) => handleChange(e)}
          value={priority}
        >
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