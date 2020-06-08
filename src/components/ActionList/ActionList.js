import React from "react";
import "./ActionList.css";
import ColorArray from "../ColorArray/ColorArray";
import IconArray from "../IconArray/IconArray";
import { connect } from "react-redux";
import {
  add_project_star,
  delete_project,
  project_changed,
  remove_project_star,
} from "../../actions";
import { db_workspaces } from "../../data/database";
import { generateId } from "../../model/utility";
import { Link, BrowserRouter as Router } from "react-router-dom";

const ActionList = ({
  project,
  starredProjects,
  remove_project_star,
  add_project_star,
  projectCard_popup,
  header_project_icon_popup,
  header_project_info_popup,
  header_profile_popup,
  taskcard_context_menu,
  currentWorkspace,
  workspaces,
  header_filter_popup,
  column_popup,
  project_changed,
  delete_project,
  handleLogin,
}) => {
  const expandableAction = React.useRef(null);
  const popupItself = React.useRef(null);
  const nextAction = React.useRef(null);
  const [showNextLevel, setShowNextLevel] = React.useState(false);
  const [nextAnchor, setNextAnchor] = React.useState({ x: 0, y: 0 });
  const [parentAnchor, setParentAnchor] = React.useState({ x: 0, y: 0 });
  function handleMouseOver(e) {
    setParentAnchor({
      x: e.target.offsetParent.offsetLeft,
      y: e.target.offsetParent.offsetTop,
    });
    setShowNextLevel(true);
  }

  React.useEffect(() => {
    let x;
    let y;

    x = popupItself.current.offsetLeft;
    y = popupItself.current.offsetTop;

    //todo - problem is here

    let childWidth;
    let childHeight;
    if (header_project_icon_popup.shouldShow) {
      childWidth = 268;
      childHeight = 345;
    }

    const rightEdge = window.innerWidth;
    const bottomEdge = window.innerHeight;

    const parentWidth = popupItself.current.clientWidth;
    const parentHeight = popupItself.current.clientHeight;

    let anchor = { x: 0, y: 0 };

    const visualGap_x = 100;
    const visualGap_y = 200;
    // const padding_x = 9;
    const padding_y = 5;

    if (
      parentAnchor.x + x + childWidth + parentWidth >
      rightEdge - visualGap_x
    ) {
      // x-axis - over screen
      anchor.x = x - childWidth;
    } else {
      // x-axis - within screen
      anchor.x = x + parentWidth + 1;
    }

    if (parentAnchor.y + y + parentHeight > bottomEdge - visualGap_y) {
      //y-axis - over screen
      anchor.y =
        y - padding_y - childHeight + expandableAction.current.clientHeight;
    } else {
      // y-asix - within screen
      anchor.y = y - padding_y;
    }

    setNextAnchor(anchor);
  }, [header_project_icon_popup.shouldShow, parentAnchor]);

  const calcPosition = () => {
    return { top: `${nextAnchor.y}px`, left: `${nextAnchor.x}px` };
  };

  function dismissNextLevel() {
    setShowNextLevel(false);
  }

  const Arrow = () => (
    <i className={"material-icons-outlined"}>keyboard_arrow_right</i>
  );

  // const taskCardPopup = () => {
  //   return (
  //     <ul>
  //       <li onMouseOver={dismissNextLevel}>Mark Complete</li>
  //
  //       <li onMouseOver={handleMouseOver} ref={expandableAction}>
  //         Choose cover image <Arrow />
  //       </li>
  //       <li onMouseOver={dismissNextLevel}>Copy task link</li>
  //       <li onMouseOver={dismissNextLevel}>Duplicate Task...</li>
  //       <li onMouseOver={dismissNextLevel}>Delete</li>
  //       {showNextLevel && (
  //         //missing ref
  //         <li className={"nextLevel"} style={calcPosition()} ref={nextAction}>
  //           next level
  //         </li>
  //       )}
  //     </ul>
  //   );
  // };

  const ProjectCardPopup = () => {
    // const height = 343;

    let deleteProject = () => {
      let ahead = window.confirm("Are you sure about deleting this project?");

      if (ahead) {
        delete_project(project);
      }
    };

    return (
      <ul>
        <li onMouseOver={handleMouseOver} ref={expandableAction}>
          Set Color & Icon <Arrow />
        </li>
        <li
          onMouseOver={dismissNextLevel}
          onClick={() => {
            if (starredProjects.indexOf(project.id) >= 0) {
              remove_project_star(project);
            } else {
              add_project_star(project);
            }
          }}
        >
          {starredProjects.indexOf(project.id) < 0
            ? "Add to Favorites"
            : "Remove from Favorites"}
        </li>
        {/*<li onMouseOver={dismissNextLevel}>Edit Name & Description...</li>*/}
        {/*<li onMouseOver={dismissNextLevel}>Copy Project Link</li>*/}
        <li
          onMouseOver={dismissNextLevel}
          style={{ color: "#E8384F" }}
          onClick={() => deleteProject()}
        >
          Delete Project
        </li>
        {showNextLevel && (
          <li className={"nextLevel"} style={calcPosition()} ref={nextAction}>
            <ColorArray colorIndex={project.colorIndex} />
            <IconArray
              iconIndex={project.iconIndex}
              colorIndex={project.colorIndex}
            />
          </li>
        )}
      </ul>
    );
  };

  const ProjectIconPopup = () => {
    return (
      <ul className={"ProjectIconPopup"}>
        <li className={"nextLevel"}>
          <ColorArray colorIndex={project.colorIndex} />
          <IconArray
            iconIndex={project.iconIndex}
            colorIndex={project.colorIndex}
          />
        </li>
      </ul>
    );
  };

  const ProfilePopup = () => {
    return (
      <Router>
        <div className={"ProfilePopup"}>
          <ul>
            {workspaces.map((w) => {
              return (
                <li onMouseOver={dismissNextLevel}>
                  {w === currentWorkspace.id && (
                    <span className={"material-icons ProfilePopup__current"}>
                      done
                    </span>
                  )}
                  {db_workspaces[w].type === "personal"
                    ? "Personal projects"
                    : db_workspaces[w].name}
                </li>
              );
            })}
          </ul>

          <div className="divider" />

          <ul>
            {/*<li onMouseOver={dismissNextLevel}>Settings</li>*/}
            <li
              onMouseOver={dismissNextLevel}
              onClick={() => {
                handleLogin(false);
              }}
            >
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </Router>
    );
  };

  const FilterTasks = () => {
    return (
      <ul className={"FilterTasks"}>
        <li>
          <span className="material-icons task_done">done</span>
          <span className="task_tick">
            <span>Incomplete tasks</span>
          </span>
        </li>
        <li ref={expandableAction} className={"expandableItem"}>
          <span className="complete_task">Compelte tasks</span>
        </li>
        <li>
          <span className="complete_task">All tasks</span>
        </li>
      </ul>
    );
  };

  const FilterFilter = () => {
    return (
      <div className="FilterFilter">
        <div className={"FilterFilter__title"}>Quick filters</div>
        <ul>
          <li>
            <span className="material-icons filter_person">person_outline</span>
            <span className="filter_tick">
              <span>Just my tasks</span>
            </span>
          </li>
          <li>
            <span className="material-icons filter_today">calendar_today</span>
            <span className="filter_tickweek">
              <span>Due this week</span>
            </span>
          </li>
          <li className="filter_edge">
            <span className="material-icons filter_next">redo</span>
            <span className="filter_ticknext">
              <span>Due next week</span>
            </span>
          </li>

          <li className="filter_margin">
            <span className={"material-icons filter_add"}>add</span>
            <span className="filter_end">
              <span>Custom filter</span>
            </span>
          </li>
        </ul>
      </div>
    );
  };

  const FilterSort = () => {
    return (
      <ul className="FilterSort">
        <li>
          <span className="material-icons sort_done">done</span>
          <span className="sort_tick">
            <span>None</span>
          </span>
        </li>
        <li>
          <span>
            <span className="Sort_list">Due Date</span>
          </span>
        </li>
        <li>
          <span>
            <span className="Sort_list">Assignee</span>
          </span>
        </li>
        <li>
          <span>
            <span className="Sort_list">Likes</span>
          </span>
        </li>
        <li>
          <span>
            <span className="Sort_list">Alphabetical</span>
          </span>
        </li>
      </ul>
    );
  };

  const determineContent = () => {
    if (header_filter_popup.content === "FilterTasks") {
      return <FilterTasks />;
    }

    if (header_filter_popup.content === "FilterFilter") {
      return <FilterFilter />;
    }
    if (header_filter_popup.content === "FilterSort") {
      return <FilterSort />;
    }
  };

  const TaskcardContextPopup = () => {
    const task = taskcard_context_menu.task;
    const columnId = taskcard_context_menu.columnId;
    const project = taskcard_context_menu.project;
    //
    //   function markComplete() {
    //     const updatedProject = {
    //       ...project,
    //       tasks: {
    //         ...project.tasks,
    //         [task.id]: {
    //           ...project.tasks[task.id],
    //           isCompleted: !task.isCompleted,
    //         },
    //       },
    //     };
    //
    //     project_changed(updatedProject);
    //   }

    function duplicateTask() {
      const id = generateId();
      const index = project.columns[columnId].taskIds.indexOf(task.id);
      const newTask = { ...task, id: id, createdOn: new Date().getTime() };
      const newTaskIds = [...project.columns[columnId].taskIds];
      newTaskIds.splice(index, 0, id);

      const updatedProject = {
        ...project,
        tasks: {
          ...project.tasks,
          [id]: newTask,
        },
        columns: {
          ...project.columns,
          [columnId]: {
            ...project.columns[columnId],
            taskIds: newTaskIds,
          },
        },
      };

      project_changed(updatedProject);
    }

    function copyTaskName() {
      return undefined;
    }

    function deleteTask() {
      const taskIds = project.columns[columnId].taskIds;
      const index = taskIds.indexOf(task.id);
      const newTaskIds = [...taskIds];
      newTaskIds.splice(index, 1);

      const updatedProject = {
        ...project,
        columns: {
          ...project.columns,
          [columnId]: {
            ...project.columns[columnId],
            taskIds: newTaskIds,
          },
        },
      };

      project_changed(updatedProject);
    }

    function renameTask(e) {}

    return (
      <div className="TaskcardContextPopup">
        <ul className={"TaskcardContextPopup__actions"}>
          {/*<li onClick={() => markComplete()}>*/}
          {/*  <span className={"material-icons-outlined icon"}>check_circle</span>*/}
          {/*  <span>Mark complete</span>*/}
          {/*</li>*/}
          <li onClick={(e) => renameTask(e)}>
            <span className={"material-icons-outlined icon"}>create</span>
            <span>Rename task</span>
          </li>
          {/*<li>*/}
          {/*  <span className={"material-icons-outlined icon"}>fullscreen</span>*/}
          {/*  <span>Full screen</span>*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  <span className={"material-icons-outlined icon"}>tab</span>*/}
          {/*  <span>Open in new tab</span>*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  <span className={"material-icons-outlined icon"}>link</span>*/}
          {/*  <span>Copy task link</span>*/}
          {/*</li>*/}
          <li onClick={() => duplicateTask()}>
            <span className={"material-icons-outlined icon"}>file_copy</span>
            <span>Duplicate task</span>
          </li>
        </ul>
        <ul>
          <li onClick={() => copyTaskName()}>
            <span>Copy task name</span>
          </li>
        </ul>

        <ul>
          <li onClick={() => deleteTask()}>
            <span>Delete task</span>
          </li>
        </ul>
      </div>
    );
  };

  const ColumnPopup = () => {
    // todo - fix the dispositioning effect bug after horizontal scroll

    const updateProject = (columnId) => {
      const updatedProject = {
        ...project,
        columnOrder: project.columnOrder.filter((id) => id !== columnId),
      };

      delete updatedProject.columns[columnId];

      column_popup.column.taskIds.map((taskId) => {
        delete updatedProject.tasks[taskId];
        return null;
      });

      project_changed(updatedProject);
    };
    function deleteColumn() {
      const columnId = column_popup.column.id;

      if (project.columns[columnId].taskIds.length > 0) {
        const goAhead = window.confirm(
          "This column contains other tasks, Do you really want to delete it?"
        );
        if (goAhead) updateProject(columnId);
        return;
      }

      updateProject(columnId);
    }

    return (
      <ul className={"ColumnPopup"}>
        <li onClick={deleteColumn}>Delete column</li>
      </ul>
    );
  };

  return (
    <div className={"ActionList"} ref={popupItself}>
      {column_popup.shouldShow && <ColumnPopup />}
      {projectCard_popup.shouldShow && <ProjectCardPopup />}
      {header_project_info_popup.shouldShow && <ProjectCardPopup />}
      {header_profile_popup.shouldShow && <ProfilePopup />}
      {header_project_icon_popup.shouldShow && <ProjectIconPopup />}
      {header_filter_popup.shouldShow && determineContent()}
      {taskcard_context_menu.shouldShow && <TaskcardContextPopup />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    starredProjects: state.user.starredProjects,
    project: state.project,
    projectCard_popup: {
      shouldShow: state.app.ui_projectCard_popup.shouldShow,
    },
    header_project_icon_popup: {
      shouldShow: state.app.ui_header_project_icon_popup.shouldShow,
    },
    header_project_info_popup: {
      shouldShow: state.app.ui_header_project_info_popup.shouldShow,
    },
    header_profile_popup: {
      shouldShow: state.app.ui_header_profile_popup.shouldShow,
    },
    header_filter_popup: {
      shouldShow: state.app.ui_header_filter_popup.shouldShow,
      content: state.app.ui_header_filter_popup.content,
    },
    taskcard_context_menu: {
      shouldShow: state.app.ui_taskcard_context_menu.shouldShow,
      task: state.app.ui_taskcard_context_menu.task,
      columnId: state.app.ui_taskcard_context_menu.columnId,
      project: state.app.ui_taskcard_context_menu.project,
    },
    column_popup: {
      shouldShow: state.app.ui_column_popup.shouldShow,
      column: state.app.ui_column_popup.column,
    },
    currentWorkspace: state.workspace,
    workspaces: state.user.workspaces,
  };
};

export default connect(mapStateToProps, {
  project_changed,
  remove_project_star,
  add_project_star,
  delete_project,
})(ActionList);
