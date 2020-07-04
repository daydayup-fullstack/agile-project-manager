import React from "react";
import "./UploadingPhotoBlock.css";

const ProgressBar = ({percent}) => {
    return <span className={"progressBar"} style={{width: `${percent}%`}}/>;
};

const MoreActions = () => {
    return (
        <div className={"moreActions"}>
            <span className={"moreActions__fileType"}>JPEG Image</span> |{" "}
            <a className={"moreActions__download"}>Download</a>
        </div>
    );
};

const UploadingPhotoBlock = ({isUploading, percent}) => {
    return (
        <div className="uploadingPhotoBlock">
            <span className={"material-icons uploadingPhotoBlock__icon"}>image</span>
            <div className={"uploadingPhotoBlock__info"}>
                <span className={"title"}>image name</span>
                {isUploading ? <ProgressBar percent={percent}/> : <MoreActions/>}
            </div>
        </div>
    );
};

export default UploadingPhotoBlock;
