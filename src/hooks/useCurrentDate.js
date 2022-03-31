import { useState } from "react";

const useCurrentDate = () => {
  const [currentDate, setDate] = useState(null);
  const handleDate = () => {
    let date = new Date().toLocaleDateString();
    setDate(date);
  };

  return {
    currentDate,
    handleDate,
  };
};

export default useCurrentDate;
