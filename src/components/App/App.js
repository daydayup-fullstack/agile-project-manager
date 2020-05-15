import React from "react";
import "./App.css";
import Drawer from "../Drawer/Drawer";
import Home from "../../pages/Home/Home";

import { projects } from "../../model/model";
import Navigation from "../Navigation/Navigation";

const App = () => {
  return (
    <div className="App">
      <Drawer nav={<Navigation/>} content={<Home projects={projects} />} />
    </div>
  );
};

export default App;
