import React from "react";
import "./TaskCard.css";
import { Draggable } from "react-beautiful-dnd";
import { connect } from "react-redux";
import { project_changed, show_taskcard_context_menu } from "../../actions";
import CoverPhotoBlock from "../CoverPhotoBlock/CoverPhotoBlock";
import CircularButton from "../CircularButton/CircularButton";
import Profile from "../Profile/Profile";
import { db_users } from "../../data/database";
import DateDisplay from "../DateDisplay/DateDisplay";
import CompleteButton from "../CompleteButton/CompleteButton";
import { useDropzone } from "../Dropzone/Dropzone";

const TaskCard = ({
  task,
  index,
  project_changed,
  project,
  columnId,
  show_taskcard_context_menu,
  shouldShow,
}) => {
  const [showContextMenu, setShowContextMenu] = React.useState(false);
  const [showExtra, setShowExtra] = React.useState(false);
  const [taskName, setTaskName] = React.useState(task.name);
  const taskNameInput = React.useRef(null);

  const dropzoneRef = React.useRef(null);
  const [isFilesDragging] = useDropzone(dropzoneRef);

  //region - old
  React.useEffect(() => {
    if (shouldShow === false) {
      setShowContextMenu(shouldShow);
    }
  }, [shouldShow]);

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      updateProject(e);
    }

    if (e.key === "Escape") {
      e.target.value = "";
      updateProject(e);
    }
  }

  function handleTaskNameInputKeyDown(e) {
    if (e.key === "Enter" || e.key === "Escape") {
      taskNameInput.current.blur();
      updateProject(e);
    }
  }

  function handleBlur(e) {
    updateProject(e);
  }

  const updateProject = (e) => {
    if (e.target.value) {
      // save it to project
      const newTask = {
        ...task,
        name: e.target.value,
      };

      const updatedProject = {
        ...project,
        tasks: {
          ...project.tasks,
          [task.id]: newTask,
        },
      };

      project_changed(updatedProject);
    } else {
      //  empty value, remove the current task

      // delete project.tasks[task.id];

      delete project.tasks[task.id];

      const updatedProject = {
        ...project,
        columns: {
          ...project.columns,
          [columnId]: {
            ...project.columns[columnId],
            taskIds: [
              ...project.columns[columnId].taskIds.filter(
                (id) => id !== task.id
              ),
            ],
          },
        },
      };

      project_changed(updatedProject);
    }
  };

  function handleRightClick(e) {
    e.preventDefault();
    e.stopPropagation();

    setShowContextMenu(true);

    show_taskcard_context_menu({
      anchor: {
        x: e.clientX,
        y: e.clientY,
        width: e.currentTarget.clientWidth,
        height: e.currentTarget.clientHeight,
      },
      task: task,
      columnId: columnId,
      project: project,
    });
  }

  const renderUserProfile = () => {
    if (task.assignedUserId && task.assignedUserId !== "") {
      return (
        <>
          <Profile user={db_users[task.assignedUserId]} />
        </>
      );
    } else {
      if (showExtra || task.dueDate) {
        return (
          <CircularButton
            iconName={"person_outline"}
            onCircularButtonClick={() => {}}
          />
        );
      }
    }
  };

  const renderDueDate = () => {
    if (task.dueDate) {
      return <DateDisplay date={task.dueDate} />;
    } else {
      if (showExtra) {
        return (
          <CircularButton
            iconName={"calendar_today"}
            onCircularButtonClick={() => {}}
          />
        );
      }
    }
  };

  function handleMouseover(e) {
    setShowExtra(true);
  }

  function handleMouseleave(e) {
    setShowExtra(false);
  }

  let toggleCompleted = () => {
    const updatedProject = {
      ...project,
      tasks: {
        ...project.tasks,
        [task.id]: {
          ...project.tasks[task.id],
          isCompleted: !task.isCompleted,
        },
      },
    };

    project_changed(updatedProject);
  };

  //endregion

  return (
    <Draggable draggableId={task.id} type={"task"} index={index}>
      {(provided) => (
        <div
          className={`taskCard ${showContextMenu && "taskCard--highlighted"}`}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          onContextMenu={(event) => handleRightClick(event)}
          onMouseOver={(e) => handleMouseover(e)}
          onMouseLeave={(e) => handleMouseleave(e)}
          // style={task.isCompleted ? { opacity: "0.5" } : {}}
        >
          <div className="taskCard--dropzone" ref={dropzoneRef}>
            {task.name && task.name !== "" && (
              <div className="taskCard__top">
                <CompleteButton
                  completed={task.isCompleted}
                  onClick={toggleCompleted}
                />
              </div>
            )}

            {task.attachments && task.attachments.length > 0 ? (
              <div
                className={`coverImage  ${
                  task.isCompleted && "taskCard--completed"
                }`}
              >
                <CoverPhotoBlock imageUrl={task.attachments[0]} />
              </div>
            ) : (
              <div
                className={`uploadArea ${
                  isFilesDragging && "uploadArea--show"
                }`}
              >
                <span className={"material-icons"}>add</span>
              </div>
            )}
            <div
              className={`content ${task.isCompleted && "taskCard--completed"}`}
            >
              {task.name ? (
                <input
                  className={"name"}
                  value={taskName}
                  ref={taskNameInput}
                  onChange={(e) => setTaskName(e.target.value)}
                  onBlur={(event) => handleBlur(event)}
                  onKeyDown={(e) => handleTaskNameInputKeyDown(e)}
                />
              ) : (
                <textarea
                  className={"new-task-input"}
                  autoFocus
                  onKeyDown={(e) => handleKeyDown(e)}
                  onBlur={(event) => handleBlur(event)}
                  onChange={(e) => setTaskName(e.target.value)}
                />
              )}
            </div>

            {task.name && task.name !== "" && (
              <div
                className={`extra ${task.isCompleted && "taskCard--completed"}`}
              >
                <div className="actions">
                  <ul>
                    <li className={"button"}>{renderUserProfile()}</li>
                    <li className={"button"}>{renderDueDate()}</li>
                  </ul>
                </div>
                {/*<div className="info">*/}
                {/*  <ul>*/}
                {/*    {task.likedBy && task.likedBy.length > 0 && (*/}
                {/*      <li>*/}
                {/*        <span className={"numberOfLikes"}>*/}
                {/*          {task.likedBy.length}*/}
                {/*        </span>*/}
                {/*        <span className={"material-icons"}>thumb_up</span>*/}
                {/*      </li>*/}
                {/*    )}*/}
                {/*  </ul>*/}
                {/*</div>*/}
              </div>
            )}
          </div>
        </div>
      )}
    </Draggable>
  );
};

const mapStateToProps = (state) => {
  return {
    project: state.project,
    shouldShow: state.app.ui_taskcard_context_menu.shouldShow,
  };
};

export default connect(mapStateToProps, {
  project_changed,
  show_taskcard_context_menu,
})(TaskCard);
