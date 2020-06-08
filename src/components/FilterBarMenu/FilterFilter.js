import React, { useRef } from "react";
import './FilterSort/FilterSort.css';

const FilterFilter=()=>{
    return (
      <div className={"ActionList_Filter"}>
        <ul>
          <li>
          <span ><h4 className='filter_first'>Quick filters</h4></span></li>
          
          <li><span class="material-icons filter_person">person_outline</span>
          <span ><h4 className='filter_tick'>Just my tasks</h4></span></li>
          <li><span class="material-icons filter_today">calendar_today</span>
          <span><h4 className='filter1week_tick'>Due this week</h4></span></li>
          <li className='filter_edge'><span class="material-icons filter_next">redo</span>
          <span ><h4 className='filter2week_tick'>Due next week</h4></span></li> 
        
          <li className='filter_margin'><span className={"material-icons filter_add"}>add</span >
          <span><h4 className='filter_end'>Custom filter</h4></span></li>
        </ul>
      </div>
      )
};

export default FilterFilter;