import React, { Fragment } from 'react'
import Profile from '../../Profile/Profile'
import { connect } from "react-redux";
import {
    set_task_assignee,
    hide_task_assignee_scrollable_popup
} from "../../../actions/index";
import './AssigneeItem.css'
class AssigneeItem extends React.Component {
    state = { user: {} }

    componentDidMount() {
        this.setState({ user: this.props.user })
    }

    render() {
        const { user } = this.state
        const { assigneeId } = this.props
        const handleAssigneeClick = () => {
            this.props.set_task_assignee({ user, assigneeId });
            this.props.hide_task_assignee_scrollable_popup()
        }
        return (
            <div className='assigneeItem' onClick={handleAssigneeClick}>
                <span><Profile user={user} /></span>
                <span>{`${user.firstName} ${user.lastName}`}</span>
                <span>{user.email}</span>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        assigneeId: state.app.ui_assignee_scroll_popup.assigneeId
    };
};

export default connect(mapStateToProps, {
    set_task_assignee,
    hide_task_assignee_scrollable_popup
})(AssigneeItem);