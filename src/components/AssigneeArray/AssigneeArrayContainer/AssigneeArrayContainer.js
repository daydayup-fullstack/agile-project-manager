import React from 'react'
import './AssigneeArrayContainer.css'
import { connect } from "react-redux"
import {
    show_task_assignee_scrollable_popup,
    hide_task_assignee_scrollable_popup
} from "../../../actions"
import AssigneeArray from "../AssigneeArray"



export const AssigneeArrayContainer = ({
    assigneeScrollable,
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
        let x;
        let y;

        x = popupItself.current.offsetLeft;
        y = popupItself.current.offsetTop;

        //todo - problem is here

        let childWidth;
        let childHeight;
        // if (header_project_icon_popup.shouldShow) {
        //     childWidth = 268;
        //     childHeight = 345;
        // }

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
    }, [assigneeScrollable.shouldShow, parentAnchor]);

    const calcPosition = () => {
        return { top: `${nextAnchor.y}px`, left: `${nextAnchor.x}px` };
    };
    function dismissNextLevel() {
        setShowNextLevel(false);
    }

    return (
        <div className={"assigneeArrayContainer"} ref={popupItself}>
            {assigneeScrollable.shouldShow && <AssigneeArray workSpace="eRVjCPQdalku7cGBNaBx" />}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        assigneeScrollable: state.app.ui_assignee_scroll_popup
    };
};

export default connect(mapStateToProps, {
    hide_task_assignee_scrollable_popup,
    show_task_assignee_scrollable_popup
})(AssigneeArrayContainer);
