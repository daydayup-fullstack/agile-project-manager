import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import "./Kanban.css";
import BoardColumn from "../Kanban-BoardColumn/BoardColumn";
import TaskCardList from "../Kanban-TaskCardList/TaskCardList";
import AddNewColumn from "../Kanban-AddNewColumn/AddNewColumn";
import { connect } from "react-redux";
import { project_changed } from "../../actions";

const Kanban = ({ project, project_changed }) => {
  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    if (type === "column") {
      const newColumnOrder = Array.from(project.columnOrder);

      newColumnOrder.splice(source.index, 1); // remove previous location
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...project,
        columnOrder: newColumnOrder,
      };

      project_changed(newState);
    }

    if (type === "task") {
      // same column
      if (destination.droppableId === source.droppableId) {
        const column = project.columns[source.droppableId];
        const newTaskIds = Array.from(column.taskIds);

        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);

        const newColumn = {
          ...column,
          taskIds: newTaskIds,
        };

        const newState = {
          ...project,
          columns: {
            ...project.columns,
            [newColumn.id]: newColumn,
          },
        };

        project_changed(newState);
        return;
      }

      const start = project.columns[source.droppableId];
      const finish = project.columns[destination.droppableId];
      const startTaskIds = Array.from(start.taskIds);
      const finishTaskIds = Array.from(finish.taskIds);

      startTaskIds.splice(source.index, 1);
      finishTaskIds.splice(destination.index, 0, draggableId);

      const updatedStart = {
        ...start,
        taskIds: startTaskIds,
      };

      const updatedFinish = {
        ...finish,
        taskIds: finishTaskIds,
      };

      const newState = {
        ...project,
        columns: {
          ...project.columns,
          [updatedStart.id]: updatedStart,
          [updatedFinish.id]: updatedFinish,
        },
      };

      project_changed(newState);
    }
  };

  let renderColumns = () => {
    if (project.columnOrder) {
      return project.columnOrder.map((columnId, index) => (
        <BoardColumn
          key={columnId}
          column={project.columns[columnId]}
          index={index}
        >
          {
            <TaskCardList
              tasks={project.columns[columnId].taskIds.map(
                (taskId) => project.tasks[taskId]
              )}
              columnId={columnId}
            />
          }
        </BoardColumn>
      ));
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable
        droppableId={project.id}
        direction={"horizontal"}
        type={"column"}
      >
        {(provided) => (
          <div
            className={"kanban"}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {renderColumns()}
            {provided.placeholder}
            <AddNewColumn />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

const mapStateToProps = (state) => {
  console.log(state.project);
  return {
    project: state.project,
  };
};

export default connect(mapStateToProps, { project_changed })(Kanban);
