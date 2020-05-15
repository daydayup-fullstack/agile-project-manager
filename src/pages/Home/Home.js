import React from "react";
import "./Home.css";
import Panel from "../../components/Panel/Panel";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import AddProjectCard from "../../components/AddProjectCard/AddProjectCard";

const Home = ({ projects }) => {
  const starredProjects = projects
    .filter((project) => project.content.isStarred)
    .map((project) => project);

  return (
    <div className={"App-Home"}>
      {starredProjects && starredProjects.length > 0 && (
        <Panel panelName={"Favorites"}>
          {starredProjects.map((project) => (
            <ProjectCard project={project} onHandleClick={() => {}} />
          ))}
        </Panel>
      )}
      <Panel panelName={"Recent Projects"}>
        {projects.map((project) => (
          <ProjectCard project={project} onHandleClick={() => {}} />
        ))}

        <AddProjectCard />
      </Panel>
    </div>
  );
};

export default Home;
