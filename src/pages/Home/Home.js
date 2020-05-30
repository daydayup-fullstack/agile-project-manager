import React from "react";
import "./Home.css";
import Panel from "../../components/Panel/Panel";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import AddProjectCard from "../../components/AddProjectCard/AddProjectCard";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Home = ({ starredProjects, projectsInOrder, projects }) => {
  const style = {
    textDecoration: "none",
    color: "#151b26",
  };

  return (
    <div className={"App-Home"}>
      {starredProjects && starredProjects.length > 0 && (
        <Panel panelName={"Favorites"}>
          {starredProjects.map((id) => (
            <Link to={`/project/${id}`} key={id} style={style}>
              <ProjectCard project={projects[id]} />
            </Link>
          ))}
        </Panel>
      )}
      <Panel panelName={"Recent Projects"}>
        {projectsInOrder.map((id) => (
          <Link to={`/project/${id}`} key={id} style={style}>
            <ProjectCard project={projects[id]} />
          </Link>
        ))}

        <AddProjectCard />
      </Panel>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state.app);
  return {
    starredProjects: state.app.starredProjects,
    projectsInOrder: state.app.currentWorkspace.projectsInOrder,
    projects: state.app.currentWorkspace.projects,
  };
};

export default connect(mapStateToProps, {})(Home);
