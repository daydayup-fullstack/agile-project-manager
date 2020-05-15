import React from "react";
import "./App.css";
import Drawer from "../Drawer/Drawer";
import Home from "../../pages/Home/Home";

import {projects} from "../../model/model";

const App = () => {


    return (
        <div className="App">
            <Drawer>
                <Home projects={projects}/>
            </Drawer>
        </div>
    );
}

export default App;