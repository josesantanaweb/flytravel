import React from "react";
import TitleSection from "components/TitleSection/TitleSection/";
import DestinationsSlider from "./componenents/DestinationsSlider/DestinationsSlider";

const Destinations = () => {
  return (
    <div className="destinations">
      <div className="destinations-caption">
        <TitleSection
          title="Aprovecha Todas las Ofertas"
          titleCaption="DISPONIBLES A NUESTROS DESTINOS DESTACADOS"
          subtitle="¡Descuentos desde y hacia Venezuela
          en los siguientes destinos!"
        />
      </div>
      <DestinationsSlider />
    </div>
  );
};

export default Destinations;
