import React, { useState } from "react";
import Task from "./Task";

function TaskList({ taskList, setTaskList, setNotesDisplay, notes }) {
  function deleteTaskFromList(taskID) {
    const updatedListToDisplay = taskList.filter((task) => task.id !== taskID);
    setTaskList(updatedListToDisplay);
  }

  function updateTaskInList(taskID, dropdownChoice, isChecked, currentDate) {
    const updatedListToDisplay = taskList.map((task) => {
      if (task.id === taskID) {
        return {
          ...task,
          priority: dropdownChoice,
          completed: isChecked,
          dateCompleted: currentDate,
        };
      } else {
        return task;
      }
    });

    setTaskList(updatedListToDisplay);
  }

  const tasksToDisplay = taskList.map((task) => (
    <Task
      task={task}
      key={task.id}
      deleteTaskFromList={deleteTaskFromList}
      updateTaskInList={updateTaskInList}
      setNotesDisplay={setNotesDisplay}
      notes={notes}
    />
  ));
  return <div id="taskList">{tasksToDisplay}</div>;
}

export default TaskList;
