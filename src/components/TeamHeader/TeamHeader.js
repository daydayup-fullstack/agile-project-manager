import React, { useState } from "react";
import { connect } from 'react-redux';
import Tooltip from "../Tooltip/Tooltip";
import AddButtonCircular from "../AddButtonCircular/AddButtonCircular";
import "./TeamHeader.css";
import MultipleUserProfile from "../MultipleUserProfile/MultipleUserProfile"
import Profile from "../Profile/Profile"
import { db_users } from "../../data/database"
import Starred from "../Starred/Starred"
import TeamFilterbar from "../TeamFilter/TeamFilterbar"
import AddTaskPopup from "../AddTaskPopup/AddTaskPopup"
import { changeNewTaskDisplay } from "../../actions/index"


const users = [db_users["user-scott"], db_users["user-ollie"], db_users["user-silvia"]];

const ContentHeader = ({ shouldClose, openDrawer,newTaskDisplay}) => {
    const [shouldShowTooltip, setShouldShowTooltip] = useState(false);
    const handleClick=()=>{
        const w=window.open('about:blank');
        w.location.href='https://app.asana.com/0/billing/pricing/1171779031466945';
    }
    return (<>
        <header className={"TeamHeader"}>
            <div className="title">
                {shouldClose && (
                    <span className={"material-icons icon"} onClick={openDrawer}>
                        menu
                    </span>
                )}
                <span className='teamname'>
                <h2 >DaydayUp</h2>
                <span className="Team-star">
                    <Starred onHandleClick={(starValue) => console.log(starValue)} starred={false} />
                </span></span>
                <span className="Team-MultipleUserProfile">
                    <MultipleUserProfile multipleUsers={users} projectName={"DayDayUp"} />
                </span>
                <span className="Team-searchContainer">
                    <span className="material-icons">
                        search
                    </span>
                    <input placeholder='Search' />
                </span >
                <span lassName='Team-Addbutton'>
                <AddButtonCircular onHandleClick={() => setShouldShowTooltip(!shouldShowTooltip)} />
                </span>
                <span className="material-icons help_icon">help_outline</span>
            
                <button className='Team-upgrade' onClick={handleClick}>
                    Upgrade
                </button>        
                <Profile user={db_users["user-scott"]} />
            <Tooltip shouldShow={shouldShowTooltip} setShouldShow={setShouldShowTooltip}/>
            </div>
        </header>
        <TeamFilterbar />
        
        {newTaskDisplay ? <AddTaskPopup user={users[0]}/> : <></>}
    </>
    )
}

function mapStateToProps(state) {
    return {
        newTaskDisplay: state.taskDisplay.newTaskDisplay,
    }
}

export default connect(mapStateToProps, { changeNewTaskDisplay })(ContentHeader);
