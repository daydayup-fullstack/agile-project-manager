import React from 'react'
import './AddTaskPopup.css'
import Profile from '../Profile/Profile'
import { changeNewTaskDisplay } from '../../actions/index'
import { connect } from 'react-redux';
function mapStateToProps(state) {
    return {
        newTaskDisplay: state.taskDisplay.newTaskDisplay,
    }
}
class AddTaskPopup extends React.Component {
    constructor(props) {
        //Assignee
        super(props);
        this.state = {
            inputName: '',
            inputProject: '',
            assigneeInputText: '',
            projectPlaceholder: true,
            assigneePlaceholder: false,
            userDisplay: true,
            assigneeInput: false,
        }



    }

    handleNewTaskDisplay = () => {
        this.props.changeNewTaskDisplay(false);
    }

    handleOnNameChange = (e) => {
        this.setState({
            inputName: e.target.value,
        })
    }

    handleOnProjectChange = (e) => {
        this.setState({
            inputProject: e.target.value,
        })
    }

    handleOnProjectPlaceholderClick = (e) => {
        this.setState({
            projectPlaceholder: false,
            userDisplay: true,
            assigneeInput: false,
            assigneeInputText: '',
        })
    }

    handleOnAssigneeCloseClick = (e) => {
        this.setState({
            AssigneePlaceholder: true,
            userDisplay: false,
            projectPlaceholder: true,
            inputProject: '',
        })
    }

    handleOnAssigneeInputClick = (e) => {
        this.setState({
            AssigneePlaceholder: false,
            userDisplay: false,
            assigneeInput: true,
            projectPlaceholder: true,
            inputProject: '',
        })
    }

    handleOnAssigneeInputChange = (e) => {
        this.setState({
            assigneeInputText: e.target.value,
        })
    }

    handleInitialInputClick = () => {
        this.setState({
            projectPlaceholder: true,
            inputProject: '',
            userDisplay: true,
            assigneeInput: false,
            assigneeInputText: '',
        })
    }

    componentDidMount() {

    }


    render() {
        const { inputName, projectPlaceholder, inputProject, AssigneePlaceholder, assigneeInput, userDisplay, assigneeInputText } = this.state;
        let bottomStatus = '';
        if (inputName.length !== 0) {
            bottomStatus = 'activated';
        } else {
            bottomStatus = 'disabled';
        }



        return (
            <div className="AddTaskPopup" >
                <div className="AddTaskPopup_TopIcon" onClick={this.handleInitialInputClick}>
                    <span className="AddTaskPopup_TopIcon_icon material-icons">
                        minimize
                    </span>
                    <span className="AddTaskPopup_TopIcon_icon material-icons" onClick={this.handleNewTaskDisplay}>
                        close
                    </span>
                </div>
                <input className="AddTaskPopup_TaskName" value={inputName} onChange={this.handleOnNameChange} placeholder='Task name' autoFocus onClick={this.handleInitialInputClick} />
                <div className='AddTaskPopup_AssigneeProjectField'>
                    <span className='AddTaskPopup_AssigneeProjectField_assigneeLabel' onClick={this.handleInitialInputClick} >For</span>
                    <span className='AddTaskPopup_AssigneeProjectField_token' onClick={this.handleOnAssigneeInputClick}>
                        {userDisplay && <Profile className='AddTaskPopup_AssigneeProjectField_token_avatar' user={this.props.user} />}
                        {userDisplay && <span className='AddTaskPopup_AssigneeProjectField_assigneeLabel AddTaskPopup_AssigneeProjectField_token_username'>{this.props.user.firstName}</span>}
                        {userDisplay && <span className="AddTaskPopup_AssigneeProjectField_token_remove material-icons" onClick={this.handleOnAssigneeCloseClick} >close</span>}
                        {AssigneePlaceholder && <span className='AddTaskPopup_AssigneeProjectField_token_assigneePlaceholder' onClick={this.handleOnAssigneeInputClick}>Assignee</span>}
                        {assigneeInput && <input className='AddTaskPopup_AssigneeProjectField_projectInput' placeholder='Assignee' onChange={this.handleOnAssigneeInputChange} value={assigneeInputText} onClick={() => this.setState({ projectPlaceholder: true, })} autoFocus />}
                    </span>
                    <span className='AddTaskPopup_AssigneeProjectField_assigneeLabel AddTaskPopup_AssigneeProjectField_projectLabel' onClick={this.handleInitialInputClick} >in</span>

                    {projectPlaceholder
                        ? <span className='AddTaskPopup_AssigneeProjectField_placeholder' onClick={this.handleOnProjectPlaceholderClick}>Project</span>
                        : <input className='AddTaskPopup_AssigneeProjectField_projectInput' placeholder='Project' onChange={this.handleOnProjectChange} value={inputProject} autoFocus />}
                </div>
                <textarea className='AddTaskPopup_description' placeholder="Description" onClick={this.handleInitialInputClick} />
                <div className="AddTaskPopup_BottomIcon" >
                    <span className="AddTaskPopup_BottomIcon_icon AddTaskPopup_BottomIcon_text material-icons">
                        text_format
                    </span>
                    <span className="AddTaskPopup_BottomIcon_icon material-icons">
                        alternate_email
                    </span>
                    <span className="AddTaskPopup_BottomIcon_icon material-icons">
                        mood
                    </span>
                    <span className="AddTaskPopup_BottomIcon_icon material-icons">
                        attach_file
                    </span>
                    <span className="AddTaskPopup_BottomIcon_icon material-icons AddTaskPopup_BottomIcon_calender">
                        calendar_today
                    </span>
                    <span className="AddTaskPopup_BottomIcon_icon material-icons AddTaskPopup_BottomIcon_group">
                        group_add
                    </span>
                    <button className={`AddTaskPopup_BottomIcon_button AddTaskPopup_BottomIcon_${bottomStatus}`}>Create Task</button>
                </div>
            </div >
        )
    }
}

export default connect(mapStateToProps, { changeNewTaskDisplay })(AddTaskPopup);