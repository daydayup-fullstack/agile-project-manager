import React from "react";
import "./UploadingPhotoBlock.css";

const ProgressBar = ({ percent }) => {
  return <span className={"ProgressBar"} style={{ width: `${percent}%` }} />;
};

const MoreActions = () => {
  return (
    <div className={"MoreActions"}>
      <span className={"MoreActions__fileType"}>JPEG Image</span> |{" "}
      <a className={"MoreActions__download"}>Download</a>
    </div>
  );
};

const UploadingPhotoBlock = ({isUploading, percent}) => {

  return (
    <div className="UploadingPhotoBlock">
      <span className={"material-icons UploadingPhotoBlock__icon"}>image</span>
      <div className={"UploadingPhotoBlock__info"}>
        <span className={"title"}>image name</span>
        {isUploading ? <ProgressBar percent={percent} /> : <MoreActions />}
      </div>
    </div>
  );
};

export default UploadingPhotoBlock;
