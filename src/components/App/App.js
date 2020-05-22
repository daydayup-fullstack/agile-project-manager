import React, { useState } from "react";
import "./App.css";
import Drawer from "../Drawer/Drawer";
import Home from "../../pages/Home/Home";
import Navigation from "../Navigation/Navigation";
import {project, projects} from "../../model/model";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Project from "../../pages/Project/Project";
import LoginForm from "../LoginForm/LoginForm";
import SignUp from "../../pages/SignUp/Signup";
import MyTasks from "../../pages/MyTasks/MyTasks";

const columnId = project.columnOrder[0];
const column = project.columns[columnId];
const tasks = column.taskIds.map((id) => project.tasks[id]);

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="App">
      <Router>
        {isLoggedIn ? (
          <Switch>
            {/*<Route path={"/"}>*/}
            {/*  <SignUp />*/}
            {/*</Route>*/}

            <Drawer nav={<Navigation />}>
              <Route path={"/home"}>
                <Home projects={projects} />
              </Route>

              <Route path={"/tasks"}>
                  <MyTasks tasks={tasks}/>
              </Route>

              <Route path={"/inbox"}>
                <Inbox />
              </Route>

              <Route path={"/project/:id"}>
                <Project projects={projects} />
              </Route>
            </Drawer>
          </Switch>
        ) : (
          <Route path={"/#login"}>
            <LoginForm handleLogin={setIsLoggedIn} />
          </Route>
        )}
      </Router>
    </div>
  );
};


const Inbox = () => {
  return <div>Inbox works!</div>;
};

export default App;
