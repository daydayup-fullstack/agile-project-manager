import ColorArray from "../ColorArray/ColorArray";
import IconArray from "../IconArray/IconArray";
import React from "react";

const ProjectIconPopup = ({project}) => {
    return (
        <ul className={"ProjectIconPopup"}>
            <li className={"nextLevel"}>
                <ColorArray colorIndex={project.colorIndex}/>
                <IconArray
                    iconIndex={project.iconIndex}
                    colorIndex={project.colorIndex}
                />
            </li>
        </ul>
    );
};

export default ProjectIconPopup;
