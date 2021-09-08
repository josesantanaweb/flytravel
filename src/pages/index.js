import React, { useContext, useState } from "react";
import Hero from "components/Hero/Hero";
import Destinations from "components/Home/Destinations/Destinations";
import Steps from "components/Home/Steps/Steps";
import Aventure from "components/Home/Aventure/Aventure";
import Blog from "components/Home/Blog/Blog";
import Payments from "components/Home/Payments/Payments";
import MainOffers from "components/Home/Offers/Offers";
import MainFooter from "components/MainFooter/MainFooter";
import PageContext from "components/PageContext";

const Home = () => {
  const {
    setPath,
    setFlightsContext,
    setDetailsContext,
    setPassengersContext,
  } = useContext(PageContext);
  const [images, setimages] = useState([
    {
      image: "images/slider/home-1.jpg",
    },
    {
      image: "images/slider/home-2.jpg",
    },
    {
      image: "images/slider/home-3.jpg",
    },
  ]);

  React.useEffect(() => {
    setPath("/");
    setFlightsContext(null);
    setDetailsContext(null);
    setPassengersContext(null);
  }, []);

  return (
    <React.Fragment>
      <Hero images={images} />
      <Destinations />
      <Steps />
      <MainOffers />
      <Aventure />
      <Blog />
      <Payments />
      <MainFooter />
    </React.Fragment>
  );
};

export default Home;
