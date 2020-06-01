import React from 'react';
import './InboxFilter.css';

const InboxFilter=()=>{
    const styles = {
        display: "flex",
        width: "100%",
        justifyContent: "flex-end",
        padding: "0.5rem"
        
    };
    return (
        <div style={styles}>
        <button className='Filter_button '>
            All 
        </button>  
        <button className='Filter_button '>
            Assigned to me
        </button> 
        <button className='Filter_button '>
            <span class="material-icons mention">alternate_email</span>Mentioned
        </button>
        <button className='Filter_button '>
            Assigned by me
        </button>
        <span className={"material-icons Filter_button "}>
        more_horiz
        </span>
        </div>
    );
};

export default InboxFilter;