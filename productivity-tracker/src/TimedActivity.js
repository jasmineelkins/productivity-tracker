import React, { useState } from "react";

function TimedActivity({ activityObj }) {
  return (
    <>
      <span>{activityObj.name}</span>
      <span>{activityObj.time}</span>
    </>
  );
}

export default TimedActivity;
