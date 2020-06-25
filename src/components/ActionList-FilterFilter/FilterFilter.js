import React from "react";

const FilterFilter = () => {
    return (
        <div className="FilterFilter">
            <div className={"FilterFilter__title"}>Quick filters</div>
            <ul>
                <li>
                    <span className="material-icons filter_person">person_outline</span>
                    <span className="filter_tick">
            <span>Just my tasks</span>
          </span>
                </li>
                <li>
                    <span className="material-icons filter_today">calendar_today</span>
                    <span className="filter_tickweek">
            <span>Due this week</span>
          </span>
                </li>
                <li className="filter_edge">
                    <span className="material-icons filter_next">redo</span>
                    <span className="filter_ticknext">
            <span>Due next week</span>
          </span>
                </li>


            </ul>
        </div>
    );
};

export default FilterFilter;
