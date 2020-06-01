import React from "react";
import "./Home.css";
import Panel from "../../components/Panel/Panel";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import AddProjectCard from "../../components/AddProjectCard/AddProjectCard";
import { connect } from "react-redux";
import PopupMenu from "../../components/PopupMenu/PopupMenu";
import ActionList from "../../components/ActionList/ActionList";

const Home = ({
  starredProjects,
  projectsInOrder,
  projects,
  projectCard_popup,
}) => {
  console.log(projectCard_popup);
  return (
    <div className={"App-Home"}>
      {projectCard_popup.shouldShow && (
        <PopupMenu anchor={projectCard_popup.anchor}>
          <ActionList />
        </PopupMenu>
      )}

      {starredProjects && starredProjects.length > 0 && (
        <Panel panelName={"Favorites"}>
          {starredProjects.map((id) => (
            <ProjectCard project={projects[id]} starred={true} key={id} />
          ))}
        </Panel>
      )}
      <Panel panelName={"Recent Projects"}>
        {projectsInOrder.map((id) => (
          <ProjectCard
            project={projects[id]}
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
    projects: state.workspace.projects,
    projectCard_popup: {
      shouldShow: state.app.ui_projectCard_popup.shouldShow,
      anchor: state.app.ui_projectCard_popup.anchor,
    },
  };
};

export default connect(mapStateToProps, {})(Home);
