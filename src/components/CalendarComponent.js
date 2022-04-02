import React, { useState } from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar/dist/umd/Calendar";
import "../CalendarStyle.css";
import { useNavigate } from "react-router-dom";
import { FiMaximize2, FiChevronsLeft } from "react-icons/fi";

function CalendarComponent({ setNewDate }) {
  const [date, setDate] = useState(new Date());

  const navigate = useNavigate();
  const [buttonClicked, setButtonClicked] = useState(true);

  function handleClick() {
    setButtonClicked(!buttonClicked);
    navigate(-1);
  }

  function handleUpdateDate(value) {
    setNewDate(value);
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
          <Calendar onChange={setDate} value={date} selectRange={true} />
          {/* {date.length > 0 ? (

        <Calendar onClickDay={(value, e) => handleUpdateDate(value)} value={date} selectRange={true} />
        {/* {date.length > 0 ? (

          <p className="text-center date-range">
            <span className="bold">Start:</span> {date[0].toDateString()}
            <br></br>
            <span className="bold">End:</span> {date[1].toDateString()}
          </p>
        ) : (
          <p className="text-center">
            <span className="bold">Default selected date:</span>{" "}
            {date.toDateString()}
          </p>
        )} */}
        </div>
      </div>
    </div>
  );
}

export default CalendarComponent;
