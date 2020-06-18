import React, { Fragment } from 'react'
import Profile from '../../Profile/Profile'
import { connect } from "react-redux";
import {
    set_task_assignee,
    hide_task_assignee_scrollable_popup,
    project_changed,
} from "../../../actions/index";
import { updateTaskToServer } from "../../../apis/api"
import './AssigneeItem.css'
class AssigneeItem extends React.Component {
    state = { user: {} }
    componentDidMount() {
        this.setState({ user: this.props.user })
    }

    handleAssigneeClick = () => {
        this.props.set_task_assignee({ user: this.state.user, assigneeId: this.props.assigneeId });
        this.props.hide_task_assignee_scrollable_popup();

        const updatedTask = {
            ...this.props.project.tasks[this.props.assigneeId],
            assignedUserIds: [this.state.user]
        }
        const updatedProject = {
            ...this.props.project,
            tasks: {
                ...this.props.project.tasks,
                //assigneeId = taskid
                [this.props.assigneeId]: updatedTask,
            }
        }
        this.props.project_changed(updatedProject);
        updateTaskToServer(updatedTask);
    }
    render() {
        const { user } = this.state

        return (
            <div className='assigneeItem' onClick={this.handleAssigneeClick}>
                <span><Profile user={user} /></span>
                <span>{`${user.firstName} ${user.lastName}`}</span>
                <span>{user.email}</span>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        assigneeId: state.app.ui_assignee_scroll_popup.assigneeId,
        project: state.app.ui_assignee_scroll_popup.project,
    };
};

export default connect(mapStateToProps, {
    set_task_assignee,
    hide_task_assignee_scrollable_popup,
    project_changed,
})(AssigneeItem);
