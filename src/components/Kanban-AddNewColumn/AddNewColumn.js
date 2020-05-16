import React, { useEffect, useRef, useState } from "react";
import "./AddNewColumn.css";

const AddNewColumn = () => {
    const [state, setState] = useState({ adding: false, currentValue: "" });
    const inputElement = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    };

    const handleChange = (event) => {
        setState({ ...state, currentValue: event.target.value });
    };

    const handleClick = () => {
        state.adding && setState({ ...state, adding: false });
    };

    useEffect(() => {
        if (inputElement.current) {
            inputElement.current.focus();
        }
    }, [state.adding]);

    return (
        <div className={"addNewColumn"} onClick={handleClick}>
            <div className={"header"}>
                {!state.adding ? (
                    <h2 onClick={() => setState({ adding: true })}>
                        <span className={"material-icons"}>add</span>Add column
                    </h2>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={state.currentValue}
                            onChange={handleChange}
                            placeholder={"New Column"}
                            ref={inputElement}
                        />
                    </form>
                )}
                <div className={`list ${state.adding && "list--show"}`} />
            </div>
        </div>
    );
};

export default AddNewColumn;
