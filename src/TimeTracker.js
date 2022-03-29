import React, { useState } from "react";
import TimedActivitiesOutput from "./TimedActivitiesOutput.js";

//useRef helps us to get or control any element's reference

import img from "./TimeTrackerPlaceholder.png";
import useTimer from "./hooks/useTimer";

function TimeTracker(props) {
  // import Timer hook
  const {
    timer,
    isActive,
    isPaused,
    handleStart,
    handlePause,
    handleResume,
    handleReset,
    formattedTime,
  } = useTimer(0);

  // set state for activity controlled input form:
  const [activityInput, setActivityInput] = useState({
    name: "",
    time: "",
  });

  // set state for completed timed activities list
  const [activityList, setActivityList] = useState([]);

  function handleChange(e) {
    setActivityInput({ name: e.target.value, time: formattedTime });
  }

  function addActivityToList() {
    setActivityList([...activityList, activityInput]);

    console.log("activity: ", activityInput);
    console.log("timer: ", formattedTime);
  }

  function handleSubmit(e) {
    e.preventDefault();

    addActivityToList();
    console.log("activity list: ", activityList);
    // end timer & submit activity to list

    setActivityInput("");
  }

  return (
    <div className="timeTrackerContainer griditem item5">
      {/* <img src={img} alt="Clockify screenshot placeholder"></img> */}

      <div className="activityTrackerForm">
        <h3>Stopwatch</h3>
        <form className="activityForm" onSubmit={(e) => handleSubmit(e)}>
          <input
            name="name"
            placeholder="Track an activity"
            onChange={(e) => handleChange(e)}
            value={activityInput.name}
          ></input>
          <input type="submit" value="Save" />
        </form>
      </div>

      <p>{formattedTime}</p>

      <div className="buttons">
        {!isActive && !isPaused ? (
          <button onClick={handleStart}>Start</button>
        ) : isPaused ? (
          <button onClick={handlePause}>Pause</button>
        ) : (
          <button onClick={handleResume}>Resume</button>
        )}
        <button onClick={handleReset} disabled={!isActive}>
          Reset
        </button>
      </div>

      <TimedActivitiesOutput activityList={activityList} />
    </div>
  );
}

export default TimeTracker;
