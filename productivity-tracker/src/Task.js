import React, { useState } from "react";

function Task({ task, taskList, setTaskList }) {
  function deleteTask() {
    // DELETE request
  }
  return (
    <div className="task">
      <span>{task.name}</span>
      {/* <span>{task.priority}</span> */}

      <select name="selectList" id="selectList">
        <option value="high">High</option>
        <option value="normal">Normal</option>
        <option value="low">Low</option>
      </select>

      <span>{task.completed}</span>

      <button id="test" className="deleteButton" onClick={() => deleteTask()}>
        X
      </button>
    </div>
  );
}

export default Task;
