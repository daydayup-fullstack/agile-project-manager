import React from "react";
import "./MyTasks.css";
import TaskList from "../../components/TaskList/TaskList";
import TaskListItem from "../../components/TaskListItem/TaskListItem";

const MyTasks = ({ tasks }) => {
  return (
    <div className={"App-MyTasks"}>
      <header className={"App-MyTasks__header"}>Header</header>
      <div className="App-MyTasks__content">
        <div className="App-MyTasks__content__gutter">
          <ul>
            {tasks.map((task, index) => (
              <li>
                <span>{index + 1}</span>
              </li>
            ))}
          </ul>
        </div>
        <TaskList>
          {tasks.map((task) => {
            return <TaskListItem task={task} key={task.id} />;
          })}
        </TaskList>
      </div>
    </div>
  );
};

export default MyTasks;
