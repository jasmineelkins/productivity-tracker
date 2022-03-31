import React from "react";
import { Link } from "react-router-dom";
import Calendar from "@ericz1803/react-google-calendar";

function EmbeddedGoogleCalendar(props) {
  const API_KEY = "AIzaSyADFKnovFgJCG6Mm0qt4YWNEXhZ5ainNmA";
  let calendars = [
    {
      calendarId: "c_5j1n89dvsl8729eakhilr78d0o@group.calendar.google.com",
    },
    {
      calendarId: "YOUR_CALENDAR_ID_2",
      color: "#B241D1", //optional, specify color of calendar 2 events
    },
  ];

  return (
    <div>
      <Calendar apiKey={API_KEY} calendars={calendars} />
    </div>
  );
}

export default EmbeddedGoogleCalendar;
