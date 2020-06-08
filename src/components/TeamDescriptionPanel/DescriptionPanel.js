import React from "react";
import "./Panel.css";

const Panel = ({ panelName }) => {
  // function textareaH(box){
  //     let obj=box;
  //     obj.style.height=obj.scrollHeight+'px';}
  //     `${textarea}`.on('keyup',function(){
  //         textareaH('textarea');
  //     });

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
