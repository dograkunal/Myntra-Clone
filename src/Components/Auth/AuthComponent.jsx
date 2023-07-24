import React, { useState } from "react";
import "../general.scss";
import "./style.scss";

import InputComponent from "../../Utils/InputComponent/InputComponent";

function AuthComponent() {
  const [option, setOption] = useState(2);
  return (
    <>
      <section className="authBase">
        <form className="signupForm">
          {option === 2 ? (
            <>
              <div>
                <InputComponent
                  type="text"
                  name="firstName"
                  placeholder="Jon"
                  onChange={() => {}}
                  className="inputField"
                />
                {/* </div>
              <div> */}
                <InputComponent
                  type="text"
                  name="lastName"
                  placeholder="Doe"
                  onChange={() => {}}
                  className="inputField"
                />
              </div>
            </>
          ) : null}
          <div>
            <InputComponent
              type="email"
              name="email"
              placeholder="abcd@xyz.com"
              onChange={() => {}}
              className="inputField"
            />
          </div>
          <div>
            <InputComponent
              type="password"
              name="password"
              placeholder="xxxxxxxx"
              onChange={() => {}}
              className="inputField"
            />
            <div>
              <button type="submit" className="submitBtn">
                Submit
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default AuthComponent;
