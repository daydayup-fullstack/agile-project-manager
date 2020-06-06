import React from "react";
import "./Home.css";
import Panel from "../../components/Panel/Panel";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import AddProjectCard from "../../components/AddProjectCard/AddProjectCard";
import { connect } from "react-redux";

const Home = ({ starredProjects, projects }) => {
  const favorites = projects.filter(
    (project) => starredProjects.indexOf(project.id) >= 0
  );

  return (
    <div className={"App-Home"}>
      {starredProjects && starredProjects.length > 0 && (
        <Panel panelName={"Favorites"}>
          {favorites.map((project) => (
            <ProjectCard project={project} starred={true} key={project.id} />
          ))}
        </Panel>
      )}
      <Panel panelName={"Recent Projects"}>
        {projects.map((project) => (
          <ProjectCard
            project={project}
            starred={starredProjects.indexOf(project.id) >= 0}
            key={project.id}
          />
        ))}
        <AddProjectCard />
      </Panel>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    starredProjects: state.user.starredProjects,
    projects: state.allProjects,
  };
};

export default connect(mapStateToProps, {})(Home);
