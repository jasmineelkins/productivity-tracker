import React, { useState } from "react";

function GetDate() {
  const [currentDate, setDate] = useState(null);
  const handleDate = () => {
    let date = new Date().toLocaleDateString();
    setDate(date);
  };

  return (
    <>
      <h3>current date: {currentDate}</h3>
      <button onClick={handleDate}>Get Current date</button>
    </>
  );
}

export default GetDate;
