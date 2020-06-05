import React from "react";
import "./TeamMemberPopup.css";
import '../InviteSuccess/InviteSuccess';
import { connect } from "react-redux";
import { show_addmember_popup,hide_addmember_popup } from "../../actions";
import InviteSuccess from "../InviteSuccess/InviteSuccess";

const TeamMemberPopup = () => {
    
    const [ShowPopup, setShowPopup] = React.useState(false);
    const [InvitePopup,setInvitePopup]=React.useState(false);
    const [content, setContent]=React.useState(<></>);
    
    const closePopup = () => {
    setShowPopup(false);  
    };
   
    const show=()=> {   
      setInvitePopup(true);
      setContent(<InviteSuccess />);
  }
    return (
      <>
        { ShowPopup && (
        <div className="TeamPopup" >
          <div className="addmember" >
          <div className='AddMember'>
                <span><h2>Invite people to Dayday Up</h2></span>
                <span className='close' onClick={closePopup}>+</span>
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
                    <button className='send' onClick={show}>Send</button></div>
                    {InvitePopup && (<div >{content}</div>)}
                </div>
              </div>    
           </div>
           </div>
         )}  
         </>  
    );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {
    hide_addmember_popup,show_addmember_popup,
})(TeamMemberPopup);
// export default TeamMemberPopup;
