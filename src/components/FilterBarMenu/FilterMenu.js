import React, { useEffect, useState } from "react";
import "./FilterSort/FilterSort.css";
import PopupMenu from "../PopupMenu/PopupMenu";


const styles = {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
    padding: "0.5rem"
    
};
 

const Display = ({ children }) => {
  const [shouldShow, setShouldShow] = React.useState(false);
  const [anchor, setAnchor] = React.useState({ x: 0, y: 0 });

  const handleClickSort = (e) => {
    setShouldShow(true);
    setAnchor({
      x: e.target.offsetLeft,
      y: e.target.offsetTop,
      width: e.target.clientWidth,
    });
    return (
      <div className={"ActionList_Sort"}>
        <ul>
          <li ><span className="material-icons sort_done" >done</span>
            <span className='sort_tick'><h4>None</h4></span></li>
          <li ><span ><h4 className='Sort_list'>Due Date</h4></span></li>
          <li ><span ><h4 className='Sort_list'>Assignee</h4></span></li>
          <li ><span ><h4 className='Sort_list'>Likes</h4></span></li>
          <li ><span ><h4 className='Sort_list'>Alphabetical</h4></span></li>
        </ul>
      </div>
    );
  };

  const handleClickFilter = (e) => {
    setShouldShow(true);
    setAnchor({
      x: e.target.offsetLeft,
      y: e.target.offsetTop,
      width: e.target.clientWidth,
    });
    return (
      <div className={"ActionList_Filter"}>
        <ul>
          <li>
          <span className='filter_first'><h4 >Quick filters</h4></span></li>
          
          <li><span class="material-icons filter_person">person_outline</span>
          <span className='filter_tick'><h4>Just my tasks</h4></span></li>
          <li><span class="material-icons filter_today">calendar_today</span>
          <span className='filter_tickweek'><h4>Due this week</h4></span></li>
          <li className='filter_edge'><span class="material-icons filter_next">redo</span>
          <span className='filter_ticknext'><h4>Due next week</h4></span></li> 
        
          <li className='filter_margin'><span className={"material-icons filter_add"}>add</span >
          <span className='filter_end'><h4>Custom filter</h4></span></li>
        </ul>
      </div>
      )
    };

    // const handleClickTasks = (e) => {
    //   setShouldShow(true);
    //   setAnchor({
    //     x: e.target.offsetLeft,
    //     y: e.target.offsetTop,
    //     width: e.target.clientWidth,
    //   });
    //   return (
    //     <div className={"ActionList_Filter"}>
    //       <ul>
    //         <li>
    //         <span className='filter_first'><h4 >Quick filters</h4></span></li>
            
    //         <li><span class="material-icons filter_person">person_outline</span>
    //         <span className='filter_tick'><h4>Just my tasks</h4></span></li>
    //         <li><span class="material-icons filter_today">calendar_today</span>
    //         <span className='filter_tickweek'><h4>Due this week</h4></span></li>
    //         <li className='filter_edge'><span class="material-icons filter_next">redo</span>
    //         <span className='filter_ticknext'><h4>Due next week</h4></span></li> 
          
    //         <li className='filter_margin'><span className={"material-icons filter_add"}>add</span >
    //         <span className='filter_end'><h4>Custom filter</h4></span></li>
    //       </ul>
    //     </div>
    //     )
    //   };


  const dismiss = () => {
    setShouldShow(false);
  };

  return (
    <div style={styles}>
      <span className='description'>Last task completed yesterday</span>
      <button className='Filter_button first' onClick={handleClickFilter}>
        <span className="material-icons task">check_circle_outline</span>All Tasks
      </button>  
      <button className='Filter_button' onClick={handleClickFilter}>
        <span class="material-icons filter">filter_list</span>Filter
      </button> 
      <button className='Filter_button' onClick={handleClickSort}>
        <span class="material-icons swap">swap_vert</span>Sort
      </button>
      <span className='line'>
        |
      </span>
      <button className='Filter_button' >
        <span class="material-icons rules">launch</span>Rules
      </button>
      <button className='Filter_button'>
        <span class="material-icons field">code</span>Fields
      </button>
      <span className={"material-icons more"}>
      more_horiz
      </span>
      {shouldShow && (
      <PopupMenu dismiss={dismiss} anchor={anchor}>
        {children}
      </PopupMenu>
    )}
    </div>
  );
};

export default Display;
