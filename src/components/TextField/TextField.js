import React from "react";
import "./TextField.css";

const InputType = {
  name: {
    type: "text",
    title: "What's your full name?",
    placeholder: "your name",
    errorMessage: "Please enter your name.",
  },
  password: {
    type: "password",
    title: "Password",
    placeholder: "Password",
    errorMessage: "Password must be 8 characters or longer.",
  },
  email: {
    type: "text",
    title: "What's your email address?",
    placeholder: "name@company.com",
    errorMessage: "Please enter a valid email address.",
  },
};

const TextField = ({which = "name"}) => {
  const {type, title, placeholder, errorMessage} = InputType[which];
  const [state, setState] = React.useState("");
  const [error, setError] = React.useState("");
  const [isDirty, setIsDirty] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  let extraStyles = () => {
    const base = "TextField__content__input";

    switch (which) {
      case "name":
        return `${base}--name`;
      case "password":
        return `${base}--password`;
      default:
        return `${base}--text`;
    }
  };

  const handleBlur = () => {
    if (isDirty && state === "") {
      setError(errorMessage);
    }
    // todo - validate logics
    if (type === "password" && state.length < 8) {
      setError(errorMessage);
    }

    if (which === "email") {
      const expression = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!expression.test(state)) {
        setError(errorMessage);
      }
    }
  };

  const handleChange = (e) => {
    setError("");
    setState(e.target.value);
  };

  function toggleVisibility() {
    // todo - toggle
    setShowPassword(!showPassword);
  }

  return (
      <div className={"textField"}>
        <label>{title}</label>
        <div className="textField__content">
          <input
              className={`textField__content__input ${
                  error && "textField__content__input--error"
              } ${extraStyles()}`}
              type={showPassword ? "text" : type}
              placeholder={placeholder}
              value={state}
              onFocus={() => setIsDirty(true)}
              onBlur={handleBlur}
              onChange={handleChange}
              id={which === "email" ? "signup-email" : "signup-password"}
          />

          {which === "password" && (
              <>
            <span
                className="material-icons-outlined visibility-toggle"
                onClick={toggleVisibility}
            >
              {showPassword ? `visibility_off` : `visibility`}
            </span>
              </>
          )}
        </div>
        {error && <span className={"textField__error"}>{error}</span>}
      </div>
  );
};

export default TextField;
