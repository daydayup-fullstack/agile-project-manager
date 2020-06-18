import React from "react";
import "./SideMenuSection.css";
import {colorInOrder} from "../ColorArray/ColorArray";
import {Link, NavLink} from "react-router-dom";
import Profile from "../Profile/Profile";

export const Favorites = ({projects}) => {
    const [shouldExpand, setShouldExpand] = React.useState(true);
    const getProjectColor = (project) => ({
        backgroundColor: colorInOrder[project.colorIndex],
    });
    return (
        <>
            <header onClick={() => setShouldExpand(!shouldExpand)}>
                Favorites{" "}
                <span className={"material-icons"}>
          {shouldExpand ? "keyboard_arrow_up" : "keyboard_arrow_down"}
        </span>
            </header>
            <ul className={`projectList ${shouldExpand && "projectList--open"}`}>
                {projects.map((project) => (
                    <li key={project.id}>
                        <NavLink
                            className={"project"}
                            exact
                            to={`/projects/${project.id}`}
                            style={{textDecoration: "none"}}
                            activeStyle={{background: "rgba(111, 119, 130, 0.5)"}}
                        >
                            <div
                                className={"project__color"}
                                style={getProjectColor(project)}
                            />
                            <span className={"project__name"}>{project.name}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </>
    );
};

export const Team = ({projects, workspace}) => {
    const projectArray = Object.values(projects);
    const getProjectColor = (project) => ({
        backgroundColor: colorInOrder[project.colorIndex],
    });

    return (
        <>
            {workspace.type === "team" && (
                <>
                    <Link to={"/team"} style={{textDecoration: "none", color: "#fff"}}>
                        <header className={"teamHeader"}>{workspace.name}</header>
                    </Link>

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
                {projectArray.map((project) => (
                    <li key={project.id}>
                        <NavLink
                            exact
                            activeClassName={"active"}
                            to={`/projects/${project.id}`}
                            style={{textDecoration: "none"}}
                            className={"project"}
                        >
                            <div
                                className={"project__color"}
                                style={getProjectColor(project)}
                            />
                            <span className={"project__name"}>{project.name}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </>
    );
};

const SideMenuSection = ({children}) => {
    return (
        <div className={"SideMenuSection"}>
            <div className="SideMenuSection__content">{children}</div>
        </div>
    );
};

export default SideMenuSection;
