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
import { useDropzone } from "../../hooks/customHooks";

const TaskCard = ({
  task,
  index,
  project_changed,
  project,
  columnId,
  show_taskcard_context_menu,
  shouldShow,
  currentUser,
}) => {
  const [showContextMenu, setShowContextMenu] = React.useState(false);
  const [showExtra, setShowExtra] = React.useState(false);
  const [title, setTitle] = React.useState(task.name);
  const taskNameInput = React.useRef(null);

  const [value, setValue] = React.useState("");
  const dropzoneRef = React.useRef(null);
  const [isFilesDragging] = useDropzone(dropzoneRef, updateTaskUrl);

  function updateTaskUrl(url) {
    setValue(task.name);
    console.log(value);
    const updatedProject = {
      ...project,
      tasks: {
        ...project.tasks,
        [task.id]: {
          // todo - fixed state issue
          ...project.tasks[task.id],
          attachments: [url],
        },
      },
    };

    project_changed(updatedProject);
  }

  //region - old
  React.useEffect(() => {
    if (shouldShow === false) {
      setShowContextMenu(shouldShow);
    }
  }, [shouldShow]);

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      setTitle(e.target.value);
      e.target.blur();
      updateProject();
    }

    if (e.key === "Escape") {
      setTitle("");
      updateProject();
    }
  }

  function handleTaskNameInputKeyDown(e) {
    if (e.key === "Enter") {
      taskNameInput.current.blur();
      setTitle(e.target.value);
      updateProject();
    }

    if (e.key === "Escape") {
      setTitle(value);
      e.target.value = value;
      taskNameInput.current.blur();
      updateProject();
    }
  }

  function handleBlur(e) {
    setTitle(e.target.value);
    if (!value) {
      updateProject();
    }
  }

  const updateProject = () => {
    if (title) {
      // save it to project
      const newTask = {
        ...task,
        name: title,
        authorId: currentUser.id,
        isCompleted: false,
      };

      const updatedProject = {
        ...project,
        tasks: {
          ...project.tasks,
          [task.id]: {
            ...project.tasks[task.Id],
            ...newTask,
          },
        },
      };

      project_changed(updatedProject);
    } else {
      //  empty value, remove the current task

      // delete project.tasks[task.id];
      if (!value) {
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

  function handleFocus(event) {
    taskNameInput.current.select();
    setTitle(event.target.value);
    setValue(event.target.value);
  }

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
              {task.name && task.name !== "" ? (
                <textarea
                  className={"name"}
                  value={title}
                  ref={taskNameInput}
                  onChange={(e) => setTitle(e.target.value)}
                  onBlur={(event) => handleBlur(event)}
                  onKeyDown={(e) => handleTaskNameInputKeyDown(e)}
                  onFocus={(event) => handleFocus(event)}
                />
              ) : (
                <textarea
                  className={"new-task-input"}
                  autoFocus
                  onKeyDown={(e) => handleKeyDown(e)}
                  onBlur={(event) => handleBlur(event)}
                  onChange={(e) => setTitle(e.target.value)}
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
    currentUser: state.user,
  };
};

export default connect(mapStateToProps, {
  project_changed,
  show_taskcard_context_menu,
})(TaskCard);
