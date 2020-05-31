import React from "react";
import "./ProjectCard.css";
import { colors } from "../../model/model";

const ProjectCard = ({ project }) => {
  return (
    <div className={"ProjectCard"}>
      <div
        className="card"
        style={{ background: colors[project.colorIndex] }}
      />
      <span className={"title"}>{project.name}</span>
    </div>
  );
};

export default ProjectCard;
