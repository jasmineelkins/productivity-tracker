import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

function Task({
  task,
  taskList,
  setTaskList,
  deleteTaskFromList,
  updateTaskInList,
  addTaskToList,
}) {
  function updateTask() {
    // PATCH request
  }

  function deleteTask(taskID) {
    // DELETE request

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
      {/* <span>{task.priority}</span> */}

      <select
        name="selectList"
        id="selectList"
        onChange={() => updateTask(task.id)}
      >
        <option value="high">High</option>
        <option value="normal">Normal</option>
        <option value="low">Low</option>
      </select>

      <input type="checkbox"></input>

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
