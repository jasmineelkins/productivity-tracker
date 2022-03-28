import React, { useState } from "react";
import img from "./TimeTrackerPlaceholder.png";

function TimeTracker(props) {
  return (
    <div className="timeTrackerContainer griditem item5">
      <img src={img} alt="Clockify screenshot placeholder"></img>
    </div>
  );
}

export default TimeTracker;
