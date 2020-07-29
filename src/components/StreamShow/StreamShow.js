import React, { Component } from 'react'
import flv from 'flv.js'
import { connect } from 'react-redux'
import { fetchProject } from '../../actions/project'
import Modal from '../Modal/Modal'
import './StreamShow.css'
import history from '../../reducers/history'

export class StreamShow extends Component {

    constructor(props) {
        super(props)
        this.videoRef = React.createRef()
        this.state = { ModalShow: false }
    }
    componentDidMount() {
        let { projectId, taskId } = this.props.match.params
        if (taskId !== this.props.clickedTask.id) {
            taskId = this.props.clickedTask.id
            history.push(`/projects/${projectId}/${taskId}`)
        }
        this.props.fetchProject(projectId);
        this.buildPlayer();

    }


    componentDidUpdate() {
        this.buildPlayer();
    }

    buildPlayer() {
        if (this.player) {
            return;
        }
        const { id } = this.props.clickedTask
        this.player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${id}.flv`,
            isLive: true
        })
        this.player.attachMediaElement(this.videoRef.current)
        this.player.load()
    }



    renderContent() {
        const { id } = this.props.clickedTask
        return (<div>
            {`1. Send your Product owner/Team Leader your task ID: `}<span className='Modal__text--mark'>{`${id}`}</span><br />
            2. Type task ID in the OBS video streamer<br />
            3. Enjoy the meeting !
        </div>)
    }

    renderActions = () => {
        return (
            <React.Fragment>
                <button className='btn btn--white' onClick={() => this.setState({ ModalShow: false })}>Gotcha!</button>
            </React.Fragment>
        )
    }


    render() {

        const { name } = this.props.clickedTask
        return (
            <div className='StreamShow'>
                <h2>{`Welcome to the meeting room!`}</h2>
                <h2>{`Task name: `} <b>{name}</b></h2>
                <span className="material-icons"
                    onClick={() => this.setState({ ModalShow: true })}
                    title='Click to see how to use meeting room!'
                >
                    help_outline
                </span>
                <video ref={this.videoRef} style={{ width: '80%' }} controls />
                {this.state.ModalShow && <Modal
                    title='How to use meeting room?'
                    content={this.renderContent()}
                    actions={this.renderActions()}
                />}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        task: state.project.tasks[ownProps.match.params.taskId],
        clickedTask: state.clickedTask
    }
}

export default connect(mapStateToProps, { fetchProject })(StreamShow);
