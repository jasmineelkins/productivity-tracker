import React, { useState } from "react";
import { Link } from "react-router-dom";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { useNavigate } from "react-router-dom";
import { FiMaximize2, FiChevronsLeft } from "react-icons/fi";

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
  const navigate = useNavigate();
  const [buttonClicked, setButtonClicked] = useState(true);

  function handleClick() {
    setButtonClicked(!buttonClicked);
    navigate(-1);
  }

  return (
    <div id="taskListContainerContainer" className="griditem item2">
      {buttonClicked ? (
        <button
          onClick={() => setButtonClicked(!buttonClicked)}
          className="btn link"
        >
          {" "}
          <Link to="task-list">
            <FiMaximize2 />
          </Link>
        </button>
      ) : (
        <button onClick={() => handleClick()} className="btn return">
          <FiChevronsLeft />
        </button>
      )}

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
