import React, { useState } from "react";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

const defaultFormState = {
  name: "",
  priority: "normal",
  completed: "false",
};

function TaskListContainer({ taskList, setTaskList, addNewTaskToList, setNotesDisplay }) {
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
        taskList={taskList}
        setTaskList={setTaskList}
        addTaskToList={addTaskToList}
        setNotesDisplay={setNotesDisplay}
      />
    </div>
  );
}

export default TaskListContainer;
