import React from "react";
import "./CoverPhotoBlock.css";
import { useCalculated } from "../DisplayPhotoBlock/DisplayPhotoBlock";

const CoverPhotoBlock = ({imageUrl}) => {
  const imageRef = React.useRef();
  const [height] = useCalculated("height", imageRef);

  return (
    <div className={"CoverPhotoBlock"} style={{ height: `${height}px` }}>
      <img src={imageUrl} alt="coverImage" ref={imageRef} />
    </div>
  );
};

export default CoverPhotoBlock;
