import React from "react";
import "./AddProjectCard.css";

const AddProjectCard = () => {
    return (
        <div className="addProjectCard">
            <div className="addProjectCard__content">
                <div className="material-icons addProjectCard__content__icon">
                    add
                </div>
            </div>
            <span className="addProjectCard__title">New Project</span>
        </div >
    )
}

export default AddProjectCard;
