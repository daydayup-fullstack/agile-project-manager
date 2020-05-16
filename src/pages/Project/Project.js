import React  from "react";
import "./Project.css";
import {useParams} from "react-router-dom";
import Kanban from "../../components/Kanban/Kanban";

const Project = ({ projects }) => {
  const { id } = useParams();

  const currentProject = () => {
    const result = projects.filter((p) => p.id === id);
    return result[0];
  }

  const project = currentProject();

  return (
    <div className={"App-Project"}>
        <Kanban project={project}/>
    </div>
  );
};

export default Project;
