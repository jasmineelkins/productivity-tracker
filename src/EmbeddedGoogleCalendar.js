import React from "react";
import { Link } from "react-router-dom";
import Calendar from "@ericz1803/react-google-calendar";
import { useNavigate } from "react-router-dom";
import { FiMaximize2, FiChevronsLeft } from "react-icons/fi";

function EmbeddedGoogleCalendar(props) {
  const API_KEY = "AIzaSyADFKnovFgJCG6Mm0qt4YWNEXhZ5ainNmA";
  let calendars = [
    {
      calendarId: "c_5j1n89dvsl8729eakhilr78d0o@group.calendar.google.com",
      color: "#333",
    },
    {
      calendarId: "YOUR_CALENDAR_ID_2",
      color: "white", //optional, specify color of calendar 2 events
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="googleCalendarContainer">
      <button onClick={() => navigate(-1)} className="btn return">
        <FiChevronsLeft />
      </button>
      <div className="googleCalendar">
        <Calendar apiKey={API_KEY} calendars={calendars} />
      </div>
    </div>
  );
}

export default EmbeddedGoogleCalendar;
