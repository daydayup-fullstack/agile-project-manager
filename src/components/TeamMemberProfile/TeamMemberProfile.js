import React from "react";
import "./TeamMemberProfile.css";
import { colors} from "../../model/model";


function TeamProfile({ user }) {
    return (
        user
            ? user.avatar || user.avatar !== ""
            ? <div
                className="team-profile"
                onClick={() => {}}>
                <div className="team-profile__content">
                    <img src={user.avatar} alt="avatar" />
                </div>
                
            </div>
            : <div
                className="team-profile"
                onClick={() => {}}
                style={{ backgroundColor: colors[user.colorIndex] }}>
                <div className="team-profile__content">
            <span>
                {user.firstName.substr(0, 1).toUpperCase()}
                {user.lastName.substr(0, 1).toUpperCase()}
            </span>
                </div>
            </div>
            : null
    )
}

export default TeamProfile;
