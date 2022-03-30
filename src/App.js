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
  const [completedTasks, setCompletedTasks] = useState([]);

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

  const completedTaskList = taskList.filter((task) => task.completed === true);
  // setCompletedTasks(completedTaskList);

  return (
    <div className="App gridContainer">
      <Header />
      <TaskListContainer
        taskList={taskList}
        setTaskList={setTaskList}
        addNewTaskToList={addNewTaskToList}
      />
      <CalendarComponent />
      <Notes />
      <TimeTracker />
      <ActivityLevelTracker completedTaskList={completedTaskList} />
      <GetDate />
    </div>
  );
}

export default App;
