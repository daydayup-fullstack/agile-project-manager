import React from "react";
import "./Home.css";
import Panel from "../../components/Panel/Panel";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import AddProjectCard from "../../components/AddProjectCard/AddProjectCard";
import { connect } from "react-redux";

const Home = ({ starredProjects, projectsInOrder, projects }) => {
  return (
    <div className={"App-Home"}>
      {starredProjects && starredProjects.length > 0 && (
        <Panel panelName={"Favorites"}>
          {starredProjects.map((id, index) => (
            <ProjectCard project={projects[index]} starred={true} key={id} />
          ))}
        </Panel>
      )}
      <Panel panelName={"Recent Projects"}>
        {projectsInOrder.map((id, index) => (
          <ProjectCard
            project={projects[index]}
            starred={starredProjects.indexOf(id) >= 0}
            key={id}
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
    projectsInOrder: state.workspace.projectsInOrder,
    projects: state.allProjects,
  };
};

export default connect(mapStateToProps, {})(Home);
