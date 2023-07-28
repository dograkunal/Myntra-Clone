import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../Components/Button";
import InputComponent from "../../Components/Input";
import "../../styles/general.scss";
import "./style.scss";

function SignUp({ text, setOption, option, handleChange, error }) {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      navigate("/cart", { replace: true });
    }
  }, [navigate, token]);
  if (option !== 1) {
    return <></>;
  }
  return (
    <div>
      <div className="formInput">
        <InputComponent
          type="text"
          name="firstName"
          placeholder="Jon"
          onChange={(e) => {
            handleChange(e);
          }}
          className="inputField"
          label="First Name"
        />
        {error && <i className="errorTag">{error}</i>}
      </div>
      <div className="formInput">
        <InputComponent
          type="text"
          name="lastName"
          placeholder="Doe"
          onChange={(e) => {
            handleChange(e);
          }}
          className="inputField"
          label="Last Name"
        />
        {error && <i className="errorTag">{error}</i>}
      </div>
      <div className="formInput">
        <InputComponent
          type="email"
          name="email"
          placeholder="abcd@xyz.com"
          onChange={(e) => {
            handleChange(e);
          }}
          className="inputField"
          label="E-mail"
        />
        {error && <i className="errorTag">{error}</i>}
      </div>
      <div className="formInput">
        <InputComponent
          type="password"
          name="password"
          placeholder="xxxxxxxx"
          onChange={() => {}}
          className="inputField"
          label="Password"
        />
      </div>
      {error && <i className="errorTag">{error}</i>}
      <Button text={text} className="submitBtn signUpBtn" />
      <Button
        clickHandler={() => {
          setOption(2);
        }}
        text={"alread have account? switch to login! "}
        className="submitBtn loginBtn"
      />
      <Button
        clickHandler={() => {
          setOption(3);
        }}
        text={"Forgot Password"}
        className="submitBtn forgotBtn"
      />
    </div>
  );
}

export default SignUp;
