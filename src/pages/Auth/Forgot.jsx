import React from "react";
import { Button } from "../../Components/Button";
import InputComponent from "../../Components/Input";

import "../../styles/general.scss";
import "./style.scss";

function Forgot({ text, setOption, option, handleChange, error }) {
  if (option !== 3) {
    return <></>;
  }
  return (
    <div>
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
        <Button text={text} className="submitBtn forgotBtn" />
      </div>
      <div>
        <Button
          clickHandler={() => {
            setOption(1);
          }}
          text={"do not have account navigate to register"}
          className="submitBtn signUpBtn"
        />
      </div>
    </div>
  );
}

export default Forgot;
