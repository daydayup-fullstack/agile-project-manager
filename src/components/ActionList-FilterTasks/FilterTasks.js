import React from "react";

const FilterTasks = () => {
    return (
        <ul className={"FilterTasks"}>
            <li>
                <span className="material-icons task_done">done</span>
                <span className="task_tick">
          <span>Incomplete tasks</span>
        </span>
            </li>
            <li className={"expandableItem"}>
                <span className="complete_task">Compelte tasks</span>
            </li>
            <li>
                <span className="complete_task">All tasks</span>
            </li>
        </ul>
    );
};

export default FilterTasks;
