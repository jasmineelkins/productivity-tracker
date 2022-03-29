import React, { useState } from "react";
import TimedActivitiesOutput from "./TimedActivitiesOutput.js";

//useRef helps us to get or control any element's reference

import img from "./TimeTrackerPlaceholder.png";
import useTimer from "./hooks/useTimer";

function TimeTracker(props) {
  // set state for activity controlled input form:
  const [activity, setActivity] = useState("");

  // set state for completed timed activities list
  const [activityList, setActivityList] = useState([]);

  // import timer hook
  const {
    timer,
    isActive,
    isPaused,
    handleStart,
    handlePause,
    handleResume,
    handleReset,
  } = useTimer(0);

  const formatTime = () => {
    // displays time in 00:00:00 format
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  function handleChange(e) {
    setActivity(e.target.value);
  }

  function addActivityToList() {
    setActivityList([...activityList, activity]);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // end timer & submit activity to list
  }

  return (
    <div className="timeTrackerContainer griditem item5">
      {/* <img src={img} alt="Clockify screenshot placeholder"></img> */}

      <div className="stopwatchContainer">
        <h3>Stopwatch</h3>
        <form className="activityForm" onSubmit={(e) => handleSubmit(e)}>
          <input
            name="name"
            placeholder="Track an activity"
            onChange={(e) => handleChange(e)}
            value={activity}
          ></input>
          <input type="submit" value="Save" />
        </form>

        <p>{formatTime(timer)}</p>

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
      </div>

      <TimedActivitiesOutput timer={timer} activity={activity} />
    </div>
  );
}

export default TimeTracker;
