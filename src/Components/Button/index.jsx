import React from "react";

export const Button = ({ text, clickHandler, className }) => {
  return (
    <div>
      <button onClick={clickHandler} type="submit" className={className}>
        {text}
      </button>
    </div>
  );
};
