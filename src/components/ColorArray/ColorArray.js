import React from "react";
import "./ColorArray.css";
import { connect } from "react-redux";
import { select_project_color } from "../../actions";

export const colors = {
  none: "#cbd4db",
  red: "#E8384F",
  orange: "#FD612C",
  yellowOrange: "#FD9A00",
  yellow: "#EEC300",
  yellowGreen: "#A4CF30",
  green: "#62D26F",
  blueGreen: "#37C5AB",
  aqua: "#20AAEA",
  blue: "#4186E0",
  indigo: "#7A6FF0",
  purple: "#AA62E3",
  magenta: "#E362E3",
  hotPink: "#EA4E9D",
  pink: "#FC91AD",
  coolGray: "#8DA3A6",
};

export const colorInOrder = [
  "#cbd4db",
  "#E8384F",
  "#FD612C",
  "#FD9A00",
  "#EEC300",
  "#A4CF30",
  "#62D26F",
  "#37C5AB",
  "#20AAEA",
  "#4186E0",
  "#7A6FF0",
  "#AA62E3",
  "#E362E3",
  "#EA4E9D",
  "#FC91AD",
  "#8DA3A6",
];

const ColorArray = ({ project, select_project_color }) => {
  return (
    <div className="ColorPicker PotColorPicker-colorPicker">
      <div className="ColorPicker-cellsContainer">
        {Object.entries(colors).map(([name, color]) => [
          <input
            key={name}
            className="ColorPickerCell-radio"
            type="radio"
            value={color}
            name="colorArray"
            id={name}
          />,

          <label
            key={`label-${name}`}
            className={`ColorPickerCell ColorPickerCell--${name}`}
            htmlFor={name}
            onClick={() => {
              const index = colorInOrder.indexOf(color);
              select_project_color({
                ...project,
                colorIndex: index,
              });
            }}
          >
            {project.colorIndex === colorInOrder.indexOf(color) && (
              <span className={"material-icons"}>done</span>
            )}
          </label>,
        ])}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    project: state.project,
  };
};

export default connect(mapStateToProps, { select_project_color })(ColorArray);
