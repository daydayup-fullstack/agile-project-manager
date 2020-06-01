import React from "react";
import "./ActionList.css";

const ActionList = () => {
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
        <li onMouseOver={dismissNextLevel}>Mark Complete</li>
        <li onMouseOver={handleMouseOver} ref={expandableAction}>
          Choose cover image{" "}
          <span className={"material-icons-outlined"}>
            keyboard_arrow_right
          </span>
        </li>
        <li onMouseOver={dismissNextLevel}>Copy task link</li>
        <li onMouseOver={dismissNextLevel}>Duplicate Task...</li>
        <li onMouseOver={dismissNextLevel}>Delete</li>
        {showNextLevel && (
          <li className={"nextLevel"} style={calcStyle()} ref={nextAction}>
            next level
          </li>
        )}
      </ul>
    </div>
  );
};

export default ActionList;
