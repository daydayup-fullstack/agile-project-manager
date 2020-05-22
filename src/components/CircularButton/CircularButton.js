import React from "react";
import "./CircularButton.css";

const CircularButton = ({iconName, onCircularButtonClick}) => {

  return (
    <div className="circularButton" onClick={onCircularButtonClick}>
      <div className="material-icons icon">{iconName}</div>
    </div>
  );
};

export default CircularButton;
