import React from "react";
import "./Panel.css";

const Panel = ({ panelName }) => {


  return (
    <div className="description_part">
      <div className="panel__top">
        <h2 className="panel__name">{panelName}</h2>
      </div>
      <div className="divider" />
      <textarea
        className="description_text"
        placeholder="Click to add team description... "
      />
    </div>
  );
};


export default Panel;
