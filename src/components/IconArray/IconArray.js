import React from "react";
import "./IconArray.css";
import { colors, iconNames } from "../../model/model";
import { connect } from "react-redux";
import { project_changed } from "../../actions";

const IconArray = ({ iconIndex, colorIndex, project_changed, project }) => {
  const showCorrectStyle = (index) => {
    if (iconIndex === index) {
      return {
        backgroundColor: colors[colorIndex],
      };
    }
  };

  return (
    <div className="IconArray">
      <div className="content">
        {iconNames.map((iconName, index) => {
          return (
            <div
              className={`item ${iconIndex === index && "item--selected"}`}
              key={index}
              style={showCorrectStyle(index)}
              onClick={() => {
                project_changed({
                  ...project,
                  iconIndex: index,
                });
              }}
            >
              <span className={"material-icons-two-tone"}>{iconName}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    project: state.project,
  };
};

export default connect(mapStateToProps, { project_changed })(IconArray);
