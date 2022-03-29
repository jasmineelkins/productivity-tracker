import React, { useState } from "react";
import Task from "./Task";

function TaskList({ taskList, setTaskList }) {
  const tasksToDisplay = taskList.map((task) => (
    <Task
      task={task}
      taskList={taskList}
      setTaskList={setTaskList}
      key={task.id}
    />
  ));
  return <div id="taskList">{tasksToDisplay}</div>;
}

export default TaskList;
