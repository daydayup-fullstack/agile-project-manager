import React,{useState} from 'react';
import Profile from '../Profile/Profile';
import './TeamMember.css';
import '../TeamDescriptionPanel/Panel.css';
import '../TeamMemberPopup/TeamMemberPopup.css';
import TeamMemberPopup from '../TeamMemberPopup/TeamMemberPopup';
import TeamMemberProfile from '../TeamMemberProfile/TeamMemberProfile';
import TeamProfileContent from '../TeamProfileContent/TeamProfileContent';
import '../TeamMemberProfile/MultipleUserProfile.css';
import {connect} from 'react-redux';
import {db_users} from '../../data/database';

const Members=({workspace,team,members})=> {
    const [addMemberPopup,setaddMemberPopup]=useState(false);

    const show=()=> {    //toggle函数 
        return addMemberPopup ? setaddMemberPopup(false):setaddMemberPopup(true); 
        //click后让addMemberPopup的值从true变为false，或者从false变为true 
    }
   
    return(
        <div className='members'>
            <div className='panel__top'>
                <h2 className="panel__name">
                    Members
                </h2>
            </div>
            <div className="divider"/>
            <div className='member_list'>
                <div className='Add_member' onClick={show}>
                    <div className='circle'>
                        <span className="material-icons add_icon">add</span></div>
                    <span><h3 className='Add_text'>Add member</h3> </span>
                </div>
                {addMemberPopup && (<TeamMemberPopup show={show}/>)}
               
                {workspace.members.map((user) => (
                <li key={user.id} className='member-info__li'>
                  <TeamProfileContent user={user}/>
                </li>))}
        
               {/* (<TeamMemberProfile multipleUsers={workspace.members.map((id) => db_users[id])} /> ) */}
               
                

                {/* <li className='user4'>
                    <div className='circle_4'>
                        <img className='pic_4' src='https://s3.amazonaws.com/profile_photos/1171854712057265.7zSf934pYJpZhkV1kn6o_27x27.png' alt='avatar'></img></div>
                    <span className='info_4'><h3>Silvia</h3>
                    <h4>hxiaoyin@gmail.com</h4></span>
                </li>
                <li className='circle_2'><p className='init_2'>SX</p>
                    <span className='info_2'><h3>Sarah Xiao</h3>
                    <h4>sarah19930930@gmail.com</h4></span>
                </li>
                */}
                <div className='Add_member'>
                    <div className='circle_bottom'>
                        <span className="material-icons more_icon">more_horiz</span></div>
                    <span><h3 className='Add_text'>See all members</h3></span>
                </div>

            </div>
        </div>
    )
    
}


// export default Members;

function mapStateToProps(state) {
    console.log(state.workspace);
    return {
      workspace: state.workspace,
    };
  }
  
  export default connect(mapStateToProps, {
  })(Members);