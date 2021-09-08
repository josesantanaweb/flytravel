import React from "react";

const Logo = ({ white, variant, className }) => {
  return (
    <img
      className={`logo ${className}`}
      src={
        white
          ? "../images/logo-white.png"
          : variant
          ? "../images/logo-variant.png"
          : "../images/logo.png"
      }
    />
  );
};

Logo.defaultProps = {};

export default Logo;
