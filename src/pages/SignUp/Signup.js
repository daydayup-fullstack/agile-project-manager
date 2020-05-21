import React from "react";
import "./SignUp.css";
import TextField from "../../components/TextField/TextField";
import Button from "../../components/Button/Button";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

const SignUp = () => {
  return (
    <div className="App-SignUp">
      <section className="content">
        <header>
            <Breadcrumb />
        </header>
        <h1>Welcome to Agilo!</h1>

        <form>
          <TextField which={"email"} />
          <TextField which={"name"} />
          <TextField which={"password"} />
          <Button text={"continue"} />
        </form>
      </section>
      <section className="color" />
    </div>
  );
};

export default SignUp;
