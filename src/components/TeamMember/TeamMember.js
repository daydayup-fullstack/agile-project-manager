import React from 'react';
import './TeamMember.css';
import '../TeamDescriptionPanel/Panel.css';
import '../TeamMemberPopup/TeamMemberPopup.css';
import TeamMemberPopup from '../TeamMemberPopup/TeamMemberPopup';
import '../TeamMemberProfile/TeamMemberProfile.css';
import TeamProfile from "../TeamMemberProfile/TeamMemberProfile";
import {connect} from 'react-redux';
import {member_list} from '../../actions/index';
import { LoadingSpinner } from '../AssigneeArray/LoadingSpinner/LoadingSpinner';

class Members extends React.Component{
    state={addMemberPopup:false,teamMember: [],isLoading: true }
 
    async componentDidMount() { 
        this.props.member_list();  //make api call
        this.setState({isLoading:false});
    }

    show=()=> {    //toggle函数 
        return this.state.addMemberPopup ? this.setState({addMemberPopup:false}):this.setState({addMemberPopup:true}); 
        //click后让addMemberPopup的值从true变为false，或者从false变为true 
    }

    renderList(){
        return this.props.allMembers.map(member => {
            return(
                <li className='team-member' key={member.id}>
                    <span className='team-member_avatar'><TeamProfile user={member} /></span>
                    <span className='team-member_info'>
                        <h3>{`${member.firstName} ${member.lastName}`}</h3>
                        <h4>{member.email}</h4>
                    </span>
                </li>
            )
        });
    }
    
    render(){
    // console.log(this.props.allMembers);
    const { addMemberPopup,isLoading } = this.state;
    return(
        <div className='members'>
            <div className='panel__top'>
                <h2 className="panel__name">
                    Members
                </h2>
            </div>
            <div className="divider"/>
            <div className='member_list'>
                <div className='Add_member' onClick={()=>this.show()}>
                    <div className='circle'>
                        <span className="material-icons add_icon">add</span>
                    </div>
                    <span><h3 className='Add_text'>Add member</h3> </span>
                </div>
                {addMemberPopup && (<TeamMemberPopup show={()=>this.show()}/>)}
                <div>
                    <ul >
                        {!isLoading && <div>{this.renderList()}</div>}
                        {isLoading && <div className='spinner'><LoadingSpinner /></div>}
                    </ul>
                </div>
                <div className='Add_member'>
                    <div className='circle_bottom'>
                        <span className="material-icons more_icon">more_horiz</span></div>
                    <span><h3 className='Add_text'>See all members</h3></span>
                </div>

            </div>
        </div>
    )
    
}
}

// export default Members;

const mapStateToProps=(state)=> {    
    return {allMembers: Object.values(state.allMembers)} 
}
  
export default connect(mapStateToProps, {member_list})(Members);