import React, { useState } from "react";
import Hero from "components/Hero/Hero";
import MainFooter from "components/MainFooter/MainFooter";
import AirlinesComponent from "components/Airlines/Airlines";

const Airlines = () => {
  const [images, setimages] = useState([
    {
      image: "images/slider/airlines-1.jpg",
    },
  ]);

  return (
    <div>
      <Hero images={images} />
      <AirlinesComponent />
      <MainFooter />
    </div>
  );
};

export default Airlines;
