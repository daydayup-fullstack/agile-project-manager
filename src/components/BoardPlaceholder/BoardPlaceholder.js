import React from "react";
import "./BoardPlaceholder.css";

const BoardPlaceholder = () => {
    return (
        <div className={"boardPlaceholder"}>
            <ul className={"boardPlaceholder__columns"}>
                <li className={"animated"}>
                    <div className="header"/>
                    <div className="content"/>
                </li>
                <li className={"animated"}>
                    <div className="header"/>
                    <div className="content"/>
                </li>
                <li className={"animated"}>
                    <div className="header"/>
                    <div className="content"/>
                </li>
                <li className={"animated"}>
                    <div className="header"/>
                    <div className="content"/>
                </li>
            </ul>
        </div>
    );
};

export default BoardPlaceholder;
