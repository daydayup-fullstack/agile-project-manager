import React from "react";
import "./Home.css";
import Panel from "../../components/Panel/Panel";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const Home = ({ projects }) => {
  return (
    <div className={"App-Home"}>
      <Panel panelName={"Favorites"}>
        {projects
          .filter((project) => project.content.isStarred)
          .map((project) => (
            <ProjectCard project={project} onHandleClick={() => {}} />
          ))}
      </Panel>
      <Panel panelName={"Recent Projects"}>
        {projects
          .map((project) => (
            <ProjectCard project={project} onHandleClick={() => {}} />
          ))}
      </Panel>
    </div>
  );
};

export default Home;
