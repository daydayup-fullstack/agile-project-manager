import React from "react";
import "./MenuBar.css";
import Profile from "../Profile/Profile";
import { connect } from "react-redux";
import {
  add_project_star,
  changeNewTaskDisplay,
  open_app_drawer,
  project_changed,
  remove_project_star,
  show_header_profile_popup,
  show_header_projectIcon_popup,
  show_header_projectInfo_popup,
} from "../../actions";
import { colors, iconNames } from "../../model/model";
import Filterbar from "../Filterbar/Filterbar";

const MenuBar = ({
  shouldOpen,
  open_app_drawer,
  currentProject,
  currentUser,
  add_project_star,
  remove_project_star,
  show_header_projectIcon_popup,
  show_header_profile_popup,
  project_changed,
}) => {
  const [starHover, setStarHover] = React.useState(false);
  const [projectTitle, setProjectTitle] = React.useState("");
  const titleInput = React.useRef(null);

  React.useEffect(() => {
    setProjectTitle(currentProject.name);
  }, [currentProject]);

  const starred = currentUser.starredProjects.indexOf(currentProject.id) >= 0;
  const starStyle = () => {
    const themeColor = { color: colors[currentProject.colorIndex] };
    if (starred) {
      return { ...themeColor };
    } else {
      if (starHover) {
        return { ...themeColor };
      }
    }
  };

  function toggleStar() {
    if (starred) {
      remove_project_star(currentProject);
    } else {
      add_project_star(currentProject);
    }
  }

  const getAnchor = (e) => {
    return {
      anchor: {
        x: e.target.offsetLeft - 4,
        y: e.target.offsetTop + e.target.clientHeight / 2 + 6,
        width: e.target.clientWidth,
        height: e.target.clientHeight,
      },
    };
  };

  const getAnchorForProfile = (e) => {
    return {
      anchor: {
        x: e.target.offsetLeft + 2,
        y: e.target.offsetTop + e.target.clientHeight / 2,
        width: e.target.clientWidth,
        height: e.target.clientHeight,
      },
    };
  };

  function updateProject(e) {
    const newProject = {
      ...currentProject,
      name: e.target.value,
    };

    project_changed(newProject);
  }

  function handleBlur(e) {
    updateProject(e);
  }

  function handleFocus(e) {
    e.target.select();
  }

  function handleKeyDown(e) {
    e.preventDefault();
    if (e.key === "Enter") {
      updateProject(e);
      e.target.blur();
    }

    if (e.key === "Escape") {
      console.log("should blur");
      e.target.value = currentProject.name;
      e.target.blur();
    }
  }

  function handleChange(e) {
    setProjectTitle(e.target.value);
  }

  return (
    <>
      <div className={"MenuBar"}>
        <div className="MenuBar__title">
          {!shouldOpen && (
            <span className={"material-icons icon"} onClick={open_app_drawer}>
              menu
            </span>
          )}

          <div
            className="MenuBar__title__project-icon"
            onClick={(e) => show_header_projectIcon_popup(getAnchor(e))}
          >
            <div
              className="card"
              style={{ background: colors[currentProject.colorIndex] }}
            >
              <span className={"material-icons-two-tone themeIcon"}>
                {iconNames[currentProject.iconIndex]}
              </span>
            </div>
          </div>

          <input
            className={"title"}
            value={projectTitle || ""}
            onChange={(e) => handleChange(e)}
            ref={titleInput}
            onBlur={(event) => handleBlur(event)}
            onFocus={(event) => handleFocus(event)}
            onKeyDown={(event) => handleKeyDown(event)}
          />

          <div className="iconGroup">
            {/*<span*/}
            {/*  className="material-icons icon"*/}
            {/*  onClick={(e) => show_header_projectInfo_popup(getAnchor(e))}*/}
            {/*>*/}
            {/*  keyboard_arrow_down*/}
            {/*</span>*/}
            {/*<span className="material-icons-outlined icon">info</span>*/}
            <span
              className={"material-icons star"}
              onMouseOver={() => setStarHover(true)}
              onMouseLeave={() => setStarHover(false)}
              onClick={toggleStar}
              style={starStyle()}
            >
              {starred ? "star" : "star_border"}
            </span>
          </div>
        </div>
        <div className={"MenuBar__more-content"}>
          {/*{workspace.type === "team" && (*/}
          {/*  <div className="MultipleUserProfile">*/}
          {/*    <MultipleUserProfile*/}
          {/*      multipleUsers={workspace.members.map((id) => db_users[id])}*/}
          {/*      projectName={"DayDayUp"}*/}
          {/*    />*/}
          {/*  </div>*/}
          {/*)}*/}
          <ul className={"userSection"}>
            {/*<li>*/}
            {/*  <AddButtonCircular*/}
            {/*    onHandleClick={() => setShouldShowTooltip(!shouldShowTooltip)}*/}
            {/*  />*/}
            {/*</li>*/}

            <li
              onClick={(e) => show_header_profile_popup(getAnchorForProfile(e))}
            >
              <Profile user={currentUser} />
            </li>
          </ul>
        </div>
      </div>
      <Filterbar />
    </>
  );
};

function mapStateToProps(state) {
  return {
    newTaskDisplay: state.taskDisplay.newTaskDisplay,
    shouldOpen: state.app.ui_drawer.shouldOpen,
    currentProject: state.project,
    currentUser: state.user,
    workspace: state.workspace,
  };
}

export default connect(mapStateToProps, {
  changeNewTaskDisplay,
  open_app_drawer,
  add_project_star,
  remove_project_star,
  show_header_projectIcon_popup,
  show_header_profile_popup,
  show_header_projectInfo_popup,
  project_changed,
})(MenuBar);
