import React from "react";
import {colorInOrder} from "../ColorArray/ColorArray";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {nav_link_clicked} from "../../actions";

const Favorites = ({projects, nav_link_clicked, section, indexSelected}) => {
    const [shouldExpand, setShouldExpand] = React.useState(true);
    const getProjectColor = (project) => ({
        backgroundColor: colorInOrder[project.colorIndex],
    });

    function handleClick(index) {
        nav_link_clicked({section: "favorites", index: index});
    }

    return (
        <>
            <header onClick={() => setShouldExpand(!shouldExpand)}>
                Favorites{" "}
                <span className={"material-icons"}>
          {shouldExpand ? "keyboard_arrow_up" : "keyboard_arrow_down"}
        </span>
            </header>
            <ul className={`projectList ${shouldExpand && "projectList--open"}`}>
                {projects.map((project, index) => (
                    <li key={project.id}>
                        <Link
                            className={`project ${
                                section === "favorites" && indexSelected === index && "active"
                            }`}
                            exact
                            to={`/projects/${project.id}`}
                            style={{textDecoration: "none"}}
                            activeStyle={{background: "rgba(111, 119, 130, 0.5)"}}
                            onClick={() => handleClick(index)}
                        >
                            <div
                                className={"project__color"}
                                style={getProjectColor(project)}
                            />
                            <span className={"project__name"}>{project.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        section: state.app.ui_navlink_selector.section,
        indexSelected: state.app.ui_navlink_selector.index,
    };
};

export default connect(mapStateToProps, {nav_link_clicked})(Favorites);
