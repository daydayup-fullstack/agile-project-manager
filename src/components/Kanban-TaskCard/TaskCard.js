import React from "react";
import "./TaskCard.css";
import { Draggable } from "react-beautiful-dnd";
import { connect } from "react-redux";
import { project_changed } from "../../actions";
import CoverPhotoBlock from "../CoverPhotoBlock/CoverPhotoBlock";

const TaskCard = ({ task, index, project_changed, project, columnId }) => {
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      updateProject(e);
    }

    if (e.key === "Escape") {
      e.target.value = "";
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

  return (
    <Draggable draggableId={task.id} type={"task"} index={index}>
      {(provided) => (
        <div
          className={"taskCard"}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {task.attachments && task.attachments.length > 0 && (
            <div className="coverImage">
              <CoverPhotoBlock imageUrl={task.attachments[0]} />
            </div>
          )}
          <div className="content">
            {task.name ? (
              <div className={"name"}>{task.name}</div>
            ) : (
              <textarea
                className={"new-task-input"}
                autoFocus
                onKeyDown={(e) => handleKeyDown(e)}
                onBlur={(event) => handleBlur(event)}
              />
            )}

            {task.name && (
              <button>
                <span className={"material-icons more"}>more_horiz</span>
              </button>
            )}
          </div>

          {task.name && (
            <div className="extra">
              <div className="actions">
                <ul>
                  <li>
                    <div className="button">a</div>
                  </li>
                  <li>
                    <div className="button">b</div>
                  </li>
                </ul>
              </div>
              <div className="info">
                <ul>
                  <li>
                    <span>1</span>
                    <span className={"material-icons"}>perm_identity</span>
                  </li>
                  {/*/!*TODO - Unknown style conflict to be fixed when integrate components*!/*/}
                  {/*<li>*/}
                  {/*  <span className={"material-icons"}>calender_today</span>*/}
                  {/*</li>*/}
                  <li>
                    <span>2</span>
                    <span className={"material-icons"}>call_split</span>
                  </li>
                  <li>
                    <span>3</span>
                    <span className={"material-icons"}>thumb_up_alt</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      )}
    </Draggable>
  );
};

const mapStateToProps = (state) => {
  return {
    project: state.project,
  };
};

export default connect(mapStateToProps, { project_changed })(TaskCard);
