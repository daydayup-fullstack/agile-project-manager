import React, { Component } from "react";
import "./MultipleUserProfile.css";
import TeamProfileContent from "../TeamProfileContent/TeamProfileContent";

class TeamMemberProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: this.props.multipleUsers,  //parent component 传来的props
        }
    }

    render() {
        const { users } = this.state;
        return (
        
            <div className="member-info"> 
                <ul
                     className="member-info__ul"> 
                    {
                        users.map(item => {
                            return (
                                <li
                                    className="member-info__li"
                                    key={item.id}>
                                    <TeamProfileContent user={item} />
                                </li>
                            )
                        })
                    }
                 </ul> 
              </div> 
            )
    }
}

export default TeamMemberProfile;
