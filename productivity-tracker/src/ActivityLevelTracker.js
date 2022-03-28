import React, { useState } from "react";
import img from "./ActivityLevelTrackerPlaceholder.png";

function ActivityLevelTracker(props) {
  return (
    <div className="activityTrackerContainer griditem item6">
      <img src={img} alt="Activity tracker placeholder" />
    </div>
  );
}

export default ActivityLevelTracker;
