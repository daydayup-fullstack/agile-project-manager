import React, {useState} from "react";
import Tooltip from "../Tooltip/Tooltip";
import AddButtonCircular from "../AddButtonCircular/AddButtonCircular";
import Profile from "../Profile/Profile";
import {users} from "../../model/model";
import "./ContentHeader.css";


const ContentHeader = ({shouldClose, openDrawer}) => {
    const [shouldShowTooltip, setShouldShowTooltip] = useState(false);
    return (
        <header className={"ContentHeader"}>
            <div className="title">
                {shouldClose && (
                    <span className={"material-icons icon"} onClick={openDrawer}>
                menu
              </span>
                )}
                <h2>Home</h2>
            </div>
            <div className={"more-content"}>
                <ul>
                    <li>
                        <AddButtonCircular onHandleClick={() => setShouldShowTooltip(!shouldShowTooltip)}/>
                    </li>

                    <li>
                        {/*todo - hardcoded data - fix this later*/}
                        <Profile user={users["user-c8dc5864"]}/>
                    </li>
                </ul>
            </div>
            <Tooltip shouldShow={shouldShowTooltip} />
        </header>

    )
}


export default ContentHeader;