import React from "react";
import TitleSection from "components/TitleSection/TitleSection/";
import DestinationsSlider from "./componenents/DestinationsSlider/DestinationsSlider";

const Destinations = () => {
  return (
    <div className="destinations">
      <div className="destinations-caption">
        <TitleSection
          title="Ofertas y Destinos"
          titleCaption="Destacados"
          subtitle="Encuentra los mejores destinos!"
        />
      </div>
      <DestinationsSlider />
    </div>
  );
};

export default Destinations;
