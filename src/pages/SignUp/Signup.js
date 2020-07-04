import React from "react";
import "./SignUp.css";
import TextField from "../../components/TextField/TextField";
import Button from "../../components/Button/Button";
import {connect} from "react-redux";
import {should_show_register} from "../../actions";

const SignUp = ({should_show_register}) => {
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

                <form>
                    <TextField which={"email"}/>
                    <TextField which={"password"}/>
                    <Button text={"Register"}/>
                </form>
            </section>
            <section className="color"/>
        </div>
    );
};

export default connect(null, {should_show_register})(SignUp);
