import React, { useState } from "react";
import Hero from "components/Hero/Hero";
import OffersComponent from "components/Offers/Offers";
import MainFooter from "components/MainFooter/MainFooter";

const Offers = ({ actualPath }) => {
  const [images, setimages] = useState([
    {
      image: "images/slider/offers-1.jpg",
    },
  ]);
  return (
    <div>
      <Hero images={images} />
      <OffersComponent />
      <MainFooter />
    </div>
  );
};

export default Offers;
