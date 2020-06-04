import React, { useRef, useState } from "react";
import "./AddNewColumn.css";
import { generateId } from "../../model/utility";
import { connect } from "react-redux";
import { project_changed } from "../../actions";

const AddNewColumn = ({ project_changed, project }) => {
  const [value, setValue] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const inputElement = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newColumn = {
      id: generateId(),
      title: e.currentTarget["column-title"].value,
      projectId: project.id,
      taskIds: [],
    };

    const updatedProject = {
      ...project,
      columnOrder: [...project.columnOrder, newColumn.id],
      columns: {
        ...project.columns,
        [newColumn.id]: newColumn,
      },
    };

    project_changed(updatedProject);

    setIsEditing(false);
    setValue("");
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={"addNewColumn"}>
      <div className={"header"}>
        {!isEditing ? (
          <h2 onClick={() => setIsEditing(true)}>
            <span className={"material-icons"}>add</span>Add column
          </h2>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              id={"column-title"}
              type="text"
              value={value}
              onChange={handleChange}
              placeholder={"New Column"}
              ref={inputElement}
              autoFocus={isEditing}
              onBlur={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsEditing(false);
              }}
            />
          </form>
        )}
        <div className={`list ${isEditing && "list--show"}`} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    project: state.project,
  };
};
export default connect(mapStateToProps, { project_changed })(AddNewColumn);
