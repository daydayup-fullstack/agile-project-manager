import React from "react";
import "./TaskListItem.css";
import CircularButton from "../CircularButton/CircularButton";

const TaskListItem = ({ task }) => {
  return (
    <>
      <li className={"TaskListItem"}>
        <div className="TaskListItem__info">
          <span className={"material-icons handle"}>drag_handle</span>
          <span className={"material-icons doneIcon"}>
            {task.content.isCompleted ? `check_circle` : `check_circle_outline`}
          </span>
          <span className={"name"}>{task.content.name}</span>
        </div>

        <div className={"TaskListItem__actions"}>
          <div className="dueDateAndPerson">
            <CircularButton
              iconName={"calendar_today"}
              onCircularButtonClick={() => {}}
            />
            <CircularButton
              iconName={"person_outline"}
              onCircularButtonClick={() => {}}
            />
          </div>
          <span className={"material-icons arrow"}>chevron_right</span>
        </div>
      </li>
    </>
  );
};

export default TaskListItem;
