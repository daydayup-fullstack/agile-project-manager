import React, { useState } from "react";
import "./App.css";
import Drawer from "../Drawer/Drawer";
import Home from "../../pages/Home/Home";
import Navigation from "../Navigation/Navigation";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";
import Project from "../../pages/Project/Project";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="App">
      <Router>
        {isLoggedIn ? (
          <Switch>
            <Drawer nav={<Navigation />}>
              <Route exact path={"/"}>
                <Redirect to={"/home"} />
              </Route>

              <Route path={"/home"}>
                <Home />
              </Route>

              <Route path={"/tasks"}>{/*<MyTasks tasks={tasks} />*/}</Route>

              <Route path={"/inbox"}>
                <Inbox />
              </Route>

              <Route path={"/project/:id"}>
                <Project />
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

const Inbox = () => {
  return <div>Inbox works!</div>;
};

export default App;
