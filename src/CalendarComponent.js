import React, { useState } from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar/dist/umd/Calendar";
import "./CalendarStyle.css";

function CalendarComponent(props) {
  const [date, setDate] = useState(new Date());

  return (
    <div className="griditem item3">
      <div className="calendarContainer">
        <Link to="google-calendar">+</Link>
        <Calendar onChange={setDate} value={date} selectRange={true} />
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
  );
}

export default CalendarComponent;
