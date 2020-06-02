import React from "react";
import "./ProjectCard.css";
import { colors, iconNames } from "../../model/model";
import Profile from "../Profile/Profile";
import { db_users } from "../../data/database";
import { Link } from "react-router-dom";
import {
  add_project_star,
  project_selected,
  remove_project_star,
  show_projectCard_popup,
} from "../../actions";
import { connect } from "react-redux";

const ProjectCard = ({
  project,
  starred,
  show_projectCard_popup,
  remove_project_star,
  add_project_star,
  project_selected,
}) => {
  const [starHover, setStarHover] = React.useState(false);
  const [moreButtonHover, setMoreButtonHover] = React.useState(false);

  function showPopup(e) {
    project_selected(project);
    show_projectCard_popup({
      shouldShow: true,
      anchor: {
        x: e.clientX - 10,
        y: e.clientY - 16,
        width: e.target.clientWidth,
      },
    });
  }

  function toggleStar() {
    if (starred) {
      remove_project_star(project);
    } else {
      add_project_star(project);
    }
  }

  const determineLink = () => {
    // focusing on icons, then stay in current path
    if (starHover || moreButtonHover) {
      return `/home`;
    }
    // otherwise, go to next level route
    return `/project/${project.id}`;
  };

  return (
    <Link
      to={determineLink()}
      style={{ textDecoration: "none", color: "#151b26" }}
    >
      <div className={`ProjectCard`}>
        <div
          className="card"
          style={{ background: colors[project.colorIndex] }}
        >
          <span
            className={"material-icons"}
            onMouseOver={() => setStarHover(true)}
            onMouseLeave={() => setStarHover(false)}
            onClick={toggleStar}
            // style={holdHover ? { opacity: 1 } : {}}
          >
            {starHover || starred ? "star" : "star_border"}
          </span>
          <div className={"material-icons-two-tone themeIcon"}>
            {iconNames[project.iconIndex]}
          </div>
          <span
            className={"material-icons"}
            onClick={showPopup}
            onMouseOver={() => setMoreButtonHover(true)}
            onMouseLeave={() => setMoreButtonHover(false)}
            // style={holdHover ? { opacity: 1, color: "#fff" } : {}}
          >
            more_horiz
          </span>

          <ul
            className={"profile-container"}
            // style={holdHover ? { opacity: 1 } : {}}
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
    </Link>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {
  show_projectCard_popup,
  add_project_star,
  remove_project_star,
  project_selected,
})(ProjectCard);
