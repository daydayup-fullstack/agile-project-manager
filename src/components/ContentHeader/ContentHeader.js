import React from "react";
import { connect } from "react-redux";
import "./ContentHeader.css";
import Profile from "../Profile/Profile";
import { changeNewTaskDisplay } from "../../actions/index";
import { open_app_drawer, show_header_profile_popup } from "../../actions";
import { calcAnchor } from "../../model/utility";

const ContentHeader = ({
  shouldOpen,
  open_app_drawer,
  show_header_profile_popup,
  currentUser,
  workspace,
    title
}) => {
  return (
    <>
      <header className={"ContentHeader"}>
        <div className="title">
          {!shouldOpen && (
            <span className={"material-icons icon"} onClick={open_app_drawer}>
              menu
            </span>
          )}
          <h2>{title}</h2>
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
          {/*{workspace.type === "team" && (*/}
          {/*  <div className="more-content__MultipleUserProfile">*/}
          {/*    <MultipleUserProfile*/}
          {/*      multipleUsers={workspace.members.map((id) => db_users[id])}*/}
          {/*      projectName={"DayDayUp"}*/}
          {/*    />*/}
          {/*  </div>*/}
          {/*)}*/}
          <ul className={"more-content__userSection"}>
            {/*<li>*/}
            {/*  <AddButtonCircular />*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*    <span className="material-icons icon">help_outline</span>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*    <button>*/}
            {/*        Upgrade*/}
            {/*    </button>*/}
            {/*</li>*/}
            <li onClick={(e) => show_header_profile_popup(calcAnchor(e))}>
              <Profile user={currentUser} />
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

function mapStateToProps(state) {
  // console.log(state.workspace);
  return {
    newTaskDisplay: state.taskDisplay.newTaskDisplay,
    shouldOpen: state.app.ui_drawer.shouldOpen,
    currentUser: state.user,
    workspace: state.workspace,
  };
}

export default connect(mapStateToProps, {
  changeNewTaskDisplay,
  open_app_drawer,
  show_header_profile_popup,
})(ContentHeader);
