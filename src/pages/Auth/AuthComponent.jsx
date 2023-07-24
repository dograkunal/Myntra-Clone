import React, { useState } from "react";
import Login from "./login";
import SignUp from "./signup";
import Forgot from "./Forgot";

import "../../styles/general.scss";
// import "../../styles/style.scss";
import "./style.scss";

function AuthComponent() {
  const [option, setOption] = useState(2);
  return (
    <>
      <section className="authBase">
        <form className="signupForm">
          <Login option={option} setOption={setOption} text={'login'} />
          <SignUp option={option}  setOption={setOption} text={'Register'} />
          <Forgot option={option} setOption={setOption} text={'Forgot'} />
        </form>
      </section>
    </>
  );
}

export default AuthComponent;
