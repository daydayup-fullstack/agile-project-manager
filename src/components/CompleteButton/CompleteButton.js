import React from "react";
import "./CompleteButton.css";

const CompleteButton = ({completed, onClick}) => {
  function handleClick(e) {
    onClick(e);
  }

  return (
      <button
          className={`complete-button ${completed && "completed"}`}
          onClick={(e) => handleClick(e)}
      >
        <div className="content">
          <span className="material-icons">check</span>
          {!completed ? "mark completed" : "completed"}
        </div>
      </button>
  );
};

export default CompleteButton;
