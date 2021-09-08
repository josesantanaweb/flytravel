import React, { useState } from "react";
import Hero from "components/Hero/Hero";
import MainFooter from "components/MainFooter/MainFooter";
import UsComponent from "components/Us/Us";

const Us = () => {
  const [images, setimages] = useState([
    {
      image: "images/slider/us-1.jpg",
    },
  ]);

  return (
    <div>
      <Hero images={images} />
      <UsComponent />
      <MainFooter />
    </div>
  );
};

export default Us;
