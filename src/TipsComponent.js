import React, { useState } from "react";
import tipsList from "./tipsList";

function TipsComponent() {
  const randomIndex = Math.floor(Math.random() * tipsList.length);
  const randomTip = tipsList[randomIndex];
  const [tip, setTip] = useState(randomTip);

  function getNewTip() {
    setTip(randomTip);
  }
  return (
    <div className="tipsContainer item7">
      <div className="innerTipContainer">
        <span>{tip}</span>
      </div>
      <button onClick={getNewTip} class="btn random-tip">
        New Tip
      </button>
    </div>
  );
}

export default TipsComponent;
