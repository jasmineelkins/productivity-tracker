import React, { useState } from "react";
import Task from "./Task";

function TaskList({ completedTasks, setCompletedTasks, taskList, setTaskList, setNotesDisplay, notes, newDate }) {
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
          date: newDate,
        };
      } else {
        return task;
      }
    });

    setTaskList(updatedListToDisplay);
    return updatedListToDisplay;
  }

  const tasksToDisplay = taskList.map((task) => (
    <Task
      taskList={taskList}
      task={task}
      key={task.id}
      deleteTaskFromList={deleteTaskFromList}
      updateTaskInList={updateTaskInList}
      setNotesDisplay={setNotesDisplay}
      notes={notes}
      completedTasks={completedTasks}
      setCompletedTasks={setCompletedTasks}
      newDate={newDate}
    />
  ));
  return <div id="taskList">{tasksToDisplay}</div>;
}

export default TaskList;
