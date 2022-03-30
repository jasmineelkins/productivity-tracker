import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import TaskListContainer from "./TaskListContainer";
import CalendarComponent from "./CalendarComponent";
import Notes from "./Notes";
import ActivityLevelTracker from "./ActivityLevelTracker";
import TimeTracker from "./TimeTracker";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [notesDisplay, setNotesDisplay] = useState({})

  useEffect(() => {
    fetch(`http://localhost:3000/tasks`)
      .then((res) => res.json())
      .then((listOfTasks) => setTaskList(listOfTasks))
      .catch((error) => console.log(error.message));
  }, []);

  function addNewTaskToList(newTask) {
    const updatedTaskList = [...taskList, newTask];
    setTaskList(updatedTaskList);
  }

  function updateNotes(updatedTask) {
    setNotesDisplay(updatedTask)
  }


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
      <ActivityLevelTracker />
    </div>
  );
}

export default App;
