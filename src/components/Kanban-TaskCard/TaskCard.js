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
import { handleUpload, useDropzone } from "../../hooks/customHooks";

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
  const [isEditingTitle, setIsEditingTitle] = React.useState(false);
  const uploadFilesRef = React.useRef(null);

  const [originalTitle, setOriginalTitle] = React.useState("");
  const dropzoneRef = React.useRef(null);
  const [isFilesDragging] = useDropzone(dropzoneRef, updateTaskUrl);

  function updateTaskUrl(url) {
    const updatedProject = {
      ...project,
      tasks: {
        ...project.tasks,
        [task.id]: {
          ...project.tasks[task.id],
          attachments: [url, ...project.tasks[task.id].attachments],
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
      updateProject(e);
    }

    if (e.key === "Escape") {
      e.target.value = "";
      e.target.blur();
      updateProject(e);
    }
  }

  function handleTaskNameInputKeyDown(e) {
    if (e.key === "Enter") {
      if (!e.target.value) {
        e.target.value = "Untitled";
      }
      taskNameInput.current.blur();
      setTitle(e.target.value);
      updateProject(e);
    }

    if (e.key === "Escape") {
      setTitle(originalTitle);
      e.target.value = originalTitle;
      taskNameInput.current.blur();
      updateProject(e);
    }
  }

  function handleBlur(e) {
    setTitle(e.target.value);
    updateProject(e);
    setIsEditingTitle(false);
  }

  const updateProject = (e) => {
    if (e.target.value) {
      // save it to project
      const newTask = {
        ...task,
        name: e.target.value,
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

      if (!originalTitle) {
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
          tasks: {
            ...project.tasks,
            [task.id]: undefined,
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
    setOriginalTitle(event.target.value);
  }

  function renderTextarea() {
    if (!task.name) {
      return (
        <textarea
          className={"new-task-input"}
          autoFocus
          onKeyDown={(e) => handleKeyDown(e)}
          onBlur={(event) => handleBlur(event)}
          onChange={(e) => setTitle(e.target.value)}
        />
      );
    } else {
      return (
        <textarea
          className={"name"}
          value={title}
          ref={taskNameInput}
          autoFocus={isEditingTitle}
          onChange={(e) => setTitle(e.target.value)}
          onBlur={(event) => handleBlur(event)}
          onKeyDown={(e) => handleTaskNameInputKeyDown(e)}
          onFocus={(event) => handleFocus(event)}
        />
      );
    }
  }

  function handleFiles(event) {
    const files = [...event.target.files];
    handleUpload(files).then((url) => {
      updateTaskUrl(url);
    });
  }

  function showUpload(e) {
    uploadFilesRef.current.click();
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

                <div
                  className={`taskCard__top__right ${
                    task.isCompleted && "taskCard--completed"
                  }`}
                >
                  <input
                    ref={uploadFilesRef}
                    type="file"
                    className={"fileUpload"}
                    multiple
                    onChange={(event) => handleFiles(event)}
                  />
                  {!isEditingTitle && showExtra && (
                    <>
                      <span
                        className={"material-icons"}
                        onClick={(event) => showUpload(event)}
                      >
                        insert_photo
                      </span>
                      <span
                        className={"material-icons"}
                        onClick={(event) => {
                          setIsEditingTitle(true);
                          taskNameInput.current.select();
                          taskNameInput.current.focus();
                        }}
                      >
                        edit
                      </span>
                    </>
                  )}

                  {isEditingTitle && (
                    <span
                      className={"material-icons"}
                      onClick={() => {
                        setIsEditingTitle(false);
                        taskNameInput.current.blur();
                      }}
                    >
                      close
                    </span>
                  )}
                </div>
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
              {renderTextarea()}
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
