import React, { useState } from "react";
// import "./Starred.css";
import unStarredImg from './unStarredImg.png';
import starredImg from './starredImg.png';

const Starred = ({onHandleClick,starred}) => {
  const [staring, setStarred] = useState(starred);

  let onClick = () => {
    setStarred(!staring);
    onHandleClick(!staring);
  }


  return (
      <img alt="star" onClick={onClick} src={staring ? starredImg : unStarredImg} />
  );
};

export default Starred;
