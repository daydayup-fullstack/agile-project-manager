import React from "react";
import "./CompleteButton.css";

const CompleteButton = ({ completed = false, onClick }) => {
  const [shouldCompleted, setShouldCompleted] = React.useState(completed);

  function handleClick(e) {
    setShouldCompleted(!shouldCompleted);
    onClick(e);
  }

  return (
    <button
      className={`complete-button ${shouldCompleted && "completed"}`}
      onClick={(e) => handleClick(e)}
    >
      <div className="content">
        <span className="material-icons">check</span>
        {!shouldCompleted ? "mark completed" : "completed"}
      </div>
    </button>
  );
};

export default CompleteButton;
