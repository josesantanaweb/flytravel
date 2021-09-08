import React from "react";

const Flight = ({ children, className }) => {
  return <div className={`${className}`}>{children}</div>;
};

export default Flight;
