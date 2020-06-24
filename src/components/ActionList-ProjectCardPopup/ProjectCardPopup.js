import ColorArray from "../ColorArray/ColorArray";
import IconArray from "../IconArray/IconArray";
import React from "react";

const Arrow = () => (
    <i className={"material-icons-outlined"}>keyboard_arrow_right</i>
);

const ProjectCardPopup = ({
                              nextAction,
                              showNextLevel,
                              setShowNextLevel,
                              setParentAnchor,
                              project,
                              calcPosition,
                              dismissNextLevel,
                              expandableAction,
                              currentWorkspace,
                              starredProjects,
                              remove_project_star,
                              add_project_star,
                              delete_project,
                          }) => {
    // const height = 343;

    function handleMouseOver(e) {
        setParentAnchor({
            x: e.target.offsetParent.offsetLeft,
            y: e.target.offsetParent.offsetTop,
        });
        setShowNextLevel(true);
    }

    let deleteProject = () => {
        let ahead = window.confirm("Are you sure about deleting this project?");

        if (ahead) {
            console.log("should delete");
            delete_project({project, currentWorkspace});
        }
    };

    return (
        <ul>
            <li onMouseOver={handleMouseOver} ref={expandableAction}>
                Set Color & Icon <Arrow/>
            </li>
            <li
                onMouseOver={dismissNextLevel}
                onClick={() => {
                    if (starredProjects.indexOf(project.id) >= 0) {
                        remove_project_star(project);
                    } else {
                        add_project_star(project);
                    }
                }}
            >
                {starredProjects.indexOf(project.id) < 0
                    ? "Add to Favorites"
                    : "Remove from Favorites"}
            </li>

            <li
                onMouseOver={dismissNextLevel}
                style={{color: "#E8384F"}}
                onClick={() => deleteProject()}
            >
                Delete Project
            </li>
            {showNextLevel && (
                <li className={"nextLevel"} style={calcPosition()} ref={nextAction}>
                    <ColorArray colorIndex={project.colorIndex}/>
                    <IconArray
                        iconIndex={project.iconIndex}
                        colorIndex={project.colorIndex}
                    />
                </li>
            )}
        </ul>
    );
};

export default ProjectCardPopup;
