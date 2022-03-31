import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
// import useCurrentDate from "./hooks/useCurrentDate";

function Task({ task, deleteTaskFromList, updateTaskInList, setNotesDisplay }) {
  const [dropdownChoice, setDropdownChoice] = useState(task.priority);
  const [isChecked, setIsChecked] = useState(task.completed);

  // import useCurrentDate hook
  // const { currentDate, handleDate } = useCurrentDate();

  const completedStatusClass = isChecked ? "taskName completed" : "taskName";
  const [currentDate, setDate] = useState(null);
  // const handleDate = () => {
  //   let date = new Date().toLocaleDateString();
  //   setDate(date);
  // };

  // REWRITE THIS NOT IN USE EFFECT
  useEffect(() => {
    console.log("before dropdown fetch");

    fetch(`http://localhost:3000/tasks/${task.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3002",
      },
      body: JSON.stringify({
        priority: dropdownChoice,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log("PATCH data: ", data))
      .catch((error) => console.log(error.message));

    updateTaskInList(task.id, dropdownChoice);
  }, [dropdownChoice]);

  useEffect(() => {
    // console.log("before checkbox fetch");
    // fetch(`http://localhost:3000/tasks/${task.id}`, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //     "Access-Control-Allow-Origin": "http://localhost:3002",
    //   },
    //   body: JSON.stringify({
    //     completed: isChecked,
    //     dateCompleted: currentDate,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log("PATCH data 2: ", data))
    //   .catch((error) => console.log(error.message));}

    updateTaskInList(task.id, isChecked, currentDate);
  }, [isChecked, currentDate]);

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
    setNotesDisplay(task)}
  function handleClick(e) {
    const newValue = !isChecked;
    console.log(newValue);
    setIsChecked(newValue);

    // also add date clicked:
    // handleDate();
    let date = new Date().toLocaleDateString();
    console.log(date);
    setDate(date);

    //
    console.log("before checkbox fetch");
    fetch(`http://localhost:3000/tasks/${task.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3002",
      },
      body: JSON.stringify({
        completed: newValue,
        dateCompleted: date,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log("PATCH data 2: ", data))
      .catch((error) => console.log(error.message));

    // set the state to update user interface
    // then save the change to the db
  }

  return (
    <div className="task">
      <span className="taskName" onClick={handleNotesDisplay}>{task.name}</span>
      {/* <span>{task.priority}</span> */}
      <span className={completedStatusClass}>{task.name}</span>

      <select
        name="selectList"
        id="selectList"
        onChange={(e) => setDropdownChoice(e.target.value)}
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
