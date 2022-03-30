import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
// import useCurrentDate from "./hooks/useCurrentDate";

function Task({ task, deleteTaskFromList, updateTaskInList }) {
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

  useEffect(() => {
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
      // .then((data) => console.log("PATCH data: ", data))
      .catch((error) => console.log(error.message));

    updateTaskInList(task.id, dropdownChoice);
  }, [dropdownChoice]);

  useEffect(() => {
    fetch(`http://localhost:3000/tasks/${task.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3002",
      },
      body: JSON.stringify({
        completed: isChecked,
        dateCompleted: currentDate,
      }),
    })
      .then((res) => res.json())
      // .then((data) => console.log("PATCH data 2: ", data))
      .catch((error) => console.log(error.message));

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

  function handleClick(e) {
    setIsChecked(!isChecked);
    console.log(isChecked);

    // also add date clicked:
    // handleDate();
    let date = new Date().toLocaleDateString();
    setDate(date);
    console.log(currentDate);
  }

  return (
    <div className="task">
      <span className={completedStatusClass}>{task.name}</span>

      <select
        name="selectList"
        id="selectList"
        onChange={(e) => setDropdownChoice(e.target.value)}
        value={dropdownChoice}
      >
        <option value="high">High</option>
        <option value="normal">Normal</option>
        <option value="low">Low</option>
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
