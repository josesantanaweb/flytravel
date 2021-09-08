import React from "react";

const Radio = ({
  name,
  id,
  checked,
  forLabel,
  label,
  value,
  onChange,
  radioGroup,
  onClick,
  style,
  defaultChecked,
}) => {
  return (
    <div
      onClick={onClick}
      style={style}
      className={`${radioGroup ? "mr-2" : "mr-0"}`}
    >
      <input
        type="radio"
        id={id}
        name={name}
        defaultChecked={defaultChecked}
        checked={checked}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={forLabel}>{label}</label>
    </div>
  );
};

export default Radio;
