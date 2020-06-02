import React from "react";
import "./ActionList.css";
import ColorArray from "../ColorArray/ColorArray";
import IconArray from "../IconArray/IconArray";
import { connect } from "react-redux";
import { add_project_star, remove_project_star } from "../../actions";

const ActionList = ({
  project,
  starredProjects,
  remove_project_star,
  add_project_star,
}) => {
  const expandableAction = React.useRef(null);
  const popupItself = React.useRef(null);
  const nextAction = React.useRef(null);
  const [showNextLevel, setShowNextLevel] = React.useState(false);
  const [nextAnchor, setNextAnchor] = React.useState({ x: 0, y: 0 });
  const [parentAnchor, setParentAnchor] = React.useState({ x: 0, y: 0 });

  function handleMouseOver(e) {
    setParentAnchor({
      x: e.target.offsetParent.offsetLeft,
      y: e.target.offsetParent.offsetTop,
    });
    setShowNextLevel(true);
  }

  React.useEffect(() => {
    const x = expandableAction.current.offsetLeft;
    const y = expandableAction.current.offsetTop;

    // const childWidth = expandableAction.current.clientWidth;
    // const childHeight = expandableAction.current.clientHeight;

    const childWidth = 268;
    const childHeight = 343;

    const rightEdge = window.innerWidth;
    const bottomEdge = window.innerHeight;

    const parentWidth = popupItself.current.clientWidth;
    const parentHeight = popupItself.current.clientHeight;

    let anchor = { x: 0, y: 0 };

    const visualGap_x = 100;
    const visualGap_y = 200;
    // const padding_x = 9;
    const padding_y = 5;

    if (
      parentAnchor.x + x + childWidth + parentWidth >
      rightEdge - visualGap_x
    ) {
      // x-axis - over screen
      anchor.x = x - childWidth;
    } else {
      // x-axis - within screen
      anchor.x = x + parentWidth + 1;
    }

    if (parentAnchor.y + y + parentHeight > bottomEdge - visualGap_y) {
      //y-axis - over screen
      anchor.y =
        y - padding_y - childHeight + expandableAction.current.clientHeight;
    } else {
      // y-asix - within screen
      anchor.y = y - padding_y;
    }

    setNextAnchor(anchor);
  }, [parentAnchor]);

  const calcPosition = () => {
    return { top: `${nextAnchor.y}px`, left: `${nextAnchor.x}px` };
  };

  function dismissNextLevel() {
    setShowNextLevel(false);
  }

  const Arrow = () => (
    <i className={"material-icons-outlined"}>keyboard_arrow_right</i>
  );

  // const DefaultList = () => {
  //   return (
  //       <ul>
  //         <li onMouseOver={dismissNextLevel}>Mark Complete</li>
  //
  //         <li onMouseOver={handleMouseOver} ref={expandableAction}>
  //           Choose cover image <Arrow/>
  //         </li>
  //         <li onMouseOver={dismissNextLevel}>Copy task link</li>
  //         <li onMouseOver={dismissNextLevel}>Duplicate Task...</li>
  //         <li onMouseOver={dismissNextLevel}>Delete</li>
  //         {showNextLevel && (
  //             //missing ref
  //             <li className={"nextLevel"} style={calcPosition()} ref={nextAction}>
  //               next level
  //             </li>
  //         )}
  //       </ul>
  //   );
  // };

  const ProjectCardPopup = () => {
    // const height = 343;
    return (
      <ul>
        <li onMouseOver={handleMouseOver} ref={expandableAction}>
          Set Color & Icon <Arrow />
        </li>
        <li
          onMouseOver={dismissNextLevel}
          onClick={() => {
            if (starredProjects.indexOf(project.id) >= 0) {
              remove_project_star(project);
            } else {
              add_project_star(project);
            }
          }}
        >
          {starredProjects.indexOf(project.id) < 0
            ? "Add to Favorites"
            : "Remove from Favorites"}
        </li>
        <li onMouseOver={dismissNextLevel}>Edit Name & Description...</li>
        <li onMouseOver={dismissNextLevel}>Copy Project Link</li>
        <li onMouseOver={dismissNextLevel}>Share</li>
        {showNextLevel && (
          <li className={"nextLevel"} style={calcPosition()} ref={nextAction}>
            <ColorArray colorIndex={project.colorIndex} />
            <IconArray
              iconIndex={project.iconIndex}
              colorIndex={project.colorIndex}
            />
          </li>
        )}
      </ul>
    );
  };

  return (
    <div className={"ActionList"} ref={popupItself}>
      <ProjectCardPopup />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    starredProjects: state.user.starredProjects,
    project: state.project,
  };
};

export default connect(mapStateToProps, {
  remove_project_star,
  add_project_star,
})(ActionList);
