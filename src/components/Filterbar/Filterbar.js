import React from "react";
import "./Filterbar.css";

import { connect } from "react-redux";
import { 
  show_header_filter_popup,
  } from "../../actions";

const Filterbar = ({ show_header_filter_popup, project, }) => {
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
    <div className="Filterbar">
      <div className="Filterbar__description"/>
      <div className="Filterbar__controls">
        <button className="Filter_button first" onClick={filterByCompletion}>
          <span className="material-icons task">check_circle_outline</span>{project.displayedTasks}
        </button>
        <button className="Filter_button" onClick={filterByDeadline}>
          <span className="material-icons filter">filter_list</span>Filter
        </button>
        <button className="Filter_button" onClick={sortByCriteria}>
          <span className="material-icons swap">swap_vert</span>Sort
        </button>

        {/*<span className={"divider"} />*/}

        {/*<span className={"material-icons more"}>more_horiz</span>*/}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    project: state.project,
  };
};
export default connect(mapStateToProps, { 
  show_header_filter_popup ,
})(
  Filterbar
);
