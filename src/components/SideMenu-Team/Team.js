import {colorInOrder} from "../ColorArray/ColorArray";
import {Link} from "react-router-dom";
import Profile from "../Profile/Profile";
import React from "react";
import {connect} from "react-redux";
import {nav_link_clicked, show_invite_members_popup} from "../../actions";

const Team = ({
                  projects,
                  workspace,
                  section,
                  indexSelected,
                  nav_link_clicked, show_invite_members_popup
              }) => {
    const projectArray = Object.values(projects);
    const getProjectColor = (project) => ({
        backgroundColor: colorInOrder[project.colorIndex],
    });

    function handleClick(index) {
        nav_link_clicked({
            section: "team",
            index: index,
        });
    }

    const addNewMembers = e => {
        console.log("should show invite more members page");
        show_invite_members_popup();
    };

    return (
        <>
            {workspace.type === "team" && (
                <>
                    <div style={{textDecoration: "none", color: "#fff"}}>
                        <header className={"teamHeader"}>{workspace.name}
                            <span className="material-icons" onClick={(e) => addNewMembers(e)}>add</span>
                        </header>
                    </div>

                    <ul className={"memberList"}>
                        {workspace.allMembers.map((user) => (
                            <li key={user.id} className={"member"}>
                                <Profile user={user}/>
                            </li>
                        ))}
                    </ul>
                </>
            )}

            <ul className={`projectList`} style={{display: "block"}}>
                {projectArray.map((project, index) => {
                    return (
                        project && (
                            <li key={project.id}>
                                <Link
                                    // exact
                                    to={`/projects/${project.id}`}
                                    style={{textDecoration: "none"}}
                                    className={`project ${
                                        section === "team" && indexSelected === index && "active"
                                    }`}
                                    onClick={() => handleClick(index)}
                                >
                                    <div
                                        className={"project__color"}
                                        style={getProjectColor(project)}
                                    />
                                    <span className={"project__name"}>{project.name}</span>
                                </Link>
                            </li>
                        )
                    );
                })}
            </ul>
        </>
    );
};
const mapStateToProps = (state) => {
    return {
        section: state.app.ui_navlink_selector.section,
        indexSelected: state.app.ui_navlink_selector.index,
    };
};

export default connect(mapStateToProps, {nav_link_clicked, show_invite_members_popup})(Team);
