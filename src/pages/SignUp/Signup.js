import React from "react";
import "./SignUp.css";
import TextField from "../../components/TextField/TextField";
import {connect} from "react-redux";
import {should_show_register} from "../../actions";
import myFirebase from "../../Firebase/firebase";
import {updateUserToServer} from "../../apis/api";

const SignUp = ({should_show_register, currentUser}) => {
    const [pending, setPending] = React.useState(false);

    function handleSubmit(event) {
        event.preventDefault();

        const email = event.target["signup-email"].value;
        const password = event.target["signup-password"].value;
        setPending(true);

        myFirebase
            .doCreatePermanentAccountFromAnonymous(email, password)
            .then(async (userCredential) => {
                const user = userCredential.user;
                console.log("Anonymous account successfully upgraded, ", user);

                // update user's email
                const result = await updateUserToServer({...currentUser, email: email});
                console.log(result.data.message);

                should_show_register(false);
            })
            .catch((error) => {
                console.log("Error upgrading anonymous account, ", error);
                setPending(false);
            });
    }

    return (
        <div className="App-SignUp">
            <section className="content">
                <header>
                    {/*<Breadcrumb />*/}
                    <span
                        onClick={() => {
                            should_show_register(false);
                        }}
                    >
            Back
          </span>
                </header>
                <h1>Create your account</h1>

                <form onSubmit={(event) => handleSubmit(event)}>
                    <TextField which={"email"}/>
                    <TextField which={"password"}/>
                    <button disabled={pending}>Register</button>
                </form>
            </section>
            <section className="color"/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        currentUser: state.user
    };
};

export default connect(mapStateToProps, {should_show_register})(SignUp);
