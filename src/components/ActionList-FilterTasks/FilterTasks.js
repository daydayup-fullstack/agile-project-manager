import React from "react";
import {connect} from "react-redux";
import {set_task_filter, TASK_FILTER} from "../../actions";

const FilterTasks = ({filterType, set_task_filter}) => {
    return (
        <ul className={"FilterTasks"}>
            <li
                onClick={(e) => {
                    set_task_filter(TASK_FILTER.incomplete);
                }}
            >
                {filterType === TASK_FILTER.incomplete && (
                    <span className="material-icons task_done">done</span>
                )}
                <span>Incomplete tasks</span>
            </li>
            <li
                className={"expandableItem"}
                onClick={() => {
                    set_task_filter(TASK_FILTER.completed);
                }}
            >
                {filterType === TASK_FILTER.completed && (
                    <span className="material-icons task_done">done</span>
                )}
                <span className="complete_task">Compelted tasks</span>
            </li>
            <li
                onClick={() => {
                    set_task_filter(TASK_FILTER.all);
                }}
            >
                {filterType === TASK_FILTER.all && (
                    <span className="material-icons task_done">done</span>
                )}
                <span className="complete_task">All tasks</span>
            </li>
        </ul>
    );
};

const mapStateToProps = (state) => {
    return {
        filterType: state.app.ui_task_filter_type,
    };
};

export default connect(mapStateToProps, {set_task_filter})(FilterTasks);
