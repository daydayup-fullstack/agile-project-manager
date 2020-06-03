import React from "react";
import "./ActionList.css";
import ColorArray from "../ColorArray/ColorArray";
import IconArray from "../IconArray/IconArray";
import { connect } from "react-redux";
import { add_project_star, remove_project_star } from "../../actions";
import { db_workspaces } from "../../data/database";

const ActionList = ({
  project,
  starredProjects,
  remove_project_star,
  add_project_star,
  projectCard_popup,
  header_project_icon_popup,
  header_project_info_popup,
  header_profile_popup,
  currentWorkspace,
  workspaces,
  header_filter_popup,
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

    const childWidth = 268;
    const childHeight = 343;

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
  }, [parentAnchor]);

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
        <li onMouseOver={dismissNextLevel}>Edit Name & Description...</li>
        <li onMouseOver={dismissNextLevel}>Copy Project Link</li>
        <li onMouseOver={dismissNextLevel}>Share</li>
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
          <li onMouseOver={dismissNextLevel}>Settings</li>
          <li onMouseOver={dismissNextLevel}>Logout</li>
        </ul>
      </div>
    );
  };

  const FilterTasks = () => {
    return (
      <div className={"FilterTasks"}>
        <ul>
          <li onMouseOver={dismissNextLevel}>
            <span className="material-icons task_done">done</span>
            <span className="task_tick">
              <h4>Incomplete tasks</h4>
            </span>
          </li>
          <li onMouseOver={handleMouseOver} ref={expandableAction}>
            <span>
              <h4 className="complete_task">Compelte tasks</h4>
            </span>{" "}
            <span className={"material-icons-outlined"}>
              keyboard_arrow_right
            </span>
          </li>
          <li onMouseOver={dismissNextLevel}>
            <span>
              <h4 className="complete_task">All tasks</h4>
            </span>
          </li>
          {showNextLevel && (
            <div className="nextLevel" style={calcPosition()} ref={nextAction}>
              <ul>
                <li onMouseOver={handleMouseOver}>All compelted tasks</li>
                <li onMouseOver={handleMouseOver}>Marked Compelte since:</li>
                <li onMouseOver={handleMouseOver}>Today</li>
                <li onMouseOver={handleMouseOver}>Yesterday</li>
                <li onMouseOver={handleMouseOver}>1 week</li>
                <li onMouseOver={handleMouseOver}>2 weeks</li>
                <li onMouseOver={handleMouseOver}>3 weeks</li>
              </ul>
            </div>
          )}
        </ul>
      </div>
    );
  };

  const FilterFilter = () => {
    return (
      <div className="FilterFilter">
        <ul>
          <li>
            <span className="filter_first">
              <h4>Quick filters</h4>
            </span>
          </li>

          <li>
            <span className="material-icons filter_person">person_outline</span>
            <span className="filter_tick">
              <h4>Just my tasks</h4>
            </span>
          </li>
          <li>
            <span className="material-icons filter_today">calendar_today</span>
            <span className="filter_tickweek">
              <h4>Due this week</h4>
            </span>
          </li>
          <li className="filter_edge">
            <span className="material-icons filter_next">redo</span>
            <span className="filter_ticknext">
              <h4>Due next week</h4>
            </span>
          </li>

          <li className="filter_margin">
            <span className={"material-icons filter_add"}>add</span>
            <span className="filter_end">
              <h4>Custom filter</h4>
            </span>
          </li>
        </ul>
      </div>
    );
  };

  const FilterSort = () => {
    return (
      <div className="FilterSort">
        <ul>
          <li>
            <span className="material-icons sort_done">done</span>
            <span className="sort_tick">
              <h4>None</h4>
            </span>
          </li>
          <li>
            <span>
              <h4 className="Sort_list">Due Date</h4>
            </span>
          </li>
          <li>
            <span>
              <h4 className="Sort_list">Assignee</h4>
            </span>
          </li>
          <li>
            <span>
              <h4 className="Sort_list">Likes</h4>
            </span>
          </li>
          <li>
            <span>
              <h4 className="Sort_list">Alphabetical</h4>
            </span>
          </li>
        </ul>
      </div>
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

  return (
    <div className={"ActionList"} ref={popupItself}>
      {projectCard_popup.shouldShow && <ProjectCardPopup />}
      {header_project_info_popup.shouldShow && <ProjectCardPopup />}
      {header_profile_popup.shouldShow && <ProfilePopup />}
      {header_project_icon_popup.shouldShow && <ProjectIconPopup />}
      {header_filter_popup.shouldShow && determineContent()}
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
    currentWorkspace: state.workspace,
    workspaces: state.user.workspaces,
  };
};

export default connect(mapStateToProps, {
  remove_project_star,
  add_project_star,
})(ActionList);
