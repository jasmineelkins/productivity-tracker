import React, { useState } from "react";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

function ToDoList({ taskList, setTaskList }) {
  return (
    <div id="toDoListContainer">
      <NewTaskForm />
      <TaskList taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}

export default ToDoList;
