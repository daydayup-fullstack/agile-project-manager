import React, { useRef } from "react";
import './FilterSort/FilterSort.css';

const FilterFilter=()=>{
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

export default FilterFilter;