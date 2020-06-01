import React, { useState } from "react";
import { connect } from 'react-redux';
import Tooltip from "../Tooltip/Tooltip";
import AddButtonCircular from "../AddButtonCircular/AddButtonCircular";
import "./ContentHeader.css";
import MultipleUserProfile from "../MultipleUserProfile/MultipleUserProfile"
import Profile from "../Profile/Profile"
import { db_users } from "../../data/database"
import Starred from "../Starred/Starred"
import Filterbar from "../Filterbar/Filterbar"
import PopupMenu from "../PopupMenu/PopupMenu";
import FilterTasks from "../FilterBarMenu/FilterTasks";
import FilterFilter from "../FilterBarMenu/FilterFilter";
import FilterSort from "../FilterBarMenu/FilterSort/FilterSort";
import AddTaskPopup from "../AddTaskPopup/AddTaskPopup"
import { changeNewTaskDisplay } from "../../actions/index"


const users = [db_users["user-scott"], db_users["user-ollie"], db_users["user-silvia"]];

const ContentHeader = ({ shouldClose, openDrawer,newTaskDisplay}) => {
    const [shouldShowTooltip, setShouldShowTooltip] = useState(false);
    return (<>
        <header className={"ContentHeader"}>
            <div className="title">
                {shouldClose && (
                    <span className={"material-icons icon"} onClick={openDrawer}>
                        menu
                    </span>
                )}
                <h2>Home</h2>
                <span className="material-icons icon">
                    keyboard_arrow_down
                </span>
                <span className="material-icons icon">
                    info
                </span>
                <span className="star">
                    <Starred onHandleClick={(starValue) => console.log(starValue)} starred={false} />
                </span>
                <span className="multiUserProfile">
                    <MultipleUserProfile multipleUsers={users} projectName={"DayDayUp"} />
                </span>
                <span className="searchContainer">
                    <span className="material-icons">
                        search
                    </span>
                    <input placeholder='Search' />
                </span>
            </div>
            <div className={"more-content"}>
                <ul>
                    <li>
                        <AddButtonCircular onHandleClick={() => setShouldShowTooltip(!shouldShowTooltip)} />
                    </li>
                    <li>
                        <span className="material-icons icon">help_outline</span>
                    </li>
                    <li>
                        <button>
                            Upgrade
                        </button>
                    </li>
                    <li>
                        {/*todo - hardcoded data - fix this later*/}
                        {/*<Profile user={users["user-c8dc5864"]}/>*/}
                        <Profile user={db_users["user-scott"]} />
                    </li>
                </ul>
            </div>

            <Tooltip shouldShow={shouldShowTooltip} setShouldShow={setShouldShowTooltip}/>
        </header>
        <Filterbar />
        
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