import React from "react";
import "./SideMenuSection.css";
import { colorInOrder } from "../ColorArray/ColorArray";
import Profile from "../Profile/Profile";

export const Favorites = ({ projects }) => {
  const [shouldExpand, setShouldExpand] = React.useState(true);
  const getProjectColor = (project) => ({
    backgroundColor: colorInOrder[project.colorIndex],
  });
  const projectArray = Object.values(projects);
  return (
    <>
      <header onClick={() => setShouldExpand(!shouldExpand)}>
        Favorites{" "}
        <span className={"material-icons"}>
          {shouldExpand ? "keyboard_arrow_up" : "keyboard_arrow_down"}
        </span>
      </header>
      <ul className={`projectList ${shouldExpand && "projectList--open"}`}>
        {projectArray.map((project) => (
          <li className={"project"} key={project.id}>
            <div
              className={"project__color"}
              style={getProjectColor(project)}
            />
            <span className={"project__name"}>{project.name}</span>
            <i
              className={"material-icons"}
              onClick={() => console.log("more actions")}
            >
              more_horiz
            </i>
          </li>
        ))}
      </ul>
    </>
  );
};

export const Team = ({ projects, team }) => {
  const projectArray = Object.values(projects);
  const getProjectColor = (project) => ({
    backgroundColor: colorInOrder[project.colorIndex],
  });

  return (
    <>
      <header className={"teamHeader"}>Daydayup</header>
      <ul className={"memberList"}>
        {team.members.map((user) => (
          <li key={user.id} className={"member"}>
            <Profile user={user} />
          </li>
        ))}
      </ul>
      <ul className={`projectList`} style={{ display: "block" }}>
        {projectArray.map((project) => (
          <li className={"project"} key={project.id}>
            <div
              className={"project__color"}
              style={getProjectColor(project)}
            />
            <span className={"project__name"}>{project.name}</span>
            <i
              className={"material-icons"}
              onClick={() => console.log("more actions")}
            >
              more_horiz
            </i>
          </li>
        ))}
      </ul>
    </>
  );
};

const SideMenuSection = ({ children }) => {
  return (
    <div className={"SideMenuSection"}>
      <div className="SideMenuSection__content">{children}</div>
    </div>
  );
};

export default SideMenuSection;
