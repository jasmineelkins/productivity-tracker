import React, { useState } from "react";
import Calendar from "react-calendar/dist/umd/Calendar";
import "react-calendar/dist/Calendar.css";

function CalendarComponent(props) {
  const [date, setDate] = useState(new Date());

  return (
    <div className="griditem item3">
      <div className="calendarContainer">
        <Calendar onChange={setDate} value={date} />
      </div>
      <p className="text-center">
        <span className="bold">Selected Date:</span> {date.toDateString()}
      </p>
    </div>
  );
}

export default CalendarComponent;
