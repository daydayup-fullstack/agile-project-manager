import React from "react";
import AssigneeItem from "./AssigneeItem/AssigneeItem";
import "./AssigneeArray.css";
import {connect} from "react-redux";

class AssigneeArray extends React.Component {
    render() {
        return (
            <div>
                <ul className="assigneeScrollable">
                    <div>
                        {this.props.allMembers.map((member) => (
                            <li key={member.id}>
                                <AssigneeItem user={member}/>
                            </li>
                        ))}
                    </div>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        allMembers: state.workspace.allMembers,
    };
};
export default connect(mapStateToProps, {})(AssigneeArray);
