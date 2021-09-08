import React from "react";

const Input = ({ label, onChange, placeholder, type = "text", ...rest }) => {
  return (
    <div className="input">
      <label>{label}</label>
      <input
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};

export default Input;
