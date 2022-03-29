import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import ToDoList from "./ToDoList";
import CalendarComponent from "./CalendarComponent";
import Notes from "./Notes";
import ActivityLevelTracker from "./ActivityLevelTracker";
import TimeTracker from "./TimeTracker";

function App() {
  const [taskList, setTaskList] = useState([]);

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

  return (
    <div className="App gridContainer">
      <Header />
      <ToDoList
        taskList={taskList}
        setTaskList={setTaskList}
        addNewTaskToList={addNewTaskToList}
      />
      <CalendarComponent />
      <Notes />
      <TimeTracker />
      <ActivityLevelTracker />
    </div>
  );
}

export default App;
