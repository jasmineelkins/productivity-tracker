import React, { useState } from "react";
import { Link } from "react-router-dom";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { useNavigate } from "react-router-dom";
import { FiMaximize2, FiChevronsLeft } from "react-icons/fi";

function ActivityLevelTracker({ completedTasks, completedTaskList }) {
  // 1. count how many items are in the completedTaskList
  // let numberOfCompletedTasks = completedTaskList.length();
  console.log(completedTaskList);
  console.log("Completed Tasks: ", completedTasks);
  // will need to determine which date tasks were completed on & link - dateCompleted
  // need to add date info to task in db (PATCH updates db when task checked) - functional but not persisting

  // set color variable based on how many tasks completed
  // let count = numberOfCompletedTasks;
  const navigate = useNavigate();
  const [buttonClicked, setButtonClicked] = useState(true);

  function handleClick() {
    setButtonClicked(!buttonClicked);
    navigate(-1);
  }

  const [completedCount, setCompletedCount] = useState(0);
  //const []
  return (
    <div className="activityTrackerContainer item6">
      {buttonClicked ? (
        <button
          onClick={() => setButtonClicked(!buttonClicked)}
          className="btn link"
        >
          {" "}
          <Link to="heatmap">
            <FiMaximize2 />
          </Link>
        </button>
      ) : (
        <button onClick={() => handleClick()} className="btn return">
          <FiChevronsLeft />
        </button>
      )}

      <CalendarHeatmap
        startDate={new Date("2022-01-01")}
        endDate={new Date("2022-12-31")}
        values={[
          { date: "2022-03-01", count: 1 },
          { date: "2022-03-04", count: 2 },
          { date: "2022-03-07", count: 3 },
          { date: "2022-03-12", count: 4 },
          { date: "2022-03-18", count: 5 },
          { date: "2022-03-27", count: 6 },
          { date: "2022-03-30", count: 7 },

          // ...and so on
        ]}
        showWeekdayLabels={true}
        classForValue={(value) => {
          if (!value) {
            return "color-empty";
          }
          return `color-scale-${value.count}`;
        }}
      />
    </div>
  );
}

export default ActivityLevelTracker;
