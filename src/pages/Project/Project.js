import React from "react";
import "./Project.css";
import {useParams} from "react-router-dom";
import Kanban from "../../components/Kanban/Kanban";
import {connect} from "react-redux";
import {project_selected, set_scroll_left} from "../../actions";

const Project = ({allProjects, project_selected, set_scroll_left}) => {
    const {id} = useParams();
    const scrollRef = React.useRef(null);

    React.useEffect(() => {
        const project = allProjects.filter((p) => {
            if (p) {
                return p.id === id;
            } else {
                return null;
            }
        });

        if (project && project.length > 0) {
            project_selected(project[0]);
        }

        // todo - call action to load project details here

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    React.useEffect(() => {
        const handleScroll = (e) => {
            set_scroll_left(e.target.scrollLeft);
        };

        const scrollable = scrollRef.current;
        scrollable.addEventListener("scroll", handleScroll);

        return () => {
            scrollable.removeEventListener("scroll", handleScroll);
            set_scroll_left(0);
        };
    }, [set_scroll_left]);

    return (
        <div className={"App-Project"} ref={scrollRef}>
            <Kanban/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        allProjects: state.allProjects,
    };
};

export default connect(mapStateToProps, {project_selected, set_scroll_left})(
    Project
);
