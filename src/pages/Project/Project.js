import React from "react";
import "./Project.css";
import { useParams } from "react-router-dom";
import Kanban from "../../components/Kanban/Kanban";
import { connect } from "react-redux";
import { project_selected } from "../../actions";

const Project = ({ projects, project_selected }) => {
  const { id } = useParams();

  React.useEffect(() => {
    project_selected(projects[id]);
  }, [project_selected, id, projects]);

  return (
    <div className={"App-Project"}>
      <Kanban />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    projects: state.workspace.projects,
  };
};

export default connect(mapStateToProps, { project_selected })(Project);
