import React from "react";
import "./Navigation.css";

const Navigation = () => {
    return <div className="Navigation">
        <ul>
            <li><i className={"material-icons-outlined"}>home</i>Home</li>
            <li><i className={"material-icons-outlined"}>check_circle</i>My Tasks</li>
            <li><i className={"material-icons-outlined"}>notifications</i>Inbox</li>
        </ul>
    </div>
}

export default Navigation;