import React, { useState } from "react";
import Calendar from "@ericz1803/react-google-calendar";

function EmbeddedGoogleCalendar(props) {
  const API_KEY = "AIzaSyBmvP3elWIMSZ_l23jf6GVusE44ZdotAa8";
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
