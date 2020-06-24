import React from "react";
import "./ActionList.css";

import {connect} from "react-redux";
import {
    add_project_star,
    change_workspace,
    delete_project,
    logout_user,
    project_changed,
    remove_project_star,
    show_profile_settings,
} from "../../actions";
import ProjectCardPopup from "../ActionList-ProjectCardPopup/ProjectCardPopup";
import ColumnPopup from "../ActionList-ColumnPopup/ColumnPopup";
import ProfilePopup from "../ActionList-ProfilePopup/ProfilePopup";
import ProjectIconPopup from "../ActionList-ProjectIconPopup/ProjectIconPopup";
import TaskcardContextPopup from "../ActionList-TaskcardContextPopup/TaskcardContextPopup";

const ActionList = ({
                        project,
                        starredProjects,
                        remove_project_star,
                        add_project_star,
                        projectCard_popup,
                        header_project_icon_popup,
                        header_project_info_popup,
                        header_profile_popup,
                        taskcard_context_menu,
                        currentWorkspace,
                        user,
                        header_filter_popup,
                        column_popup,
                        project_changed,
                        delete_project,
                        logout_user,
                        change_workspace,
                        show_profile_settings,
                    }) => {
    const expandableAction = React.useRef(null);
    const popupItself = React.useRef(null);
    const nextAction = React.useRef(null);
    const [showNextLevel, setShowNextLevel] = React.useState(false);
    const [nextAnchor, setNextAnchor] = React.useState({x: 0, y: 0});
    const [parentAnchor, setParentAnchor] = React.useState({x: 0, y: 0});

    const calcPosition = () => {
        return {top: `${nextAnchor.y}px`, left: `${nextAnchor.x}px`};
    };

    React.useEffect(() => {
        let x;
        let y;

        x = popupItself.current.offsetLeft;
        y = popupItself.current.offsetTop;

        //todo - problem is here

        let childWidth;
        let childHeight;
        if (header_project_icon_popup.shouldShow) {
            childWidth = 268;
            childHeight = 345;
        }

        const rightEdge = window.innerWidth;
        const bottomEdge = window.innerHeight;

        const parentWidth = popupItself.current.clientWidth;
        const parentHeight = popupItself.current.clientHeight;

        let anchor = {x: 0, y: 0};

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
    }, [header_project_icon_popup.shouldShow, parentAnchor]);

    function dismissNextLevel() {
        setShowNextLevel(false);
    }

    const FilterTasks = () => {
        return (
            <ul className={"FilterTasks"}>
                <li>
                    <span className="material-icons task_done">done</span>
                    <span className="task_tick">
            <span>Incomplete tasks</span>
          </span>
                </li>
                <li ref={expandableAction} className={"expandableItem"}>
                    <span className="complete_task">Compelte tasks</span>
                </li>
                <li>
                    <span className="complete_task">All tasks</span>
                </li>
            </ul>
        );
    };

    const FilterFilter = () => {
        return (
            <div className="FilterFilter">
                <div className={"FilterFilter__title"}>Quick filters</div>
                <ul>
                    <li>
                        <span className="material-icons filter_person">person_outline</span>
                        <span className="filter_tick">
              <span>Just my tasks</span>
            </span>
                    </li>
                    <li>
                        <span className="material-icons filter_today">calendar_today</span>
                        <span className="filter_tickweek">
              <span>Due this week</span>
            </span>
                    </li>
                    <li className="filter_edge">
                        <span className="material-icons filter_next">redo</span>
                        <span className="filter_ticknext">
              <span>Due next week</span>
            </span>
                    </li>

                    <li className="filter_margin">
                        <span className={"material-icons filter_add"}>add</span>
                        <span className="filter_end">
              <span>Custom filter</span>
            </span>
                    </li>
                </ul>
            </div>
        );
    };

    const FilterSort = () => {
        return (
            <ul className="FilterSort">
                <li>
                    <span className="material-icons sort_done">done</span>
                    <span className="sort_tick">
            <span>None</span>
          </span>
                </li>
                <li>
          <span>
            <span className="Sort_list">Due Date</span>
          </span>
                </li>
                <li>
          <span>
            <span className="Sort_list">Assignee</span>
          </span>
                </li>
                <li>
          <span>
            <span className="Sort_list">Likes</span>
          </span>
                </li>
                <li>
          <span>
            <span className="Sort_list">Alphabetical</span>
          </span>
                </li>
            </ul>
        );
    };

    //todo - refactor this after filter functionality implemented
    const determineContent = () => {
        if (header_filter_popup.content === "FilterTasks") {
            return <FilterTasks/>;
        }

        if (header_filter_popup.content === "FilterFilter") {
            return <FilterFilter/>;
        }
        if (header_filter_popup.content === "FilterSort") {
            return <FilterSort/>;
        }
    };

    const projectCardPopupProps = {
        nextAction,
        showNextLevel,
        setShowNextLevel,
        setParentAnchor,
        project,
        calcPosition,
        dismissNextLevel,
        expandableAction,
        currentWorkspace,
        starredProjects,
        remove_project_star,
        add_project_star,
        delete_project,
    };
    const columnPopupProps = {project, project_changed, column_popup};
    const profilePopupProps = {
        currentWorkspace,
        user,
        change_workspace,
        dismissNextLevel,
        show_profile_settings,
        logout_user,
    };

    const taskcardContextPopupProps = {taskcard_context_menu, project_changed};

    return (
        <div className={"ActionList"} ref={popupItself}>
            {column_popup.shouldShow && <ColumnPopup {...columnPopupProps} />}
            {projectCard_popup.shouldShow && (
                <ProjectCardPopup {...projectCardPopupProps} />
            )}
            {header_project_info_popup.shouldShow && (
                <ProjectCardPopup {...projectCardPopupProps} />
            )}
            {header_profile_popup.shouldShow && (
                <ProfilePopup {...profilePopupProps} />
            )}
            {header_project_icon_popup.shouldShow && (
                <ProjectIconPopup project={project}/>
            )}
            {header_filter_popup.shouldShow && determineContent()}
            {taskcard_context_menu.shouldShow && (
                <TaskcardContextPopup {...taskcardContextPopupProps} />
            )}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        starredProjects: state.user.starredProjects,
        project: state.project,
        projectCard_popup: {
            shouldShow: state.app.ui_projectCard_popup.shouldShow,
        },
        header_project_icon_popup: {
            shouldShow: state.app.ui_header_project_icon_popup.shouldShow,
        },
        header_project_info_popup: {
            shouldShow: state.app.ui_header_project_info_popup.shouldShow,
        },
        header_profile_popup: {
            shouldShow: state.app.ui_header_profile_popup.shouldShow,
        },
        header_filter_popup: {
            shouldShow: state.app.ui_header_filter_popup.shouldShow,
            content: state.app.ui_header_filter_popup.content,
        },
        taskcard_context_menu: {
            shouldShow: state.app.ui_taskcard_context_menu.shouldShow,
            task: state.app.ui_taskcard_context_menu.task,
            columnId: state.app.ui_taskcard_context_menu.columnId,
            project: state.app.ui_taskcard_context_menu.project,
        },
        column_popup: {
            shouldShow: state.app.ui_column_popup.shouldShow,
            column: state.app.ui_column_popup.column,
        },
        currentWorkspace: state.workspace,
        user: state.user,
    };
};

export default connect(mapStateToProps, {
    project_changed,
    remove_project_star,
    add_project_star,
    delete_project,
    change_workspace,
    logout_user,
    show_profile_settings,
})(ActionList);
