import React, { useState } from "react";
import { Link } from "react-router-dom";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { useNavigate } from "react-router-dom";

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
}) {
  const [formState, setFormState] = useState(defaultFormState);
  const navigate = useNavigate();
  const [buttonClicked, setButtonClicked] = useState(true);
  // let clicked = true;

  function handleClick() {
    setButtonClicked(!buttonClicked);
    navigate(-1);
  }

  return (
    <div id="taskListContainerContainer" className="griditem item2">
      {buttonClicked ? (
        <button onClick={() => setButtonClicked(!buttonClicked)}>
          {" "}
          <Link to="task-list">+</Link>
        </button>
      ) : (
        <button onClick={() => handleClick()}>go back</button>
      )}

      <NewTaskForm
        formState={formState}
        setFormState={setFormState}
        defaultFormState={defaultFormState}
        addNewTaskToList={addNewTaskToList}
      />
      <TaskList
        taskList={taskList}
        setTaskList={setTaskList}
        setNotesDisplay={setNotesDisplay}
      />
    </div>
  );
}

export default TaskListContainer;
