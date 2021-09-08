import React from "react";

const Brands = () => {
  return (
    <div className="brands">
      <img src={`${window.location.origin}/images/kiu.png`} alt="kiu" />
      <img src={`${window.location.origin}/images/sabre.png`} alt="sabre" />
      <img src={`${window.location.origin}/images/amadeus.png`} alt="amadeus" />
    </div>
  );
};

export default Brands;
