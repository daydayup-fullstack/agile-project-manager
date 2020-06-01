import React from "react";
import "./IconArray.css";
import { colors, iconNames } from "../../model/model";
import { connect } from "react-redux";
import { select_project_icon } from "../../actions";

const IconArray = ({
  iconIndex,
  colorIndex,
  currentProject,
  select_project_icon,
}) => {
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
                select_project_icon({
                  ...currentProject,
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
    currentProject: state.project,
  };
};

export default connect(mapStateToProps, { select_project_icon })(IconArray);
