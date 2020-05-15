import React from "react";

import "./AddButtonCircular.css";

const AddButtonCircular = ({onHandleClick}) => {
    return (
        <div className={"AddButtonCircular"} onClick={onHandleClick}>
            <span className={"material-icons"}>add</span>
        </div>
    );
};

export default AddButtonCircular;