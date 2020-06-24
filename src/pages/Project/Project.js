import React from "react";
import "./Project.css";
import {useParams} from "react-router-dom";
import Kanban from "../../components/Kanban/Kanban";
import {connect} from "react-redux";
import {project_selected} from "../../actions";

const Project = ({allProjects, project_selected}) => {
  const {id} = useParams();

  React.useEffect(() => {
    const project = allProjects.filter((p) => {
      if (p) {
        return p.id === id;
      } else {
        return null;
      }
    });

    if (project && project.length > 0) {
      project_selected(project[0]);
    }

    // todo - call action to load project details here

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  function handleScroll(event) {
    console.log(event.currentTarget.scrollLeft)
  }

  return (
      <div className={"App-Project"} onScroll={(event) => handleScroll(event)}>
        <Kanban/>
      </div>
  );
};

const mapStateToProps = (state) => {
  return {
    allProjects: state.allProjects,
  };
};

export default connect(mapStateToProps, {project_selected})(Project);
