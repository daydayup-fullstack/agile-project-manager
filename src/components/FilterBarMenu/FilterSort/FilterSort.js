import React, { useRef } from "react";
import './FilterSort.css';

export const FilterSort=()=>{
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



export default FilterSort;





   