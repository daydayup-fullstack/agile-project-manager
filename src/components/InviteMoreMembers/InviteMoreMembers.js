import React from "react";
import "./InviteMoreMembers.css";
import {connect} from "react-redux";
import {
    adding_members_to_workspace,
    hide_invite_members_popup,
} from "../../actions";

const InviteMoreMembers = ({currentUser, workspace, hide_invite_members_popup, adding_members_to_workspace}) => {
    const [email, setEmail] = React.useState("");
    const [tokens, setTokens] = React.useState([]);

    const invalidItems = [];
    const [selectedIndex, setSelectedIndex] = React.useState(999);

    const tokenInput = React.useRef(null);


    function handleSubmit() {
        if (!shouldDisable) {
            const result = {workspaceId: workspace.id, emails: [...tokens]};

            adding_members_to_workspace(result);

            reset();
            hide_invite_members_popup();
        }
    }

    const reset = () => {
        setTokens([]);
        tokenInput.current.blur();
    }

    function handleKeydown(event) {
        event.stopPropagation();

        if (event.key === "Enter" || event.key === ",") {
            if (email.trim() !== "") {
                event.preventDefault();
                setTokens([...tokens, email.trim()])
                setEmail("");
            }
        }
    }

    function deleteItem(index) {
        setTokens(tokens.filter((item, i) => i !== index))
    }

    function determineClasses(item, index) {
        if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(item)) {
            if (index === selectedIndex) {
                return "token--selected"
            }
            return "";
        } else {
            if (index === selectedIndex) {
                return "token--invalid--selected"
            }

            invalidItems.push(index);
            return "token--invalid"
        }
    }

    const listOfTokens = tokens.map((item, index) => {
        return (
            <div className={`token ${determineClasses(item, index)}`} key={index}>
                <span>{item}</span>
                <span className="material-icons" onClick={() => deleteItem(index)}>close</span>
            </div>
        )
    })

    let shouldDisable = invalidItems.length > 0 || tokens.length <= 0;

    const handleDismiss = e => {
        e.stopPropagation();

        if (e.target.className === "createYourWorkspace__container" || e.target.className === "material-icons close") {
            hide_invite_members_popup();
        }
    };

    return (
        <div className="createYourWorkspace__container" onClick={(e) => handleDismiss(e)}>

            <div className={"createYourWorkspace"}>
                <header>
                    <span>Invite more members to {workspace.name}</span>
                    <span className="material-icons close" onClick={(e) => handleDismiss(e)}>close</span>
                </header>

                <section className="createYourWorkspace__content">

                    <form onSubmit={handleSubmit}>


                        {/* members */}

                        <div className="createYourWorkspace__content__members">
                            <label>Members</label>
                            <div className={`members-field ${invalidItems.length > 0 && "members-field--error"}`}
                                 onClick={() => tokenInput.current.focus()}
                            >
                                {listOfTokens}

                                <input className={"create-token"}
                                       type="text"
                                       placeholder={tokens.length > 0 ? "" : "name@company.com,..."}
                                       value={email}
                                       onKeyDown={(event) => handleKeydown(event)}
                                       onChange={(event) => setEmail(event.target.value)}
                                       ref={tokenInput}
                                />

                                {invalidItems.length > 0 && (
                                    <div className="warning">Email addresses are invalid.</div>)
                                }
                            </div>


                        </div>

                        <div className="createYourWorkspace__content__buttonRow">

                        <span className={`Button ${shouldDisable && "Button--disabled"}`}
                              onClick={() => handleSubmit()}>
                            Create Workspace
                        </span>
                        </div>

                    </form>

                </section>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        currentUser: state.user,
        workspace: state.workspace
    }
}


export default connect(mapStateToProps, {hide_invite_members_popup, adding_members_to_workspace})(InviteMoreMembers);
