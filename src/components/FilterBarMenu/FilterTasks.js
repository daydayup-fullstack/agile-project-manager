import React, { useRef } from "react";
import './FilterSort/FilterSort.css';


const FilterTasks=()=>{
  const expandableAction = React.useRef(null);
  const nextAction = React.useRef(null);
  const [showNextLevel, setShowNextLevel] = React.useState(false);
  const [nextAnchor, setNextAnchor] = React.useState({ x: 0, y: 0 });
  const [parentX, setParentX] = React.useState(0);

  function handleMouseOver(e) {
    setParentX(e.target.offsetParent.offsetLeft);
    setShowNextLevel(true);
  }

  React.useEffect(() => {
    const x = expandableAction.current.offsetLeft;
    const y = expandableAction.current.offsetTop;
    const width = expandableAction.current.clientWidth;
    const rightEdge = window.innerWidth;

    if (parentX + x + width + 150 > rightEdge) {
      setNextAnchor({ x: x - 150, y: y });
    } else {
      setNextAnchor({ x: x + width, y: y });
    }
  }, [parentX]);

  const calcStyle = () => {
    return { top: `${nextAnchor.y}px`, left: `${nextAnchor.x}px` };
  };

  function dismissNextLevel() {
    setShowNextLevel(false);
  }
    return (
      <div className={"ActionList"}>
        <ul>
        <li onMouseOver={dismissNextLevel}>
          <span className="material-icons task_done" >done</span>
          <span ><h4 className='task_tick'>Incomplete tasks</h4></span></li>
        <li onMouseOver={handleMouseOver} ref={expandableAction}>
          <span ><h4 className='complete_tick'>Compelte tasks</h4></span>{" "}
          <span className={"material-icons-outlined"}>
            keyboard_arrow_right
          </span>
        </li>
        <li onMouseOver={dismissNextLevel}>
          <span ><h4 className='all_tick'>All tasks</h4></span></li>
        {showNextLevel && (
          <div className='nextLevel' style={calcStyle()} ref={nextAction}>
          <ul className='nextLevel_text'>
              <li onMouseOver={handleMouseOver}>All compelted tasks</li>
              <li onMouseOver={handleMouseOver}>Marked Compelte since:</li>
              <li onMouseOver={handleMouseOver}>Today</li>
              <li onMouseOver={handleMouseOver}>Yesterday</li>
              <li onMouseOver={handleMouseOver}>1 week</li>
              <li onMouseOver={handleMouseOver}>2 weeks</li>
              <li onMouseOver={handleMouseOver}>3 weeks</li>
            </ul>
          </div>
        )}
      </ul>
      </div>
    );
};

export default FilterTasks;

