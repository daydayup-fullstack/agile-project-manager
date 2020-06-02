import React from "react";
import "./Filterbar.css";

import PopupMenu from "../PopupMenu/PopupMenu";
import FilterTasks from "../FilterBarMenu/FilterTasks";
import FilterFilter from "../FilterBarMenu/FilterFilter";
import FilterSort from "../FilterBarMenu/FilterSort/FilterSort";

const Filterbar = () => {
  const [shouldShow, setShouldShow] = React.useState(false);
  const [anchor, setAnchor] = React.useState({ x: 0, y: 0 });
  const [content, setContent] = React.useState(<></>);

  const handleClick = (e) => {
    setShouldShow(true);
    setAnchor({
      x: e.target.offsetLeft - 3,
      y: e.target.offsetTop + 7,
      width: e.target.clientWidth,
    });
  };

  const dismiss = () => {
    setShouldShow(false);
  };

  function filterByCompletion(e) {
    handleClick(e);
    setContent(<FilterTasks />);
  }

  function filterByDeadline(e) {
    handleClick(e);
    setContent(<FilterFilter />);
  }

  function sortByCriteria(e) {
    handleClick(e);
    setContent(<FilterSort />);
  }

  return (
    <div className="Filterbar">
      <span className="description">Last task completed yesterday</span>
      <button className="Filter_button first" onClick={filterByCompletion}>
        <span className="material-icons task">check_circle_outline</span>All
        Tasks
      </button>
      <button className="Filter_button" onClick={filterByDeadline}>
        <span className="material-icons filter">filter_list</span>Filter
      </button>
      <button className="Filter_button" onClick={sortByCriteria}>
        <span className="material-icons swap">swap_vert</span>Sort
      </button>
      <span className="line">|</span>
      <button className="Filter_button">
        <span className="material-icons rules">launch</span>Rules
      </button>
      <button className="Filter_button">
        <span className="material-icons field">code</span>Fields
      </button>
      <span className={"material-icons more"}>more_horiz</span>

      {shouldShow && (
        <PopupMenu dismiss={dismiss} anchor={anchor}>
          {content}
        </PopupMenu>
      )}
    </div>
  );
};

export default Filterbar;
