import React from "react";
import "./AddBoardTaskButton.css";
import { connect } from "react-redux";
import {
  project_changed,
  start_adding_task_in_column,
  start_creating_new_task,
} from "../../actions";
import { generateId } from "../../model/utility";

const AddBoardTaskButton = ({
  column,
  project,
  currentUser,
  project_changed,
}) => {
  console.log(project);

  const handleClick = (e) => {
    const task = {
      id: generateId(),
      name: "",
      columnId: column.id,
      auhorId: currentUser.id,
    };

    const updatedProject = {
      ...project,
      columns: {
        ...project.columns,
        [column.id]: {
          ...project.columns[column.id],
          taskIds: [task.id, ...project.columns[column.id].taskIds],
        },
      },
      tasks: {
        ...project.tasks,
        [task.id]: task,
      },
    };

    project_changed(updatedProject);
  };

  return (
    <div className={"addBoardTaskButton"} onClick={(e) => handleClick(e)}>
      <span className={"material-icons"}>add</span>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    project: state.project,
    currentUser: state.user,
  };
};
export default connect(mapStateToProps, {
  project_changed,
})(AddBoardTaskButton);
