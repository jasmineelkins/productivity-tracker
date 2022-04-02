import React, { useState } from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar/dist/umd/Calendar";
import "../CalendarStyle.css";
import { useNavigate } from "react-router-dom";
import { FiMaximize2, FiChevronsLeft } from "react-icons/fi";

function CalendarComponent({ setCompletedDate }) {
  const [date, setDate] = useState(new Date());

  const navigate = useNavigate();
  const [buttonClicked, setButtonClicked] = useState(true);

  function handleClick() {
    setButtonClicked(!buttonClicked);
    navigate(-1);
  }

  function handleUpdateDate(value) {
    console.log("DATE: ", value.toISOString());
    setDate(value);
    setCompletedDate(value.toISOString());
  }

  return (
    <div className="griditem item3">
      <div className="calendarContainer">
        {buttonClicked ? (
          <button
            onClick={() => setButtonClicked(!buttonClicked)}
            className="btn link"
          >
            <Link to="google-calendar">
              <FiMaximize2 />
            </Link>
          </button>
        ) : (
          <button onClick={() => handleClick()} className="btn return">
            <FiChevronsLeft />
          </button>
        )}

        <div className="innerCalendarContainer">
          <Calendar onChange={handleUpdateDate} value={date} />
        </div>
      </div>
    </div>
  );
}

export default CalendarComponent;
