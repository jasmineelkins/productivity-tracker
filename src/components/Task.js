import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
// import useCurrentDate from "./hooks/useCurrentDate";

function Task({
  setCompletedTasks,
  task,
  deleteTaskFromList,
  updateTaskInList,
  setNotesDisplay,
  newDate,
}) {
  const [dropdownChoice, setDropdownChoice] = useState(task.priority);
  // const dropdownValue = dropdownChoice;
  const [isChecked, setIsChecked] = useState(task.completed);
  // const checkedValue = isChecked === "true" ? "true" : "false";

  // import useCurrentDate hook
  // const { currentDate, handleDate } = useCurrentDate();

  const completedStatusClass = isChecked ? "taskName completed" : "taskName";
  const [currentDate, setDate] = useState(null);
  // const handleDate = () => {
  //   let date = new Date().toLocaleDateString();
  //   setDate(date);
  // };

  // useEffect to re-render if priority or completed status are updated:

  useEffect(() => {
    const updatedTasks = updateTaskInList(
      task.id,
      dropdownChoice,
      isChecked,
      currentDate
    );
    const completedTaskList = updatedTasks.filter(
      (task) => task.completed === true
    );

    setCompletedTasks(completedTaskList);
  }, [dropdownChoice, isChecked, currentDate]);

  function deleteTask(taskID) {
    fetch(`http://localhost:3000/tasks/${taskID}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
      }
    });

    deleteTaskFromList(taskID);
  }

  function handleNotesDisplay() {
    setNotesDisplay(task);
  }

  function handleDropdownSelection(e) {
    setDropdownChoice(e.target.value);

    // PATCH dropdown input
    // console.log("before dropdown fetch");

    fetch(`http://localhost:3000/tasks/${task.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3002",
      },
      body: JSON.stringify({
        priority: e.target.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log("PATCH after dropdown: ", data))
      .catch((error) => console.log(error.message));

    // set the state to update user interface
  }

  let date = new Date().toLocaleDateString();

  function handleClick(e) {
    setIsChecked(!isChecked);
    // add date clicked:
    // handleDate();
    // console.log(currentDate);
    setDate(date);

    // PATCH checkbox input data
    // console.log("before checkbox fetch");
    fetch(`http://localhost:3000/tasks/${task.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3002",
      },
      body: JSON.stringify({
        completed: !isChecked,
        date: newDate,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log("PATCH after checkbox: ", data))
      .catch((error) => console.log(error.message));
  }

  return (
    <div className="task">
      <span className={completedStatusClass} onClick={handleNotesDisplay}>
        {task.name}
      </span>

      <select
        name="selectList"
        id="selectList"
        onChange={(e) => handleDropdownSelection(e)}
        value={dropdownChoice}
      >
        <option value="high" className="dropdownOption">
          High
        </option>
        <option value="normal" className="dropdownOption">
          Normal
        </option>
        <option value="low" className="dropdownOption">
          Low
        </option>
      </select>

      <input
        type="checkbox"
        onChange={(e) => handleClick(e)}
        checked={isChecked}
      ></input>

      <button className="deleteButton" onClick={() => deleteTask(task.id)}>
        <FaTrashAlt />
      </button>
    </div>
  );
}

export default Task;
