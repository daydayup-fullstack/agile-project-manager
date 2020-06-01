import React from "react";
import "./ProjectCard.css";
import { colors } from "../../model/model";
import Profile from "../Profile/Profile";
import { db_users } from "../../data/database";
import { Link } from "react-router-dom";
import {
  add_project_star,
  remove_project_star,
  show_projectCard_popup,
} from "../../actions";
import { connect } from "react-redux";

const ProjectCard = ({
  project,
  starred,
  show_projectCard_popup,
  shouldHold,
  remove_project_star,
  add_project_star,
}) => {
  const [hover, setHover] = React.useState(false);
  const [holdHover, setHoldHover] = React.useState(false);

  function showPopup(e) {
    show_projectCard_popup({
      shouldShow: true,
      anchor: {
        x: e.clientX - 10,
        y: e.clientY - 16,
        width: e.target.clientWidth,
      },
    });
    setHoldHover(true);
  }

  function toggleStar() {
    if (starred) {
      remove_project_star(project);
    } else {
      add_project_star(project);
    }
  }

  return (
    // <Link to={`/project/${project.id}`}>
    <div
      className={`ProjectCard ${
        holdHover && shouldHold && "ProjectCard--holdHover"
      }`}
    >
      <div className="card" style={{ background: colors[project.colorIndex] }}>
        <span
          className={"material-icons"}
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={toggleStar}
          style={holdHover && shouldHold ? { opacity: 1 } : {}}
        >
          {hover || starred ? "star" : "star_border"}
        </span>
        <div className={"material-icons-two-tone themeIcon"}>fireplace</div>
        <span
          className={"material-icons"}
          onClick={showPopup}
          style={holdHover && shouldHold ? { opacity: 1, color: "#fff" } : {}}
        >
          more_horiz
        </span>

        <ul
          className={"profile-container"}
          style={holdHover && shouldHold ? { opacity: 1 } : {}}
        >
          <li>
            <Profile user={db_users["user-scott"]} />
          </li>

          <li>
            <Profile user={db_users["user-scott"]} />
          </li>

          <li>
            <Profile user={db_users["user-scott"]} />
          </li>
        </ul>
      </div>
      <span className={"title"}>{project.name}</span>
    </div>
    // </Link>
  );
};

const mapStateToProps = (state) => {
  return {
    shouldHold: state.app.ui_projectCard_popup.shouldShow,
  };
};

export default connect(mapStateToProps, {
  show_projectCard_popup,
  add_project_star,
  remove_project_star,
})(ProjectCard);
