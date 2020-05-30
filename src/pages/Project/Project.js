import React from "react";
import "./Project.css";
import { useParams } from "react-router-dom";
import Kanban from "../../components/Kanban/Kanban";
import { connect } from "react-redux";

const Project = ({ projects }) => {
  const { id } = useParams();

  const project = projects[id];


  return (
    <div className={"App-Project"}>
      <Kanban project={project} />
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);

  return {
    projects: state.app.currentWorkspace.projects,
  };
};

export default connect(mapStateToProps, {})(Project);
