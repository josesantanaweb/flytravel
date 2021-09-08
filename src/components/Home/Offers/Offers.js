import React from "react";
import TitleSection from "components/TitleSection/TitleSection/";
import { data } from "data/data.json";

const MainOffers = () => {
  return (
    <div className="main-offers">
      <div className="container">
        <TitleSection
          center="true"
          title="Descubre Ofertas"
          titleCaption="En Cada Ciudad"
          subtitle="Mejores Paquetes disponibles para ti!!"
        />
        <div className="main-offers-items">
          {data[1].offers.map((item, key) => (
            <div className="main-offers-item" key={key}>
              <div className="main-offers-content">
                <p className="main-offers-date">{item.time}</p>
                <h6 className="main-offers-title">{item.city}</h6>
                <span className="main-offers-type">{item.type}</span>
              </div>
              <img className="main-offers-image" src={`images/${item.image}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainOffers;
