import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import TaskListContainer from "./TaskListContainer";
import CalendarComponent from "./CalendarComponent";
import Notes from "./Notes";
import ActivityLevelTracker from "./ActivityLevelTracker";
import TimeTracker from "./TimeTracker";
import GetDate from "./onClickForDate";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [notesDisplay, setNotesDisplay] = useState({})
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/tasks`)
      .then((res) => res.json())
      .then((listOfTasks) => setTaskList(listOfTasks))
      .catch((error) => console.log(error.message));
  }, [notesDisplay]);

  function addNewTaskToList(newTask) {
    const updatedTaskList = [...taskList, newTask];
    setTaskList(updatedTaskList);
  }

  function updateNotes(updatedTask) {
    setNotesDisplay(updatedTask)
  }

  const completedTaskList = taskList.filter((task) => task.completed === true);
  // setCompletedTasks(completedTaskList);

  return (
    <div className="App gridContainer">
      <Header />
      <TaskListContainer
        taskList={taskList}
        setTaskList={setTaskList}
        addNewTaskToList={addNewTaskToList}
        setNotesDisplay={setNotesDisplay}
      />
      <CalendarComponent />
      <Notes notesDisplay={notesDisplay} updateNotes={updateNotes} />
      <TimeTracker />
      <GetDate />
      <ActivityLevelTracker completedTaskList={completedTaskList} />
    </div>
  );
}

export default App;
