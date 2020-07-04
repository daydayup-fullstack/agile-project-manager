import {BrowserRouter as Router, Link} from "react-router-dom";
import React from "react";
import myFirebase from "../../Firebase/firebase";
import {connect} from "react-redux";
import {should_show_register} from "../../actions";

const ProfilePopup = ({
                          currentWorkspace,
                          user,
                          change_workspace,
                          dismissNextLevel,
                          show_profile_settings,
                          logout_user,
                          should_show_register
                      }) => {
    function handleClick(selectedWorkspaceId) {
        if (selectedWorkspaceId !== currentWorkspace) {
            change_workspace(user.allWorkspaces[selectedWorkspaceId]);
        }
    }

    return (
        <Router>
            <div className={"ProfilePopup"}>
                <ul>
                    {user.workspaces.map((id, index) => {
                        return (
                            <li
                                onMouseOver={dismissNextLevel}
                                onClick={() => handleClick(id)}
                                key={index}
                            >
                                {id === currentWorkspace.id && (
                                    <span className={"material-icons ProfilePopup__current"}>
                    done
                  </span>
                                )}
                                {user.allWorkspaces[id].type === "personal"
                                    ? "Personal projects"
                                    : user.allWorkspaces[id].name}
                            </li>
                        );
                    })}
                </ul>

                <div className="divider"/>

                <ul>
                    <li
                        onMouseOver={dismissNextLevel}
                        onClick={(event) => {
                            show_profile_settings();
                        }}
                    >
                        My Profile Settings
                    </li>
                    {myFirebase.auth.currentUser.isAnonymous && (
                        <li
                            onClick={() => {
                                should_show_register(true);
                            }}
                        >
                            Create account
                        </li>
                    )}
                    <li
                        onMouseOver={dismissNextLevel}
                        onClick={() => {
                            const goAhead = window.confirm(
                                "Are you sure about logging out? \n (You may not be able to access this account if you haven't registered)"
                            );
                            if (goAhead) logout_user();
                        }}
                    >
                        <Link to="/" style={{textDecoration: "none", color: "black"}}>
                            Logout
                        </Link>
                    </li>
                </ul>
            </div>
        </Router>
    );
};

export default connect(null, {should_show_register})(ProfilePopup);
