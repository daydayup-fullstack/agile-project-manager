import React from "react";
import "./Button.css";

const Button = ({ text = "Button" }) => {
    function handleClick(e) {
        return undefined;
    }

    return (
    <>
      <button className={"Button"} onClick={(e) => handleClick(e)}>{text}</button>
    </>
  );
};

export default Button;
