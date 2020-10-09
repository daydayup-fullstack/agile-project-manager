import React from "react";
import "./CreateYourWorkspace.css";
import {connect} from "react-redux";
import {hide_create_workspace_popup} from "../../actions";

const CreateYourWorkspace = ({hide_create_workspace_popup}) => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [tokens, setTokens] = React.useState([]);

    const invalidItems = [];
    const [selectedIndex, setSelectedIndex] = React.useState(999);

    const tokenInput = React.useRef(null);
    const workspaceInput = React.useRef(null);

    function handleSubmit() {
        if (!shouldDisable) {
            const result = {workspaceName: name, emails: [...tokens]};
            console.log(result);
            reset();
        }
    }

    const reset = () => {
        setName("");
        setTokens([]);
        workspaceInput.current.blur();
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

    let shouldDisable = invalidItems.length > 0 || !name || tokens.length <= 0;

    const handleDismiss = e => {
        e.stopPropagation();

        if (e.target.className === "createYourWorkspace__container" || e.target.className === "material-icons close") {
            hide_create_workspace_popup();
        }
    };

    return (
        <div className="createYourWorkspace__container" onClick={(e) => handleDismiss(e)}>

            <div className={"createYourWorkspace"}>
                <header>
                    <span>Create Your Workspace</span>
                    <span className="material-icons close" onClick={(e) => handleDismiss(e)}>close</span>
                </header>

                <section className="createYourWorkspace__content">

                    <form onSubmit={handleSubmit}>

                        {/*    workspace name*/}
                        <div className="createYourWorkspace__content__workspace-name">
                            <label htmlFor="workspace-name">Workspace Name</label>
                            <input type="text"
                                   placeholder={"Company or Team Name"}
                                   value={name}
                                   onChange={(event) => setName(event.target.value)}
                                   ref={workspaceInput}
                            />
                        </div>

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
    return {}
}


export default connect(mapStateToProps, {hide_create_workspace_popup})(CreateYourWorkspace);
