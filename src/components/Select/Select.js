import React from "react";

const Select = ({
  options,
  label,
  onChange,
  name,
  selected,
  value,
  defaultValue,
  boxStyle = null,
  ...rest
}) => {
  return (
    <div {...rest} className="select">
      <label>{label}</label>
      <select
        style={boxStyle}
        options={options}
        name={name}
        onChange={onChange}
        value={value}
        defaultValue={defaultValue}
      >
        {options.map((option, key) => {
          let props = {
            key,
            value: option.value,
          };

          if (option.value === selected) {
            props["selected"] = true;
          }

          return <option {...props}>{option.name}</option>;
        })}
      </select>
    </div>
  );
};

export default Select;
