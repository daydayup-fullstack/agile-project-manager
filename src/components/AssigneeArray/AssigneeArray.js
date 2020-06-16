import React, { Fragment } from 'react'
import AssigneeItem from './AssigneeItem/AssigneeItem'
import './AssigneeArray.css'
import { LoadingSpinner } from './LoadingSpinner/LoadingSpinner'
export default class AssigneeArray extends React.Component {
    state = { teamMember: [], isLoading: true }
    async componentDidMount() {
        const workSpace = this.props.workSpace;
        const API = `https://us-central1-agilo-47e6e.cloudfunctions.net/api/workspaces/${workSpace}/members`
        const teamMember = (await (await fetch(API)).json().then(json => this.setState({ teamMember: json, isLoading: false }))) //array of all member data
    }

    render() {
        const { teamMember, isLoading } = this.state;
        return (
            <div>

                <ul className='assigneeScrollable'>
                    {!isLoading && <div>{teamMember.map(member => <li key={member.id}><AssigneeItem user={member} /></li>)}</div>}
                    {isLoading && <div className='spinner'><LoadingSpinner /></div>}
                </ul>
            </div>
        )
    }
}