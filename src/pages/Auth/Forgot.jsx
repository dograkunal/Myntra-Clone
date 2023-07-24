import React from "react";
import { EmailPassowrdForm } from "./login";
import { Button } from "../../Components/Button";

import "../../styles/general.scss";
import "./style.scss";

function Forgot({ text, setOption, option }) {
    if (option !== 3) {
        return <></>;
    }
    return (
        <div>
            <EmailPassowrdForm />
            <Button text={text} />
            <Button clickHandler={() => {
                setOption(1);
            }} text={'do not have account navigate to register'} />
        </div>);
};

export default Forgot;
