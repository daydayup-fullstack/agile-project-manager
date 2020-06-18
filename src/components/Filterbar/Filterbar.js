import React from "react";
import "./Filterbar.css";
import { connect } from "react-redux";
import { show_header_filter_popup } from "../../actions";


const Filterbar = ({ show_header_filter_popup,show}) => {
  const getAnchor = (e) => {
    const anchor = {
      x: e.target.offsetLeft,
      y: e.target.offsetTop + e.target.clientHeight / 2,
      width: e.target.clientWidth,
      height: e.target.clientHeight,
    };
    return anchor;
  };
  // const [showMyName,setshowMyName]=React.useState(false);

  // const show=()=> {    //toggle函数控制filter名字
  //   return showMyName ? setshowMyName(false):setshowMyName(true); 
   
  // }
  function filterByCompletion(e) {
    show_header_filter_popup({
      anchor: getAnchor(e),
      content: "FilterTasks",
    });
  }

  function filterByDeadline(e) {
    show_header_filter_popup({
      anchor: getAnchor(e),
      content: 'FilterFilter',
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
        <button className="Filterbar_button" onClick={filterByCompletion}>
          <span className="material-icons filter_icon">check_circle_outline</span>All
          Tasks
        </button>
        <button className="Filterbar_button" onClick={filterByDeadline}>
          <span className="material-icons">filter_list</span>
          {show}
        </button>
        <button className="Filterbar_button" onClick={sortByCriteria}>
          <span className="material-icons">swap_vert</span>Sort
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
    showMyName:state.showMyName
  };
};
export default connect(mapStateToProps, { show_header_filter_popup })(
  Filterbar
);
