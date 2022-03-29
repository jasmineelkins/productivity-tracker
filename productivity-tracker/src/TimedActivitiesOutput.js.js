import React, { useState } from "react";
import TimedActivity from "./TimedActivity";

function TimedActivitiesOutput({ activityList }) {
  const listToDisplay = activityList.map((activityObj) => (
    <TimedActivity activityObj={activityObj} />
  ));
  return <>{listToDisplay}</>;
}

export default TimedActivitiesOutput;
