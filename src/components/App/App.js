import React, { useState } from "react";
import "./App.css";
import Drawer from "../Drawer/Drawer";
import Home from "../../pages/Home/Home";
import Team from '../../pages/Team/Team';
import Navigation from "../Navigation/Navigation";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";
import Project from "../../pages/Project/Project";
import ContentHeader from "../ContentHeader/ContentHeader";
import { connect } from "react-redux";
import MenuBar from "../MenuBar/MenuBar";
import PopupMenu from "../PopupMenu/PopupMenu";
import ActionList from "../ActionList/ActionList";
import Tooltip from "../Tooltip/Tooltip";
import AddTaskPopup from "../AddTaskPopup/AddTaskPopup";
import { db_users } from "../../data/database";

const App = ({
  projectCard_popup,
  header_projectIcon_popup,
  header_projectInfo_popup,
  header_profile_popup,
  header_addButton_popup,
  header_filter_popup,
  newTaskDisplay,
  taskcard_context_menu,
  column_popup,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="App">
      {newTaskDisplay ? <AddTaskPopup user={db_users["user-scott"]} /> : <></>}
      <div className="App-Popup">
        {projectCard_popup.shouldShow && (
          <PopupMenu anchor={projectCard_popup.anchor}>
            <ActionList />
          </PopupMenu>
        )}

        {header_projectIcon_popup.shouldShow && (
          <PopupMenu anchor={header_projectIcon_popup.anchor}>
            <ActionList />
          </PopupMenu>
        )}

        {header_projectInfo_popup.shouldShow && (
          <PopupMenu anchor={header_projectInfo_popup.anchor}>
            <ActionList />
          </PopupMenu>
        )}

        {header_profile_popup.shouldShow && (
          <PopupMenu anchor={header_profile_popup.anchor}>
            <ActionList />
          </PopupMenu>
        )}

        {header_addButton_popup.shouldShow && (
          <PopupMenu anchor={header_addButton_popup.anchor}>
            <Tooltip />
          </PopupMenu>
        )}

        {header_filter_popup.shouldShow && (
          <PopupMenu anchor={header_filter_popup.anchor}>
            <ActionList />
          </PopupMenu>
        )}

        {taskcard_context_menu.shouldShow && (
          <PopupMenu anchor={taskcard_context_menu.anchor}>
            <ActionList />
          </PopupMenu>
        )}

        {column_popup.shouldShow && (
          <PopupMenu anchor={column_popup.anchor}>
            <ActionList />
          </PopupMenu>
        )}
      </div>

      <Router>
        {isLoggedIn ? (
          <Switch>
            <Drawer nav={<Navigation />}>
              <Route exact path={"/"}>
                <Redirect to={"/home"} />
              </Route>

              <Route path={"/home"}>
                <ContentHeader title={"Home"} />
                <Home />
              </Route>

              {/*<Route path={"/tasks"}>*/}
              {/*  /!*<MyTasks tasks={tasks} />*!/*/}
              {/*  <ContentHeader title={"My Tasks"} />*/}
              {/*</Route>*/}

              <Route path={"/projects/:id"}>
                <MenuBar />
                <Project />
              </Route>

              <Route path={"/team"}>
                <ContentHeader title={"Team"} />
                <Team />
              </Route>

            </Drawer>
          </Switch>
        ) : (
          <>
            <Route exact path={"/"}>
              <LoginForm handleLogin={setIsLoggedIn} />
            </Route>
          </>
        )}
      </Router>
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log(state);
  return {
    projectCard_popup: {
      shouldShow: state.app.ui_projectCard_popup.shouldShow,
      anchor: state.app.ui_projectCard_popup.anchor,
    },
    header_projectIcon_popup: {
      shouldShow: state.app.ui_header_project_icon_popup.shouldShow,
      anchor: state.app.ui_header_project_icon_popup.anchor,
    },
    header_projectInfo_popup: {
      shouldShow: state.app.ui_header_project_info_popup.shouldShow,
      anchor: state.app.ui_header_project_info_popup.anchor,
    },
    header_profile_popup: {
      shouldShow: state.app.ui_header_profile_popup.shouldShow,
      anchor: state.app.ui_header_profile_popup.anchor,
    },
    header_addButton_popup: {
      shouldShow: state.app.ui_header_addButton_popup.shouldShow,
      anchor: state.app.ui_header_addButton_popup.anchor,
    },
    header_filter_popup: {
      shouldShow: state.app.ui_header_filter_popup.shouldShow,
      anchor: state.app.ui_header_filter_popup.anchor,
      content: state.app.ui_header_filter_popup.content,
    },

    taskcard_context_menu: {
      shouldShow: state.app.ui_taskcard_context_menu.shouldShow,
      anchor: state.app.ui_taskcard_context_menu.anchor,
    },
    column_popup: {
      shouldShow: state.app.ui_column_popup.shouldShow,
      anchor: state.app.ui_column_popup.anchor,
    },
    newTaskDisplay: state.taskDisplay.newTaskDisplay,
  };
};
export default connect(mapStateToProps, {})(App);
