import React, { Fragment } from 'react'
import Profile from '../../Profile/Profile'
import { connect } from "react-redux";
import { set_task_assignee } from "../../../actions/index";
import './AssigneeItem.css'
class AssigneeItem extends React.Component {
    state = { user: {} }

    componentDidMount() {
        this.setState({ user: this.props.user })
    }

    render() {
        const { user } = this.state
        const { assigneeId } = this.props
        return (
            <div className='assigneeItem' onClick={() => this.props.set_task_assignee({ user, assigneeId })}>
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
    set_task_assignee
})(AssigneeItem);