import React from "react";
import "./Filterbar.css";
import {connect} from "react-redux";
import {
    QUICK_FILTER,
    show_header_filter_popup,
    SORTER,
    TASK_FILTER,
} from "../../actions";

const Filterbar = ({
                       show_header_filter_popup,
                       isPopupActive,
                       sorterType,
                       user,
                       quickFilterType,
                       taskFilterType,
                   }) => {
    const getAnchor = (e) => {
        const anchor = {
            x: e.target.offsetLeft,
            y: e.target.offsetTop + e.target.clientHeight / 2,
            width: e.target.clientWidth,
            height: e.target.clientHeight,
        };
        return anchor;
    };

    function filterByCompletion(e) {
        show_header_filter_popup({
            anchor: getAnchor(e),
            content: "FilterTasks",
        });
    }

    function filterByDeadline(e) {
        show_header_filter_popup({
            anchor: getAnchor(e),
            content: "FilterFilter",
        });
    }

    function sortByCriteria(e) {
        show_header_filter_popup({
            anchor: getAnchor(e),
            content: "FilterSort",
        });
    }

    function renderTaskFilterName() {
        switch (taskFilterType) {
            case TASK_FILTER.completed: {
                return "Completed tasks";
            }
            case TASK_FILTER.incomplete: {
                return "Incompleted tasks";
            }
            default: {
                return "All tasks";
            }
        }
    }

    function renderQuickFilterName() {
        switch (quickFilterType) {
            case QUICK_FILTER.nextWeek: {
                return `Filter: Next week`;
            }
            case QUICK_FILTER.thisWeek: {
                return `Filter: This week`;
            }
            case QUICK_FILTER.myTasks: {
                return `Filter: ${user.firstName}`;
            }
            default: {
                return `Filter`;
            }
        }
    }

    function renderSorterName() {
        switch (sorterType) {
            case SORTER.dueDate: {
                return "Sort: Due date";
            }
            case SORTER.assignee: {
                return "Sort: Assignee";
            }
            case SORTER.alphabetical: {
                return "Sort: Alphabetical";
            }
            default:
                return "Sort";
        }
    }

    return (
        <div className="filterbar">
            <div className="filterbar__description"/>
            <div className="filterbar__controls">
                <button
                    className={`filter_button first ${
                        isPopupActive.shouldShow &&
                        isPopupActive.content === "FilterTasks" &&
                        "active"
                    } ${taskFilterType !== TASK_FILTER.all && "activated"}`}
                    onClick={filterByCompletion}
                >
                    <span className={`material-icons task`}>check_circle_outline</span>
                    {renderTaskFilterName()}
                </button>
                <button
                    className={`filter_button ${
                        isPopupActive.shouldShow &&
                        isPopupActive.content === "FilterFilter" &&
                        "active"
                    } ${quickFilterType !== QUICK_FILTER.none && "activated"}`}
                    onClick={filterByDeadline}
                >
                    <span className={`material-icons filter`}>filter_list</span>
                    {renderQuickFilterName()}
                </button>
                <button
                    className={`filter_button 
                    ${
                        isPopupActive.shouldShow &&
                        isPopupActive.content === "FilterSort" &&
                        "active"
                    }
                    ${sorterType !== SORTER.none && "activated"} `}
                    onClick={sortByCriteria}
                >
                    <span className={`material-icons swap`}>swap_vert</span>
                    {renderSorterName()}
                </button>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isPopupActive: state.app.ui_header_filter_popup,
        taskFilterType: state.app.ui_task_filter_type,
        quickFilterType: state.app.ui_quick_filter_type,
        sorterType: state.app.ui_sorter_type,
        user: state.user,
    };
};
export default connect(mapStateToProps, {show_header_filter_popup})(
    Filterbar
);
