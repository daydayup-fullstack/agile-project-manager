import React from "react";
import "./team.css";
import Panel from "../../components/TeampageProjectPanel/Panel";
import DescriptionPanel from "../../components/TeamDescriptionPanel/DescriptionPanel";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import AddProjectCard from "../../components/AddProjectCard/AddProjectCard";
import Members from "../../components/TeamMember/TeamMember";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import TeamFilterbar from "../../components/TeamFilter/TeamFilterbar";

const Team = ({ projects }) => {
  const style = {
    textDecoration: "none",
    color: "#151b26",
  };

  return (
    <div className="App-Team">
      <TeamFilterbar />
      <div className="panels">
        <span className="panel_left">
          <div>
            <DescriptionPanel panelName={"Description"}/>
            <Members />
          </div>
        </span>
        <span className="panel_right">
          <Panel panelName={"Projects"}>
            <div className="projects">
              <span>
                <AddProjectCard />
              </span>

              <div className="project_list">
                {projects.map((id, index) => (
                  <Link to={`/project/${id}`} key={id} style={style}>
                    <ProjectCard project={projects[index]} />
                  </Link>
                ))}
              </div>
            </div>
          </Panel>
        </span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    projectsInOrder: state.workspace.projectsInOrder,
    projects: state.allProjects,
  };
};

export default connect(mapStateToProps, {})(Team);
