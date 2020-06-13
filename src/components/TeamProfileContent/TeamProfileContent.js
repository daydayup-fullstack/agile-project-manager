import React from "react";
import "./Profile.css";
import { colors} from "../../model/model";


function Profile({ user }) {
    return (
        user
            ? user.avatar || user.avatar !== ""
            ? <div
                className="members-profile"
                onClick={() => {}}>
                <div className="members-profile__logo">
                    <img src={user.avatar} alt="avatar" />
                </div>
                <span className='members-profile__info'>
                    <h3>{`${user.firstName} ${user.lastName}`}</h3>
                    <h4>{user.email}</h4></span>
            </div>
            : <div
                className="members-profile"
                onClick={() => {}}
                style={{ backgroundColor: colors[user.colorIndex] }}>
                <div className="members-profile__init">
            <span>
                {user.firstName.substr(0, 1).toUpperCase()}
                {user.lastName.substr(0, 1).toUpperCase()}
            </span>
            <span className='members-profile__info'>
                    <h3>{`${user.firstName} ${user.lastName}`}</h3>
                    <h4>{user.email}</h4></span>
                </div>
            </div>
            : null
    )
}

export default Profile;
