import React from "react";
import TitleSection from "components/TitleSection/TitleSection";
import Button from "components/Button/Button";
import Select from "components/Select/Select";
import { data } from "data/data.json";

const OffersComponent = ({ actualPath }) => {
  const options = [
    { value: "Precio", label: "Precio" },
    { value: "Pais", label: "Pais" },
    { value: "Ciudad", label: "Ciudad" },
  ];
  const onChange = () => ({});
  const toggleOffers = () => {};
  return (
    <div className="offers">
      <div className="container">
        <TitleSection
          center="true"
          title="Nuestrar"
          titleCaption="Ofertas"
          subtitle="Mejores precios en vuelos"
        />
        <div className="offers-filter">
          <span>Ordenar Por:</span>
          <Select options={options} onChange={onChange} />
        </div>
        <div className="offers-items">
          {data[4].offers2.map((item, key) => (
            <div className="offers-item" key={key}>
              <div className="offers-content">
                <span className="offers-country">{item.country}</span>
                <div>
                  <h6 className="offers-title">{item.city}</h6>
                  <span className="offers-amount">{`A partir de ${item.amount}$`}</span>
                </div>
              </div>
              <img
                className="offers-image"
                src={`images/offers/${item.image}`}
              />
            </div>
          ))}
        </div>
        <Button
          className="button-primary"
          label="Ver Mas"
          onClick={toggleOffers}
        />
      </div>
    </div>
  );
};

export default OffersComponent;
