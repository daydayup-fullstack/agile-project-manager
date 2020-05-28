import React from "react";
import "./Home.css";
import Panel from "../../components/Panel/Panel";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import AddProjectCard from "../../components/AddProjectCard/AddProjectCard";
import { Link } from "react-router-dom";

const Home = ({ projects }) => {
  const starredProjects = projects
    .filter((project) => project.content.isStarred)
    .map((project) => project);

  const style = {
    textDecoration: "none",
    color: "#151b26",
  };

  return (
    <div className={"App-Home"}>
      {starredProjects && starredProjects.length > 0 && (
        <Panel panelName={"Favorites"}>
          {starredProjects.map((project) => (
            <Link to={`/project/${project.id}`} key={project.id} style={style}>
              <ProjectCard project={project} onHandleClick={() => {}} />
            </Link>
          ))}
        </Panel>
      )}
      <Panel panelName={"Recent Projects"}>
        {projects.map((project) => (
          <Link to={`/project/${project.id}`} key={project.id} style={style}>
            <ProjectCard project={project} onHandleClick={() => {}} />
          </Link>
        ))}
        <Link to={"/create-project"}>
          <AddProjectCard />
        </Link>
      </Panel>
    </div>
  );
};

export default Home;
