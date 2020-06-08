import React from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
const style = { textDecoration: "none" };

const Navigation = () => {
  return (
    <div className="Navigation">
      <ul>
        <NavLink to={"/home"} activeClassName={"active"} style={style}>
          <li>
            <span className="link">
              <i className={"material-icons-outlined icon"}>home</i>Home
            </span>
          </li>
        </NavLink>
        {/*<NavLink to={"/tasks"} activeClassName={"active"} style={style}>*/}
        {/*  <li>*/}
        {/*    <span className={"link"}>*/}
        {/*      <i className={"material-icons-outlined icon"}>check_circle</i>My*/}
        {/*      Tasks*/}
        {/*    </span>*/}
        {/*  </li>*/}
        {/*</NavLink>*/}
        <NavLink to={"/team"} activeClassName={"active"} style={style}>
          <li>
            <span className="link">
              <i className={"material-icons-outlined icon"}>notifications</i>
              Team
            </span>
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
