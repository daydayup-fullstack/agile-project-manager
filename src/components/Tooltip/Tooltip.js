import React from "react";
import "./Tooltip.css";

const Tooltip = ({ shouldShow }) => {
    return shouldShow ? (
        <div className={"Tooltip"}>
            <div className="Tooltip__content">
                <ul>
                    <li onClick={() => {}}>
                        <span className={"material-icons"}>check_circle_outline</span>
                        <span>Task</span>
                    </li>
                    <li onClick={() => {}}>
                        <span className={"material-icons"}>list_alt</span>
                        <span>Project</span>
                    </li>

                    <li onClick={() => {}}>
                        <span className={"material-icons"}>person_add</span>
                        <span>Invite</span>
                    </li>
                </ul>
            </div>
        </div>
    ) : (
        <></>
    );
};

export default Tooltip;
