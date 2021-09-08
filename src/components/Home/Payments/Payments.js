import React from "react";
import TitleSection from "components/TitleSection/TitleSection/";
import { data } from "data/data.json";

const Payments = () => {
  return (
    <div className="payments">
      <div className="container">
        <TitleSection
          center="center"
          title="Medios de pago"
          titleCaption="A tu Medida"
          subtitle="Diferentes Medios de Pago"
        />
        <div className="payments-items">
          {data[3].payments.map((item, key) => (
            <div className="payments-item" key={key}>
              <h6>{item.title}</h6>
              <p>{item.subtitle}</p>
              <img src={`images/${item.image}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Payments;
