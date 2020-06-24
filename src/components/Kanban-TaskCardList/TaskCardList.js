import { Droppable } from "react-beautiful-dnd";
import React from "react";
import "./TaskCardList.css";
import TaskCard from "../Kanban-TaskCard/TaskCard";

const TaskCardList = ({ tasks, columnId }) => {
  const filterTasks = tasks.filter(task => task!==undefined)
  return (
    <Droppable droppableId={columnId} type={"task"}>
      {(provided) => (
        <div
          className={`taskCardList ${filterTasks.length === 0 && "empty"}`}
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {filterTasks.map((task, index) => (
            <TaskCard
              task={task}
              index={index}
              key={task.id}
              columnId={columnId}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TaskCardList;
