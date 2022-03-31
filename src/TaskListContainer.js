import React, { useState } from "react";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

const defaultFormState = {
  name: "",
  priority: "normal",
  completed: "false",
};

function TaskListContainer({
  taskList,
  setTaskList,
  addNewTaskToList,
  setNotesDisplay,
  completedTasks, 
  setCompletedTasks,
}) {
  const [formState, setFormState] = useState(defaultFormState);

  return (
    <div id="taskListContainerContainer" className="griditem item2">
      <NewTaskForm
        formState={formState}
        setFormState={setFormState}
        defaultFormState={defaultFormState}
        addNewTaskToList={addNewTaskToList}
      />
      <TaskList
        completedTasks={completedTasks}
        setCompletedTasks={setCompletedTasks}
        taskList={taskList}
        setTaskList={setTaskList}
        setNotesDisplay={setNotesDisplay}
      />
    </div>
  );
}

export default TaskListContainer;
