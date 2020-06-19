import React from "react";
import "./Home.css";
import Panel from "../../components/Panel/Panel";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import AddProjectCard from "../../components/AddProjectCard/AddProjectCard";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

const Home = ({starredProjects, projects}) => {
    const favorites = projects.filter((project) => {
        if (project) {
            return starredProjects.indexOf(project.id) >= 0;
        } else {
            return null;
        }
    });

    return (
        <div className={"App-Home"}>
            {starredProjects && starredProjects.length > 0 && (
                <Panel panelName={"Favorites"}>
                    {favorites.map((project) => (
                        <ProjectCard project={project} starred={true} key={project.id}/>
                    ))}
                </Panel>
            )}
            <Panel panelName={"Recent Projects"}>
                {projects.map((project) => {
                    if (project) {
                        return (
                            <ProjectCard
                                project={project}
                                starred={project && starredProjects.indexOf(project.id) >= 0}
                                key={project.id}
                            />
                        );
                    } else {
                        return null;
                    }
                })}
                <Link to={"/create-project"}>
                    <AddProjectCard/>
                </Link>
            </Panel>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        starredProjects: state.user.starredProjects,
        projects: state.allProjects,
    };
};

export default connect(mapStateToProps, {})(Home);
