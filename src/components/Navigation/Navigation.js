import React from "react";
import "./Navigation.css";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {nav_link_clicked} from "../../actions";

const style = {textDecoration: "none"};

const Navigation = ({nav_link_clicked}) => {
    function handleClick() {
        nav_link_clicked({
            section: "",
            index: -1,
        });
    }

    return (
        <div className="Navigation">
            <ul>
                <NavLink to={"/home"} activeClassName={"active"} style={style}>
                    <li onClick={() => handleClick()}>
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
                {/*<NavLink to={"/team"} activeClassName={"active"} style={style}>*/}
                {/*  <li>*/}
                {/*    <span className="link">*/}
                {/*      <i className={"material-icons-outlined icon"}>notifications</i>*/}
                {/*      Team*/}
                {/*    </span>*/}
                {/*  </li>*/}
                {/*</NavLink>*/}
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps, {nav_link_clicked})(Navigation);
