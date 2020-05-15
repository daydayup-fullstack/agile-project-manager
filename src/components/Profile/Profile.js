import React from "react";
import "./Profile.css";
import { colors} from "../../model/model";


function Profile({ user }) {
    return (
        user
            ? user.avatar
            ? <div
                className="profile"
                onClick={() => {}}>
                <div className="profile__content">
                    <img src={user.avatar} alt="avatar" />
                </div>
            </div>
            : <div
                className="profile"
                onClick={() => {}}
                style={{ backgroundColor: colors[user.colorIndex] }}>
                <div className="profile__content">
            <span>
              {user.firstName.substr(0, 1).toUpperCase()}
                {user.lastName.substr(0, 1).toUpperCase()}
            </span>
                </div>
            </div>
            : null
    )
}

export default Profile;
