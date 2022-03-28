import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

function Task({ task, taskList, setTaskList }) {
  function deleteTask() {
    // DELETE request
  }
  return (
    <div className="task">
      <span className="taskName">{task.name}</span>
      {/* <span>{task.priority}</span> */}

      <select name="selectList" id="selectList">
        <option value="high">High</option>
        <option value="normal">Normal</option>
        <option value="low">Low</option>
      </select>

      <input type="checkbox"></input>

      <button id="test" className="deleteButton" onClick={() => deleteTask()}>
        <FaTrashAlt />
      </button>
    </div>
  );
}

export default Task;
