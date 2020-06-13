import React from "react";
import "./TeamMemberPopup.css";
import "../TeamMember/TeamMember.css";

const TeamMemberPopup = ({show}) => {

    const [InvitePopup,setInvitePopup]=React.useState(false);

    const invite=()=> {   
        return InvitePopup ? setInvitePopup(false):setInvitePopup(true); 
    }
    return (
      <>
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
         </>
    );
};

export default TeamMemberPopup;
