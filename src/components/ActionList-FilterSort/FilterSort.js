import React from "react";

const FilterSort = () => {
    return (
        <ul className="FilterSort">
            <li>
                <span className="material-icons sort_done">done</span>
                <span className="sort_tick">
          <span>None</span>
        </span>
            </li>
            <li>
        <span>
          <span className="Sort_list">Due Date</span>
        </span>
            </li>
            <li>
        <span>
          <span className="Sort_list">Assignee</span>
        </span>
            </li>
            <li>
        <span>
          <span className="Sort_list">Likes</span>
        </span>
            </li>
            <li>
        <span>
          <span className="Sort_list">Alphabetical</span>
        </span>
            </li>
        </ul>
    );
};

export default FilterSort;
