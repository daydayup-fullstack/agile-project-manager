import React from 'react';
import './AddTeamMember.css';

const AddTeamMember=()=>{
    // const dismiss=()=>{
    //     style.display='none';
    // }
    return(
        <div className='AddMember'>
            <span><h2>Invite people to Dayday Up</h2></span>
            <span className='close' >+</span>
            <div className='divider'/>
            <div className='content'>
                <h4 className='content-title'>Your teammates will get an email that gives them access to your team.</h4>
                <span className='content-email'>Email address</span>
                <span className='content-contact'>Connect contacts</span>
                <textarea className='text-email' placeholder='name@company.com,name@company.com,...'/>
                <div className='input-field'>
                <label>Choose a starting project</label><br/>
                <textarea className='inputtext' placeholder='Start tpying to add a project'/><br/>
                <button className='send'>Send</button></div>
            </div>
        </div>
    )
}

export default AddTeamMember;