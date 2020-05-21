import React from "react";
import "./Button.css";

const Button = ({ text = "Button" }) => {
  return (
    <>
      <button className={"Button"}>{text}</button>
    </>
  );
};

export default Button;
