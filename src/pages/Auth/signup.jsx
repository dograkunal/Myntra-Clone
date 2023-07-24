import React from "react";
import { EmailPassowrdForm } from "./login";
import { Button } from "../../Components/Button";
import InputComponent from "../../Components/Input";
import "../../styles/general.scss";
import "./style.scss";

function SignUp({ text, setOption, option }) {

  if (option !== 1) {
    return <></>;
  }
  return (
    <div>
      <div>
        <InputComponent
          type="text"
          name="firstName"
          placeholder="Jon"
          onChange={() => { }}
          className="inputField"
        />
      </div>
      <div>
        <InputComponent
          type="text"
          name="lastName"
          placeholder="Doe"
          onChange={() => { }}
          className="inputField"
        />
      </div>
      <EmailPassowrdForm />
      <Button text={text} />
      <Button clickHandler={() => {
        setOption(2);
      }} text={'alread have account? switch to login! '} />
      <Button clickHandler={() => {
        setOption(3);
      }} text={'Forgot Password'} />
    </div>);
}

export default SignUp;
