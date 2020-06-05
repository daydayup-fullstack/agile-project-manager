import React from "react";
import "./InviteSuccess.css";


const InviteSuccess = () => {
    
    const [InvitePopup, setInvitePopup] = React.useState(true);
    
    const close = () => {
    setInvitePopup(false);  
    };
   
    return (
      <>
        { InvitePopup && (
        <div className="InvitePopup" >  
            <div className='invite-top'></div>
            <div className='invite-content'>
                <span className='invite-close' onClick={close}>+</span>
                <h4 className='invite-description'>Invite 1 teammate to</h4>
                <p className='invite-team'>Dayday Up!</p>
            </div>
        </div>   
        )}  
         </>  
    );
};

export default InviteSuccess;
