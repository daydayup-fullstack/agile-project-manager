import React, { useState } from "react";
import "./App.css";
import Drawer from "../Drawer/Drawer";
import Home from "../../pages/Home/Home";
import Navigation from "../Navigation/Navigation";
import { projects } from "../../model/model";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Project from "../../pages/Project/Project";
import LoginForm from "../LoginForm/LoginForm";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        {isLoggedIn ? (
          <Drawer nav={<Navigation />}>
            <Switch>
              <Route exact from={"/"} to={"home"} />

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
          <div>
            <LoginForm handleLogin={setIsLoggedIn} />
          </div>
        )}
      </BrowserRouter>
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
