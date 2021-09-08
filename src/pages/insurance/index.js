import React, { useState } from "react";
import Hero from "components/Hero/Hero";
import MainFooter from "components/MainFooter/MainFooter";
import InsuranceComponent from "components/Insurance/Insurance";

const Insurance = () => {
  const [images, setimages] = useState([
    {
      image: "images/slider/ensurance-1.jpg",
    },
  ]);

  return (
    <div>
      <Hero images={images} />
      <InsuranceComponent />
      <MainFooter />
    </div>
  );
};

export default Insurance;
