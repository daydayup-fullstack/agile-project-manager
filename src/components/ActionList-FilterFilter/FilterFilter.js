import React from "react";
import {connect} from "react-redux";
import {QUICK_FILTER, set_quick_filter} from "../../actions";

const FilterFilter = ({filterType, set_quick_filter}) => {
    return (
        <div className="FilterFilter">
            <div className={"FilterFilter__title"}>Quick filters</div>
            <ul>
                <li onClick={() => set_quick_filter(QUICK_FILTER.none)}>
                    {filterType === QUICK_FILTER.none && (
                        <span className="material-icons">done</span>
                    )}
                    <span>None</span>
                </li>
                <li onClick={() => set_quick_filter(QUICK_FILTER.myTasks)}>
                    {filterType === QUICK_FILTER.myTasks && (
                        <span className="material-icons">done</span>
                    )}
                    <span>Just my tasks</span>
                </li>
                <li onClick={() => set_quick_filter(QUICK_FILTER.thisWeek)}>
                    {filterType === QUICK_FILTER.thisWeek && (
                        <span className="material-icons">done</span>
                    )}
                    <span>Due this week</span>
                </li>
                <li onClick={() => set_quick_filter(QUICK_FILTER.nextWeek)}>
                    {filterType === QUICK_FILTER.nextWeek && (
                        <span className="material-icons">done</span>
                    )}
                    <span>Due next week</span>
                </li>
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        filterType: state.app.ui_quick_filter_type,
    };
};
export default connect(mapStateToProps, {set_quick_filter})(FilterFilter);
