import React, { useEffect, useRef, useState } from "react";
import "./BoardColumn.css";
import { Draggable } from "react-beautiful-dnd";
import AddBoardTaskButton from "../Kanban-AddBoardTaskButton/AddBoardTaskButton";
import { connect } from "react-redux";
import { project_changed, show_column_popup } from "../../actions";

const BoardColumn = ({
  column,
  index,
  children,
  show_column_popup,
  project,
  project_changed,
}) => {
  const [shouldHighlighted, setShouldHighlighted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const inputElement = useRef(null);

  const [value, setValue] = useState(column.title);

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.select();
      inputElement.current.focus();
    }
  }, [isEditing]);

  let showPopup = (e) => {
    const anchor = {
      x: e.target.offsetLeft,
      y: e.target.offsetTop,
      width: e.target.clientWidth,
      height: e.target.clientHeight,
    };

    show_column_popup({ anchor: anchor, column: column });
  };

  function handleColumnNameChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const title = e.currentTarget["board-column-title"].value;
    const updatedProject = {
      ...project,
      columns: {
        ...project.columns,
        [column.id]: {
          ...project.columns[column.id],
          title: title,
        },
      },
    };

    project_changed(updatedProject);

    setIsEditing(false);
  }

  function handleKeyDown(e) {
    if (e.key === "Escape") {
      setIsEditing(false);
    }
  }

  return (
    <Draggable draggableId={column.id} index={index} type={"column"}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          ref={provided.innerRef}
          className={`board-column ${
            shouldHighlighted && "board-column--hovered"
          } ${snapshot.isDragging && "board-column--isDragging"}`}
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
                  onClick={(e) => showPopup(e)}
                >
                  more_horiz
                </span>
              </>
            ) : (
              <form onSubmit={(e) => handleSubmit(e)}>
                <input
                  type="text"
                  ref={inputElement}
                  id={"board-column-title"}
                  value={value}
                  onBlur={() => setIsEditing(false)}
                  onChange={handleColumnNameChange}
                  onKeyDown={handleKeyDown}
                />
              </form>
            )}
          </div>

          <AddBoardTaskButton column={column} />
          {children}
        </div>
      )}
    </Draggable>
  );
};
const mapStateToProps = (state) => {
  return {
    ui_column_popup: {
      shouldShow: state.app.ui_column_popup.shouldShow,
      anchor: state.app.ui_column_popup.anchor,
    },
    project: state.project,
  };
};
export default connect(mapStateToProps, { show_column_popup, project_changed })(
  BoardColumn
);
