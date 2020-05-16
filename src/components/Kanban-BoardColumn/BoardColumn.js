import React, { useEffect, useRef, useState } from "react";
import "./BoardColumn.css";
import { Draggable } from "react-beautiful-dnd";
import AddBoardTaskButton from "../Kanban-AddBoardTaskButton/AddBoardTaskButton";

const BoardColumn = ({ column, index, children }) => {
  const [shouldHighlighted, setShouldHighlighted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const inputElement = useRef(null);

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.select();
      inputElement.current.focus();
    }
  }, [isEditing]);

  return (
    <Draggable draggableId={column.id} index={index} type={"column"}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          ref={provided.innerRef}
          className={`board-column ${
            shouldHighlighted && "board-column--hovered"
          } ${snapshot.isDragging && "board-column--isDragging"}`}
          onClick={() => isEditing && setIsEditing(false)}
        >
          <div
            className="header"
            {...provided.dragHandleProps}
            onMouseEnter={() => setShouldHighlighted(true)}
            onMouseLeave={() => setShouldHighlighted(false)}
          >
            {!isEditing ? (
              <>
                <span className={"title"} onClick={() => setIsEditing(true)}>
                  {column.title}
                </span>
                <span
                  className={"material-icons button"}
                  onClick={() => {}}
                >
                  more_horiz
                </span>
              </>
            ) : (
              <form>
                <input type="text" ref={inputElement} value={column.title} />
              </form>
            )}
          </div>

          <AddBoardTaskButton />
          {children}
        </div>
      )}
    </Draggable>
  );
};

export default BoardColumn;
