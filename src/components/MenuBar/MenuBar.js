import React, { useState } from "react";
import "./MenuBar.css";
import Profile from "../Profile/Profile";

import AddButtonCircular from "../AddButtonCircular/AddButtonCircular";
import { db_users } from "../../data/database";
import { connect } from "react-redux";
import {
  add_project_star,
  changeNewTaskDisplay,
  open_app_drawer,
  remove_project_star,
  show_header_profile_popup,
  show_header_projectIcon_popup,
  show_header_projectInfo_popup,
} from "../../actions";
import Filterbar from "../Filterbar/Filterbar";
import { colors, iconNames } from "../../model/model";
import MultipleUserProfile from "../MultipleUserProfile/MultipleUserProfile";

const MenuBar = ({
  shouldOpen,
  open_app_drawer,
  currentProject,
  currentUser,
  add_project_star,
  remove_project_star,
  show_header_projectIcon_popup,
  show_header_profile_popup,
  show_header_projectInfo_popup,
  workspace,
}) => {
  const [shouldShowTooltip, setShouldShowTooltip] = useState(false);
  const [starHover, setStarHover] = React.useState(false);

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

          <h2>{currentProject.name}</h2>

          <div className="iconGroup">
            <span
              className="material-icons icon"
              onClick={(e) => show_header_projectInfo_popup(getAnchor(e))}
            >
              keyboard_arrow_down
            </span>
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
          {workspace.type === "team" && (
            <div className="MultipleUserProfile">
              <MultipleUserProfile
                multipleUsers={workspace.members.map((id) => db_users[id])}
                projectName={"DayDayUp"}
              />
            </div>
          )}
          <ul className={"userSection"}>
            <li>
              <AddButtonCircular
                onHandleClick={() => setShouldShowTooltip(!shouldShowTooltip)}
              />
            </li>

            <li
              onClick={(e) => show_header_profile_popup(getAnchorForProfile(e))}
            >
              {/*todo - hardcoded data - fix this later*/}
              <Profile user={db_users["user-scott"]} />
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
})(MenuBar);
