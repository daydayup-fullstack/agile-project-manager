import React from "react";
import "./ProfileSettings.css";
import {connect} from "react-redux";
import {hide_profile_settings, update_user} from "../../actions";
import {handleUpload} from "../../hooks/customHooks";
import Profile from "../Profile/Profile";
import {updateUserToServer} from "../../apis/api";

const ProfileSettings = ({hide_profile_settings, user, update_user}) => {
    const [firstName, setFirstName] = React.useState(user.firstName);
    const [lastName, setLastName] = React.useState(user.lastName);

    const uploadAvatarRef = React.useRef(null);

    const handleDismiss = (e) => {
        e.stopPropagation();

        if (
            e.target.className === "profileSettings" ||
            e.target.className === "material-icons"
        ) {
            hide_profile_settings();
        }
    };

    function handleSubmit(event) {
        event.preventDefault();
        // save new first name & last name to store
        //    update user in the data base too
        const updatedUser = {
            ...user,
            firstName: firstName,
            lastName: lastName,
        };

        update_user(updatedUser);
        hide_profile_settings();
        updateUserToServer(updatedUser);
    }

    function showUpload(event) {
        uploadAvatarRef.current.click();
    }

    function handleFiles(event) {
        const files = [...event.target.files];
        handleUpload(files).then((url) => {
            // update user's avatar url
            const updatedUser = {
                ...user,
                avatar: url,
            };
            update_user(updatedUser);
            updateUserToServer(updatedUser);
        });
    }

    return (
        <div className={"profileSettings"} onClick={(e) => handleDismiss(e)}>
            <div className="profileSettings__content">
                <header>
                    <span>My Profiles Settings</span>
                    <span className={"material-icons"} onClick={(e) => handleDismiss(e)}>
            close
          </span>
                </header>
                <section className={"your_photo"}>
                    <Profile user={user}/>

                    <div className="cta">
                        <input
                            ref={uploadAvatarRef}
                            type="file"
                            className={"fileUpload"}
                            multiple
                            onChange={(event) => handleFiles(event)}
                        />
                        <span onClick={(event) => showUpload(event)}>
              Upload your photo
            </span>
                        <span>Photos help your teammates recognize you</span>
                    </div>
                </section>

                <section className={"your_info"}>
                    <form onSubmit={(event) => handleSubmit(event)}>
                        <div className="field">
                            <label htmlFor="profile_settings_firstname">
                                Your First name
                            </label>
                            <input
                                type="text"
                                id={"profile_settings_firstname"}
                                value={firstName}
                                onChange={(event) => setFirstName(event.target.value)}
                            />
                        </div>

                        <div className="field">
                            <label htmlFor="profile_settings_lastname">Your Last name</label>
                            <input
                                type="text"
                                id={"profile_settings_lastname"}
                                value={lastName}
                                onChange={(event) => setLastName(event.target.value)}
                            />
                        </div>

                        <button type={"submit"}>Save Changes</button>
                    </form>
                </section>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};
export default connect(mapStateToProps, {hide_profile_settings, update_user})(
    ProfileSettings
);
