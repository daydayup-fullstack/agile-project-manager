import React from "react";
import {connect} from "react-redux";
import {set_sorter, SORTER} from "../../actions";

const FilterSort = ({sorterType, set_sorter}) => {
    return (
        <ul className="FilterSort">
            <li onClick={() => set_sorter(SORTER.none)}>
                {sorterType === SORTER.none && (
                    <span className="material-icons">done</span>
                )}
                <span>None</span>
            </li>
            <li onClick={() => set_sorter(SORTER.dueDate)}>
                {sorterType === SORTER.dueDate && (
                    <span className="material-icons">done</span>
                )}
                <span>Due Date</span>
            </li>
            <li onClick={() => set_sorter(SORTER.assignee)}>
                {sorterType === SORTER.assignee && (
                    <span className="material-icons">done</span>
                )}
                <span>Assignee</span>
            </li>
            <li onClick={() => set_sorter(SORTER.alphabetical)}>
                {sorterType === SORTER.alphabetical && (
                    <span className="material-icons">done</span>
                )}
                <span>Alphabetical</span>
            </li>
        </ul>
    );
};

const mapStateToProps = (state) => {
    return {
        sorterType: state.app.ui_sorter_type,
    };
};
export default connect(mapStateToProps, {set_sorter})(FilterSort);
