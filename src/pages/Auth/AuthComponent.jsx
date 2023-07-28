import React, { useState } from "react";
import Login from "./login";
import SignUp from "./signup";
import Forgot from "./Forgot";

import "../../styles/general.scss";
import "./style.scss";

function AuthComponent() {
  const [option, setOption] = useState(2);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;
    console.log(e.target.value);
    if (value.includes("_")) {
      setError("You cannot use an underscore");
    } else if (!value) {
      setError("🔥 Required Fields");
    } else setError(null);
  };

  return (
    <>
      <section className="authBase">
        <div className="signupForm">
          <Login
            option={option}
            setOption={setOption}
            text={"login"}
            handleChange={handleChange}
            error={error}
          />
          <SignUp
            option={option}
            setOption={setOption}
            text={"Register"}
            handleChange={handleChange}
            error={error}
          />
          <Forgot
            option={option}
            setOption={setOption}
            text={"Forgot"}
            handleChange={handleChange}
            error={error}
          />
        </div>
      </section>
    </>
  );
}

export default AuthComponent;
