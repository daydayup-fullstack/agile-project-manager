import React, { useState, useEffect } from "react";
import "./MenuBar.css";
import Profile from "../Profile/Profile";

import AddButtonCircular from "../AddButtonCircular/AddButtonCircular";
import { db_users } from "../../data/database";
import Tooltip from "../Tooltip/Tooltip";
import { connect } from "react-redux";
import {
  add_project_star,
  changeNewTaskDisplay,
  open_app_drawer,
  remove_project_star,
} from "../../actions";
import Filterbar from "../Filterbar/Filterbar";
import { colors, iconNames } from "../../model/model";
import MultipleUserProfile from "../MultipleUserProfile/MultipleUserProfile";

const MenuBar = ({
  shouldOpen,
  open_app_drawer,
  type = "project",
  currentProject,
  currentUser,
  add_project_star,
  remove_project_star,
  members,
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

  return (
    <>
      <div className={"MenuBar"}>
        <div className="MenuBar__title">
          {!shouldOpen && (
            <span className={"material-icons icon"} onClick={open_app_drawer}>
              menu
            </span>
          )}

          <div className="MenuBar__title__project-icon">
            <div
              className="card"
              style={{ background: colors[currentProject.colorIndex] }}
            >
              <div className={"material-icons-two-tone themeIcon"}>
                {iconNames[currentProject.iconIndex]}
              </div>
            </div>
          </div>

          <h2>{currentProject.name}</h2>

          <div className="iconGroup">
            <span className="material-icons icon">keyboard_arrow_down</span>
            <span className="material-icons-outlined icon">info</span>
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
          <div className="MultipleUserProfile">
            <MultipleUserProfile
              multipleUsers={[
                db_users["user-lawrence"],
                db_users["user-ollie"],
                db_users["user-scott"],
                db_users["user-sarah"],
                db_users["user-silvia"],
              ]}
              projectName={"DayDayUp"}
            />
          </div>
          <ul className={"userSection"}>
            <li>
              <AddButtonCircular
                onHandleClick={() => setShouldShowTooltip(!shouldShowTooltip)}
              />
            </li>

            <li>
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
  console.log(state);
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
})(MenuBar);
