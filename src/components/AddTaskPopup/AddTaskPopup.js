import React from 'react'
import './AddTaskPopup.css'
import Profile from '../Profile/Profile'
import { changeNewTaskDisplay, changeCalendarDisplay } from '../../actions/index'
import { connect } from 'react-redux';
import CalendarPopup from '../CalendarPopup/CalendarPopup'
// const userApi = "https://daydayup-proj3.herokuapp.com/users"
// const proxyurl = "https://cors-anywhere.herokuapp.com/";
class AddTaskPopup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputName: '',
            inputProject: '',
            assigneeInputText: '',
            projectPlaceholder: true,
            assigneePlaceholder: false,
            userDisplay: true,
            assigneeInput: false,
            user: ''
        }
    }

    handleNewTaskDisplay = () => {
        this.props.changeNewTaskDisplay(false);
    }

    handleCalendarDisplay = () => {
        this.props.changeCalendarDisplay(!this.props.calendarDisplay)
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
        })
    }

    handleOnAssigneeCloseClick = (e) => {
        this.setState({
            AssigneePlaceholder: true,
        })
    }

    handleOnAssigneeInputClick = (e) => {
        this.setState({
            AssigneePlaceholder: false,
            userDisplay: false,
            assigneeInput: true,
        })
    }

    handleOnAssigneeInputChange = (e) => {
        this.setState({
            assigneeInputText: e.target.value,
        })
    }


    async componentDidMount() {
        // const response = await (await fetch(proxyurl + userApi));
        // const user = response.json().then((value) => this.setState({ user: value["user-scott"] }));

    }

    render() {
        const { inputName, projectPlaceholder, inputProject, AssigneePlaceholder, assigneeInput, userDisplay, assigneeInputText, user } = this.state;
        let bottomStatus = '';
        if (inputName.length !== 0) {
            bottomStatus = 'activated';
        } else {
            bottomStatus = 'disabled';
        }



        return (
            <div className="AddTaskPopup" >
                <div className="AddTaskPopup_TopIcon" >
                    <span className="material-icons">
                        minimize
                    </span>
                    <span className="material-icons" onClick={this.handleNewTaskDisplay}>
                        close
                    </span>
                </div>
                <input className="AddTaskPopup_TaskName" value={inputName} onChange={this.handleOnNameChange} placeholder='Task name' autoFocus />
                <div className='AddTaskPopup_AssigneeProjectField'>
                    <span>For</span>
                    <span onClick={this.handleOnAssigneeInputClick}>
                        {userDisplay && <Profile className='avatar' user={user} />}
                        {userDisplay && <span className='username'>{this.props.user.firstName}</span>}
                        {userDisplay && <span className="remove material-icons" onClick={this.handleOnAssigneeCloseClick} >close</span>}
                        {AssigneePlaceholder && <span className='assigneePlaceholder' onClick={this.handleOnAssigneeInputClick}>Assignee</span>}
                        {assigneeInput && <input className='projectInput' placeholder='Assignee' onChange={this.handleOnAssigneeInputChange} value={assigneeInputText} autoFocus />}
                    </span>
                    <span>in</span>

                    {projectPlaceholder
                        ? <span className='placeholder' onClick={this.handleOnProjectPlaceholderClick}>Project</span>
                        : <input className='projectInput' placeholder='Project' onChange={this.handleOnProjectChange} value={inputProject} autoFocus />}
                </div>
                <textarea className='AddTaskPopup_description' placeholder="Description" />
                {this.props.calendarDisplay ? <CalendarPopup /> : <></>}
                <div className="AddTaskPopup_BottomIcon" >
                    <span className="material-icons">
                        text_format
                    </span>
                    <span className="material-icons">
                        alternate_email
                    </span>
                    <span className="material-icons">
                        mood
                    </span>
                    <span className="material-icons">
                        attach_file
                    </span>
                    <span onClick={this.handleCalendarDisplay} className="material-icons">
                        calendar_today
                    </span>
                    <span className="material-icons">
                        group_add
                    </span>
                    <button className={`AddTaskPopup_BottomIcon_${bottomStatus}`}>Create Task</button>
                </div>
            </div >
        )
    }
}
function mapStateToProps(state) {
    return {
        newTaskDisplay: state.taskDisplay.newTaskDisplay,
        calendarDisplay: state.taskDisplay.calendarDisplay
    }
}
export default connect(mapStateToProps, { changeNewTaskDisplay, changeCalendarDisplay })(AddTaskPopup);