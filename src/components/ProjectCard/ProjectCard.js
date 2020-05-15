import React from "react";
import "./ProjectCard.css";
import {colors} from "../../model/model";


const ProjectCard = ({ project, onHandleClick }) => {
    return (
        <div className={"ProjectCard"} onClick={onHandleClick}>
            <div
                className="card"
                style={{ background: colors[project.content.colorIndex] }}
            />
            <span className={"title"}>{project.content.name}</span>
        </div>
    );
};

export default ProjectCard;
