import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

function Task({ task, deleteTaskFromList, updateTaskInList }) {
  const [dropdownChoice, setDropdownChoice] = useState(task.priority);
  const [isChecked, setIsChecked] = useState(task.completed);

  useEffect(() => {
    fetch(`http://localhost:3000/tasks/${task.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        priority: dropdownChoice,
      }),
    })
      .then((res) => res.json())
      // .then((data) => console.log("PATCH data: ", data))
      .catch((error) => console.log(error.message));

    updateTaskInList(task.id, dropdownChoice);
  }, [dropdownChoice]);

  useEffect(() => {
    fetch(`http://localhost:3000/tasks/${task.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        completed: isChecked,
      }),
    })
      .then((res) => res.json())
      // .then((data) => console.log("PATCH data 2: ", data))
      .catch((error) => console.log(error.message));

    updateTaskInList(task.id, isChecked);
  }, [isChecked]);

  function deleteTask(taskID) {
    fetch(`http://localhost:3000/tasks/${taskID}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
      }
    });

    deleteTaskFromList(taskID);
  }

  return (
    <div className="task">
      <span className="taskName">{task.name}</span>

      <select
        name="selectList"
        id="selectList"
        onChange={(e) => setDropdownChoice(e.target.value)}
        value={dropdownChoice}
      >
        <option value="high">High</option>
        <option value="normal">Normal</option>
        <option value="low">Low</option>
      </select>

      <input
        type="checkbox"
        onChange={() => setIsChecked(!isChecked)}
        checked={isChecked}
      ></input>

      <button
        id="test"
        className="deleteButton"
        onClick={() => deleteTask(task.id)}
      >
        <FaTrashAlt />
      </button>
    </div>
  );
}

export default Task;
