import React, { useRef } from "react";
import "../../Styles/general.scss";

function InputComponent({
  type,
  name,
  placeholder,
  onChange,
  className,
  value,
  label,
}) {
  return (
    <>
      <label className="labelForm">
        {label}
        {"🔥"}
      </label>
      <input
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className={className}
        required
      />
    </>
  );
}

export default InputComponent;
