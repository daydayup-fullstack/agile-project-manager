import React, { useEffect, useRef, useState } from "react";
import "./BoardColumn.css";
import { Draggable } from "react-beautiful-dnd";
import AddBoardTaskButton from "../Kanban-AddBoardTaskButton/AddBoardTaskButton";
import { connect } from "react-redux";
import { show_column_popup } from "../../actions";
import PopupMenu from "../PopupMenu/PopupMenu";
import ActionList from "../ActionList/ActionList";

const BoardColumn = ({ column, index, children, show_column_popup }) => {
  const [shouldHighlighted, setShouldHighlighted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const inputElement = useRef(null);

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
                  onClick={(e) => showPopup(e)}
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
  };
};
export default connect(mapStateToProps, { show_column_popup })(BoardColumn);
