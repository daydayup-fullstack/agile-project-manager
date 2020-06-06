import React from 'react';
import './TeamMember.css';
import '../TeamDescriptionPanel/Panel.css';
import '../TeamMemberPopup/TeamMemberPopup.css';


const Members=()=>{
    const [addMemberPopup, setaddMemberPopup] = React.useState(false);
    const [InvitePopup,setInvitePopup]=React.useState(false);

    const show=()=> {    //toggle函数
        return addMemberPopup ? setaddMemberPopup(false) : setaddMemberPopup(true); 
        //click后让addMemberPopup的值从true变为false，或者从false变为true
        
    }
    const invite=()=> {   
        return InvitePopup ? setInvitePopup(false) :setInvitePopup(true); 
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
                    <div className='circle' >
                    <span class="material-icons add_icon">add</span></div>
                    <span><h3 className='Add_text'>Add member</h3> </span>
                </div>
                {addMemberPopup && (
                <div className="TeamPopup" >
                    <div className="addmember" >
                        <div className='AddMember'>
                            <span><h2>Invite people to Dayday Up</h2></span>
                            <span className='close' onClick={show}>+</span>
                            <div className='divider'/>
                            <div className='content'>
                            <h4 className='content-description'>Your teammates will get an email that gives them access to your team.</h4>
                            <div className='content-title'>
                            <p className='content-email'>Email address</p>
                            <span class="material-icons email-icon">email</span>
                            <p className='content-contact'>Connect contacts</p></div>
                            <textarea className='text-email' placeholder='name@company.com, name@company.com, . . .'/>
                            <div className='input-field'>
                            <label>Choose a starting project</label><br/>
                            <textarea className='inputtext' placeholder='Start tpying to add a project'/><br/>
                            <button className='send' onClick={invite}>Send</button></div>
                            {InvitePopup &&  
                            <div className="InvitePopup" >  
                                <div className='invite-top'></div>
                                <div className='invite-content'>
                                    <span className='invite-close' onClick={invite}>+</span>
                                    <h4 className='invite-description'>Invite 1 teammate to</h4>
                                    <p className='invite-team'>Dayday Up!</p>
                                </div>
                            </div>  }
                            </div>
                        </div>    
                    </div>
                </div>
                )}
                <div className='user4'>
                    <div className='circle_4'>
                        <img className='pic_4' src='https://s3.amazonaws.com/profile_photos/1171854712057265.7zSf934pYJpZhkV1kn6o_27x27.png' alt='avatar'></img></div>
                    <span className='info_4'><h3>Silvia</h3>
                    <h4>hxiaoyin@gmail.com</h4></span>
                </div>
                <div className='circle_2'><p className='init_2'>SX</p>
                    <span className='info_2'><h3>Sarah Xiao</h3>
                    <h4>sarah19930930@gmail.com</h4></span>
                </div>
                <div className='user4'>
                    <div className='circle_4'>
                        <img className='pic_4' src='https://avatars0.githubusercontent.com/u/56547624?s=400&u=7e1f93d91d412943839ddeb36a4e7dcbd085e0c5&v=4' alt='avatar'></img></div>
                    <span className='info_4'><h3>Ollie</h3>
                    <h4>myself.ollie.lee@gmail.com</h4></span>
                </div>
                <div className='user4'> 
                    <div className='circle_4'>
                        <img className='pic_4' src='https://s3.amazonaws.com/profile_photos/4720159505425.uVij5QIkQPduW5RhPC9j_27x27.png' alt='avatar'></img></div>
                    <span className='info_4'><h3>Scott Wang</h3>
                    <h4>scotteau@gmail.com</h4></span>
                </div>
                <div className='circle_5'><p className='init_5'>LL</p>
                    <span className='info_5'><h3>Lawrence Liu</h3>
                    <h4>lawrence@gmail.com</h4></span>
                </div>
                
                <div className='Add_member'>
                    <div className='circle_bottom'>
                    <span class="material-icons more_icon">more_horiz</span></div>
                    <span ><h3 className='Add_text'>See all members</h3></span>
                </div>
                
            </div> 
        </div>
    )
};


export default Members;