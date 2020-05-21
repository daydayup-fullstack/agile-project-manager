import React from "react";
import "./Breadcrumb.css";

const levels = ["About you", "About your work", "Set up your first project"];

const Breadcrumb = () => {
  return (
    <div className={"Breadcrumb"}>
      <ul>
        {levels.map((level, index) => {
          return (
            <li key={index}>
              {/*  todo - fix the highlight issue*/}
              <span>{level}</span>
              {index + 1 !== levels.length && (
                <i className={"material-icons"}>chevron_right</i>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumb;
