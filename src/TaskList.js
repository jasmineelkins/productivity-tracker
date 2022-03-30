import React, { useState } from "react";
import Task from "./Task";

function TaskList({ taskList, setTaskList, addTaskToList }) {
  function deleteTaskFromList(taskID) {
    // delete task from list & DOM
    const updatedListToDisplay = taskList.filter((task) => task.id !== taskID);
    setTaskList(updatedListToDisplay);
  }

  function updateTaskInList() {
    // update task from list & DOM
  }

  const tasksToDisplay = taskList.map((task) => (
    <Task
      task={task}
      taskList={taskList}
      setTaskList={setTaskList}
      key={task.id}
      deleteTaskFromList={deleteTaskFromList}
      addTaskToList={addTaskToList}
      updateTaskInList={updateTaskInList}
    />
  ));
  return <div id="taskList">{tasksToDisplay}</div>;
}

export default TaskList;
