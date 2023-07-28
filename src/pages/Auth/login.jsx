import React, { useEffect } from "react";
import InputComponent from "../../Components/Input";
import { Button } from "../../Components/Button";
import "../../styles/general.scss";
import "./style.scss";
import { useNavigate } from "react-router-dom";

function Login({ text, setOption, option, handleChange, error }) {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      navigate("/cart", { replace: true });
    }
  }, [navigate, token]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (option !== 2) {
    return <></>;
  }
  return (
    <div>
      <h2>Login to your Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="formInput">
          <InputComponent
            type="text"
            name="email"
            placeholder="abcd@xyz.com"
            onChange={(e) => {
              handleChange(e);
            }}
            className="inputField"
            label="E-mail"
          />
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
        <div>
          <Button text={text} className="submitBtn loginBtn" />
        </div>
      </form>
      <span className="actionBtns">
        <Button
          clickHandler={() => {
            setOption(1);
          }}
          text={"Sign Up"}
          className="submitBtn signUpBtn"
        />
        <Button
          clickHandler={() => {
            setOption(3);
          }}
          text={"Forgot Password ?"}
          className="submitBtn forgotBtn"
        />
      </span>
    </div>
  );
}

export default Login;
