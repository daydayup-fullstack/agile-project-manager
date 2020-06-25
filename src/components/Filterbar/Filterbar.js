import React from "react";
import "./Filterbar.css";

import {connect} from "react-redux";
import {show_header_filter_popup} from "../../actions";

const Filterbar = ({show_header_filter_popup, isPopupActive}) => {
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

    return (
        <div className="filterbar">
            <div className="filterbar__description"/>
            <div className="filterbar__controls">
                <button
                    className={`filter_button first ${
                        isPopupActive.shouldShow &&
                        isPopupActive.content === "FilterTasks" &&
                        "active"
                    }`}
                    onClick={filterByCompletion}
                >
                    <span className={`material-icons task`}>check_circle_outline</span>All
                    Tasks
                </button>
                <button
                    className={`filter_button ${
                        isPopupActive.shouldShow &&
                        isPopupActive.content === "FilterFilter" &&
                        "active"
                    }`}
                    onClick={filterByDeadline}
                >
                    <span className={`material-icons filter`}>filter_list</span>Filter
                </button>
                <button
                    className={`filter_button ${
                        isPopupActive.shouldShow &&
                        isPopupActive.content === "FilterSort" &&
                        "active"
                    }`}
                    onClick={sortByCriteria}
                >
                    <span className={`material-icons swap`}>swap_vert</span>Sort
                </button>

            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isPopupActive: state.app.ui_header_filter_popup,
    };
};
export default connect(mapStateToProps, {show_header_filter_popup})(
    Filterbar
);
