import React from "react";
import "./SideMenuSection.css";

const SideMenuSection = ({children}) => {
    return (
        <div className={"SideMenuSection"}>
            <div className="SideMenuSection__content">{children}</div>
        </div>
    );
};

export default SideMenuSection;
