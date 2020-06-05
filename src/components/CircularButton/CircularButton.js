import React from "react";
import "./CircularButton.css";

const CircularButton = ({ iconName, onCircularButtonClick }) => {
  return (
    <div className="circularButton" onClick={onCircularButtonClick}>
      <span className="material-icons icon">{iconName}</span>
    </div>
  );
};

export default CircularButton;
