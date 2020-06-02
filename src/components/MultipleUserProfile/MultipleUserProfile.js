import React, { Component } from "react";
import "./MultipleUserProfile.css";
import Profile from "../Profile/Profile"

class MultipleUserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: this.props.multipleUsers,
            infoPanel: false,
            isPublic: true
        }

        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleIsPublic() {
        const userLength = this.state.users.length;
        userLength > 1 ? this.setState({ isPublic: true }) : this.setState({ isPublic: false })
    }

    handleMouseOver() {
        this.setState({
            infoPanel: true
        })
    }

    handleMouseLeave() {
        this.setState({
            infoPanel: false
        })
    }

    componentDidMount() {
        this.handleIsPublic();
    }

    render() {
        const { users, infoPanel, isPublic } = this.state;
        return (
            <div className="multipleUserProfile"
                onMouseOver={this.handleMouseOver}
                onMouseLeave={this.handleMouseLeave}>
                <ul
                    className="multipleUserProfile__ul">
                    {
                        users.map(item => {
                            return (
                                <li
                                    className="multipleUserProfile__li"
                                    key={item.id}>
                                    <Profile user={item} />
                                </li>
                            )
                        })
                    }
                </ul>

                <button
                    className="multipleUserProfile__button"
                    type="button">
                    <span className="material-icons multipleUserProfile__icon">
                        group
                    </span>
                    share
                </button>

                {
                    // when hover the information panel will appear
                    infoPanel &&
                    <div className="infoPanel">
                        {isPublic // when the user number is more than one, the project will be public
                            ? <div>
                                <div className="infoPanel__title">
                                    Public to {this.props.projectName}
                                </div>
                                <div className="infoPanel__description">
                                    Members of the {this.props.projectName} team can find this project.
                                </div>
                            </div>
                            : <div>
                                <div className="infoPanel__title">
                                    Private to you
                                </div>
                                <div className="infoPanel__description">
                                    This project can only seen by you.
                                </div>
                            </div>
                        }
                    </div>
                }
            </div>
        )
    }
}

export default MultipleUserProfile;
