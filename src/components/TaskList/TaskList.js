import React from "react";
import "./TaskList.css";

const TaskList = ({ children }) => {
  return (
    <div className={"taskList"}>
      <ul>{children}</ul>
    </div>
  );
};

export default TaskList;
