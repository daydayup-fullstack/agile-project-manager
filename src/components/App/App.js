import React, { useState } from "react";
import "./App.css";
import Drawer from "../Drawer/Drawer";
import Home from "../../pages/Home/Home";
import Navigation from "../Navigation/Navigation";
import { projects } from "../../model/model";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Project from "../../pages/Project/Project";
import LoginForm from "../LoginForm/LoginForm";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="App">
      <Router>
        {isLoggedIn ? (
          <Drawer nav={<Navigation />}>
            <Switch>

              <Route path={"/home"}>
                <Home projects={projects} />
              </Route>

              <Route path={"/tasks"}>
                <Tasks />
              </Route>

              <Route path={"/inbox"}>
                <Inbox />
              </Route>

              <Route path={"/project/:id"}>
                <Project projects={projects} />
              </Route>
            </Switch>
          </Drawer>
        ) : (
          <Route path={"/#login"}>
            <LoginForm handleLogin={setIsLoggedIn} />
          </Route>
        )}
      </Router>
    </div>
  );
};

const Tasks = () => {
  return <div>Tasks works!</div>;
};

const Inbox = () => {
  return <div>Inbox works!</div>;
};

export default App;
