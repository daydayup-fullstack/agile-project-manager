import React, { useState } from "react";
import { connect } from "react-redux";
import Tooltip from "../Tooltip/Tooltip";
import AddButtonCircular from "../AddButtonCircular/AddButtonCircular";
import "./ContentHeader.css";
import MultipleUserProfile from "../MultipleUserProfile/MultipleUserProfile";
import Profile from "../Profile/Profile";
import { db_users } from "../../data/database";
import AddTaskPopup from "../AddTaskPopup/AddTaskPopup";
import { changeNewTaskDisplay } from "../../actions/index";
import { open_app_drawer, show_header_profile_popup } from "../../actions";

const users = [
  db_users["user-scott"],
  db_users["user-ollie"],
  db_users["user-silvia"],
];

const calcAnchor = (e) => {
  return {
    anchor: {
      x: e.clientX,
      y: e.clientY,
      width: e.target.clientWidth,
      height: e.target.clientHeight,
    },
  };
};

const ContentHeader = ({
  shouldOpen,
  newTaskDisplay,
  open_app_drawer,
  show_header_profile_popup,
  currentUser,
}) => {
  const [shouldShowTooltip, setShouldShowTooltip] = useState(false);
  return (
    <>
      <header className={"ContentHeader"}>
        <div className="title">
          {!shouldOpen && (
            <span className={"material-icons icon"} onClick={open_app_drawer}>
              menu
            </span>
          )}
          <h2>Home</h2>
          {/*<span className="material-icons icon">keyboard_arrow_down</span>*/}
          {/*<span className="material-icons icon">info</span>*/}
          {/*<span className="star">*/}
          {/*  <Starred*/}
          {/*    onHandleClick={(starValue) => console.log(starValue)}*/}
          {/*    starred={false}*/}
          {/*  />*/}
          {/*</span>*/}
          {/*<span className="searchContainer">*/}
          {/*    <span className="material-icons">*/}
          {/*        search*/}
          {/*    </span>*/}
          {/*    <input placeholder='Search' />*/}
          {/*</span>*/}
        </div>
        <div className={"more-content"}>
          <div className="more-content__MultipleUserProfile">
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
          <ul className={"more-content__userSection"}>
            <li>
              <AddButtonCircular
                onHandleClick={() => setShouldShowTooltip(!shouldShowTooltip)}
              />
            </li>
            {/*<li>*/}
            {/*    <span className="material-icons icon">help_outline</span>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*    <button>*/}
            {/*        Upgrade*/}
            {/*    </button>*/}
            {/*</li>*/}
            <li onClick={(e) => show_header_profile_popup(calcAnchor(e))}>
              {/*todo - hardcoded data - fix this later*/}
              <Profile user={currentUser} />
            </li>
          </ul>
        </div>

        <Tooltip
          shouldShow={shouldShowTooltip}
          setShouldShow={setShouldShowTooltip}
        />
      </header>

      {newTaskDisplay ? <AddTaskPopup user={users[0]} /> : <></>}
    </>
  );
};

function mapStateToProps(state) {
  return {
    newTaskDisplay: state.taskDisplay.newTaskDisplay,
    shouldOpen: state.app.ui_drawer.shouldOpen,
    currentUser: state.user,
  };
}

export default connect(mapStateToProps, {
  changeNewTaskDisplay,
  open_app_drawer,
  show_header_profile_popup,
})(ContentHeader);
