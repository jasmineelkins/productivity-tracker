import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { useNavigate } from "react-router-dom";
import { FiMaximize2, FiChevronsLeft } from "react-icons/fi";

function Heatmap({ completedTasks }) {
  // 1. count how many items are in the completedTaskList
  // let numberOfCompletedTasks = completedTaskList.length();
  console.log("Completed Tasks: ", completedTasks);
  const [heatMap, setHeatMap] = useState([]);

  useEffect(() => {
    let res = completedTasks.reduce(function (obj, v) {
      obj[v.date] = (obj[v.date] || 0) + 1;
      return obj;
    }, {});
    setHeatMap(res);
  }, [completedTasks]);

  console.log(heatMap);

  function groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
      let key = obj[property];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
  }

  let heatMapObj = groupBy(completedTasks, "date");
  console.log("heatmapobj", heatMapObj);

  const heatMapArray = Object.keys(heatMapObj).map((obj) => ({
    date: obj,
    count: heatMapObj[obj].length,
  }));
  console.log(heatMapArray);

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

  return (
    <div className="heatmapContainer item6">
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
        values={heatMapArray}
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

export default Heatmap;
