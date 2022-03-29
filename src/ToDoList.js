import React, { useState } from "react";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

const defaultFormState = {
  name: "",
  priority: "normal",
  completed: "false",
};

function ToDoList({ taskList, setTaskList, addNewTaskToList }) {
  const [formState, setFormState] = useState(defaultFormState);

  return (
    <div id="toDoListContainer" className="griditem item2">
      <NewTaskForm
        formState={formState}
        setFormState={setFormState}
        defaultFormState={defaultFormState}
        addNewTaskToList={addNewTaskToList}
      />
      <TaskList taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}

export default ToDoList;
