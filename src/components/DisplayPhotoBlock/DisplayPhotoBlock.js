import React from "react";
import "./DisplayPhotoBlock.css";

export const useCalculated = (type, imageRef) => {
  const [state, setState] = React.useState(0);

  React.useEffect(() => {
    imageRef.current.addEventListener("load", () => {
      let calculated;

      if (imageRef.current) {
        if (type === "width") {
          calculated = Math.floor(
            (imageRef.current.clientHeight / imageRef.current.naturalHeight) *
              imageRef.current.naturalWidth
          );
        } else {
          calculated = Math.floor(
            (imageRef.current.clientWidth / imageRef.current.naturalWidth) *
              imageRef.current.naturalHeight
          );
        }
        setState(calculated);
      }
    });
  }, [imageRef, type]);

  return [state];
};

const DisplayPhotoBlock = () => {
  const imageUrl =
    "https://media.wired.com/photos/5bd86f1cb0c71179a8e94cbd/16:9/w_1519,h_854,c_limit/macmini1.jpg";
  const imageRef = React.useRef();
  const [width] = useCalculated("width", imageRef);

  return (
    <div className="DisplayPhotoBlock" style={{ width: `${width}px` }}>
      <div className="DisplayPhotoBlock__overlay">
        <span className={"material-icons"}>expand_more</span>
      </div>
      <img src={imageUrl} alt="thumbnail" ref={imageRef} />
      {/*  todo - integrating popupInfo & popupMenu*/}
    </div>
  );
};

export default DisplayPhotoBlock;

//naturalHeight
//naturalWidth
//clientHeight
//clientWidth
