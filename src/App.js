import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import TaskListContainer from "./components/TaskListContainer";
import CalendarComponent from "./components/CalendarComponent";
import Notes from "./components/Notes";
import Heatmap from "./components/Heatmap";
import TimeTracker from "./components/TimeTracker";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GoogleCalendar from "./components/GoogleCalendar";
import QuotesComponent from "./components/QuotesComponent";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [notesDisplay, setNotesDisplay] = useState({});
  const [completedTasks, setCompletedTasks] = useState([]);
  const [completedDate, setCompletedDate] = useState(new Date().toISOString());

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
    <div>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="App gridContainer">
                <TaskListContainer
                  setCompletedTasks={setCompletedTasks}
                  taskList={taskList}
                  setTaskList={setTaskList}
                  addNewTaskToList={addNewTaskToList}
                  setNotesDisplay={setNotesDisplay}
                  completedDate={completedDate}
                  completedTasks={completedTasks}
                />
                <QuotesComponent />
                <CalendarComponent
                  setCompletedDate={setCompletedDate}
                  completedDate={completedDate}
                />
                <Notes notesDisplay={notesDisplay} updateNotes={updateNotes} />
                <TimeTracker />
                <Heatmap completedTasks={completedTasks} />
              </div>
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
                completedDate={completedDate}
                setCompletedTasks={setCompletedTasks}
              />
            }
          ></Route>

          <Route
            path="calendar"
            element={<CalendarComponent setCompletedDate={setCompletedDate} />}
          ></Route>

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
            element={
              <Heatmap
                completedTasks={completedTasks}
                completedDate={completedDate}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
