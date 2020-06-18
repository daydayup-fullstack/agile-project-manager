import React from "react";
import "./CircularButton.css";

const CircularButton = ({ iconName, handleClick }) => {
  return (
    <div className="circularButton" onClick={handleClick}>
      <span className="material-icons icon">{iconName}</span>
    </div>
  );
};

export default CircularButton;
