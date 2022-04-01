import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import TaskListContainer from "./TaskListContainer";
import CalendarComponent from "./CalendarComponent";
import Notes from "./Notes";
import ActivityLevelTracker from "./ActivityLevelTracker";
import TimeTracker from "./TimeTracker";
import GetDate from "./onClickForDate";
import { ReactDOM } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import EmbeddedGoogleCalendar from "./EmbeddedGoogleCalendar";
import GoogleCalendar from "./GoogleCalendar";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [notesDisplay, setNotesDisplay] = useState({});
  const [completedTasks, setCompletedTasks] = useState([]);
  const [newDate, setNewDate] = useState(new Date())
  

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
    setNotesDisplay(updatedTask);
  }

  return (
    <div className="App gridContainer">
      <Header />

      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <TaskListContainer
                  setCompletedTasks={setCompletedTasks}
                  taskList={taskList}
                  setTaskList={setTaskList}
                  addNewTaskToList={addNewTaskToList}
                  setNotesDisplay={setNotesDisplay}
                  newDate={newDate}
                  completedTasks={completedTasks}
                />
                <CalendarComponent setNewDate={setNewDate} />
                <Notes notesDisplay={notesDisplay} updateNotes={updateNotes} />
                <TimeTracker />
                <GetDate />
                <ActivityLevelTracker newDate={newDate} completedTasks={completedTasks} />
              </>
            }
          ></Route>

          <Route
            path="task-list"
            element={
              <TaskListContainer
                taskList={taskList}
                setTaskList={setTaskList}
                addNewTaskToList={addNewTaskToList}
                setNotesDisplay={setNotesDisplay}
                newDate={newDate}
              />
            }
          ></Route>

          <Route path="calendar" element={<CalendarComponent />}></Route>
          {/* <Route
            path="google-calendar"
            element={<EmbeddedGoogleCalendar />}
          ></Route> */}
          <Route path="google-calendar" element={<GoogleCalendar />}></Route>

          <Route
            path="notes"
            element={
              <Notes notesDisplay={notesDisplay} updateNotes={updateNotes} />
            }
          ></Route>

          <Route path="stopwatch" element={<TimeTracker />}></Route>

          <Route
            path="heatmap"
            element={<ActivityLevelTracker completedTasks={completedTasks} newDate={newDate} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
