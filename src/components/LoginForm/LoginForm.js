import React from "react";
import "./LoginForm.css";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import {init_user_requested, login_user} from "../../actions";
import {connect} from "react-redux";

const LoginForm = ({login_user, isLoading, init_user_requested}) => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            init_user_requested();
            login_user({username, password});
        } catch (e) {
            setError("the username or password is not correct!");
            setUsername("");
            setPassword("");
        }
    };

    function dismiss() {
        console.log("should dismiss");
    }

    return (
        <div className={"LoginForm"}>
            <div
                className={"LoginForm__backdrop"}
                style={isLoading ? {backgroundColor: "#f6f8f9"} : {}}
            />

            {!isLoading ? (
                <div className="LoginForm__content">
                    <div className="LoginForm__error">{error}</div>
                    <button className={"close"} onClick={dismiss}>
                        <span className={"material-icons"}>close</span>
                    </button>
                    <header>Log in</header>
                    <button className={"loginWithGoogle"}>Use Google Account</button>

                    <div className="divider">or</div>

                    <form onSubmit={handleSubmit}>
                        <div className="LoginForm__content__field">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id={"email"}
                                placeholder={"name@company.com"}
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                autoFocus
                            />
                        </div>

                        <div className="LoginForm__content__field">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id={"password"}
                                placeholder={"Password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit">Log In</button>
                    </form>

                    <footer className="LoginForm__extra">
                        <div className={"forgotPassword"}>Forgot Password?</div>
                        <div className={"dontHaveAccount"}>
                            Don't have an account? <a href={"#signUp"}>Get Started</a>
                        </div>
                    </footer>
                </div>
            ) : (
                <LoadingSpinner/>
            )}
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        isLoading: state.app.ui_isWorkspaceLoading,
    };
};
export default connect(mapStateToProps, {login_user, init_user_requested})(
    LoginForm
);
