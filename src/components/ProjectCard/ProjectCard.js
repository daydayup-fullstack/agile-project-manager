import React from "react";
import "./ProjectCard.css";
import {colors, iconNames} from "../../model/model";
import {Link} from "react-router-dom";
import {
    add_project_star,
    project_selected,
    remove_project_star,
    show_projectCard_popup,
} from "../../actions";
import {connect} from "react-redux";
import {updateUserToServer} from "../../apis/api";

const ProjectCard = ({
                         project,
                         starred,
                         show_projectCard_popup,
                         remove_project_star,
                         add_project_star,
                         project_selected,
                         currentUser,
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
            // update user
            let starredProjects = currentUser.starredProjects;
            const update = starredProjects.filter((id) => id !== project.id);
            updateUserToServer({
                ...currentUser,
                starredProjects: update,
            });
        } else {
            add_project_star(project);
            // update user
            let starredProjects = currentUser.starredProjects;
            const update = [...starredProjects, project.id];
            updateUserToServer({
                ...currentUser,
                starredProjects: update,
            });
        }
    }

    const determineLink = () => {
        // focusing on icons, then stay in current path
        if (starHover || moreButtonHover) {
            return `/home`;
        }
        // otherwise, go to next level route
        return `/projects/${project.id}`;
    };

    return (
        <Link
            to={determineLink()}
            style={{textDecoration: "none", color: "#151b26"}}
        >
            <div className={`ProjectCard`} onClick={() => project_selected(project)}>
                <div
                    className="card"
                    style={{background: colors[project.colorIndex]}}
                >
          <span
              className={"material-icons"}
              onMouseOver={() => setStarHover(true)}
              onMouseLeave={() => setStarHover(false)}
              onClick={toggleStar}
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
                    >
            more_horiz
          </span>

          </div>
          <span className={"title"}>{project.name}</span>
          {/*{currentUser.privateProjects &&*/}
          {/*currentUser.privateProjects.length !== 0 &&*/}
          {/*currentUser.privateProjects.indexOf(project.id) >= 0 && (*/}
          {/*    <div className={"private-project-indicator"}>*/}
          {/*      <span className={"material-icons"}>lock</span>*/}
          {/*      <span>Private</span>*/}
          {/*    </div>*/}
          {/*)}*/}
        </div>
      </Link>
  );
};

const mapStateToProps = (state) => {
    return {
        currentUser: state.user,
    };
};

export default connect(mapStateToProps, {
    show_projectCard_popup,
    add_project_star,
    remove_project_star,
    project_selected,
})(ProjectCard);
