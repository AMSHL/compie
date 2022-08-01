import React from "react";

export const SideBar = ({ scoreHistory, handleBackButton }) =>
  <div className="sidebar">
    <button onClick={()=>handleBackButton()}>Back</button>
    <h3>Socre history:</h3>
    <ul>
      {scoreHistory?.length > 0 && scoreHistory.map(({ name, score, time }, index) =>
        <li key={index}>{`${name} - ${score}`}<br />{time}</li>
      )}
    </ul>
  </div>
