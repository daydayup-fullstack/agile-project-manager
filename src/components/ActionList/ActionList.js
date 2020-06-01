import React from "react";
import "./ActionList.css";
import ColorArray from "../ColorArray/ColorArray";
import IconArray from "../IconArray/IconArray";
import { connect } from "react-redux";

const ActionList = ({ project }) => {
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

  const calcPosition = () => {
    return { top: `${nextAnchor.y}px`, left: `${nextAnchor.x}px` };
  };

  function dismissNextLevel() {
    setShowNextLevel(false);
  }

  const Arrow = () => (
    <i className={"material-icons-outlined"}>keyboard_arrow_right</i>
  );

  const DefaultList = () => {
    return (
      <ul>
        <li onMouseOver={dismissNextLevel}>Mark Complete</li>
        <li onMouseOver={handleMouseOver} ref={expandableAction}>
          Choose cover image <Arrow />
        </li>
        <li onMouseOver={dismissNextLevel}>Copy task link</li>
        <li onMouseOver={dismissNextLevel}>Duplicate Task...</li>
        <li onMouseOver={dismissNextLevel}>Delete</li>
        {showNextLevel && (
          <li className={"nextLevel"} style={calcPosition()} ref={nextAction}>
            next level
          </li>
        )}
      </ul>
    );
  };

  const ProjectCardPopup = () => {
    return (
      <ul>
        <li onMouseOver={handleMouseOver} ref={expandableAction}>
          Set Color & Icon <Arrow />
        </li>
        <li onMouseOver={dismissNextLevel}>Remove from Favorites</li>
        <li onMouseOver={dismissNextLevel}>Edit Name & Description...</li>
        <li onMouseOver={dismissNextLevel}>Copy Project Link</li>
        <li onMouseOver={dismissNextLevel}>Share</li>
        {showNextLevel && (
          <li className={"nextLevel"} style={calcPosition()} ref={nextAction}>
            <ColorArray colorIndex={project.colorIndex} />
            <IconArray iconIndex={project.iconIndex} colorIndex={project.colorIndex}/>
          </li>
        )}
      </ul>
    );
  };

  return (
    <div className={"ActionList"}>
      <ProjectCardPopup />
    </div>
  );
};

const mapStateToProps = (state) => {
    console.log(state);
  return {
    project: state.project,
  };
};

export default connect(mapStateToProps, {})(ActionList);
