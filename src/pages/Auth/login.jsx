import React from "react";
import InputComponent from "../../Components/Input";
import { Button } from "../../Components/Button";
import "../../styles/general.scss";
import "./style.scss";



export const EmailPassowrdForm = () => {
  return (<><div>
    <InputComponent
      type="email"
      name="email"
      placeholder="abcd@xyz.com"
      onChange={() => { }}
      className="inputField"
    />
  </div>
    <div>
      <InputComponent
        type="password"
        name="password"
        placeholder="xxxxxxxx"
        onChange={() => { }}
        className="inputField"
      />
    </div></>)
};


function Login({ text, setOption, option }) {
  if (option !== 2) {
    return <></>;
  }
  return (
    <div>
      <EmailPassowrdForm />
      <Button text={text} />
      <Button clickHandler={() => {
        setOption(1);
      }} text={'do not have account navigate to register'} />
      <Button clickHandler={() => {
        setOption(3);
      }} text={'Forgot Password'} />
    </div>);
};

export default Login;
