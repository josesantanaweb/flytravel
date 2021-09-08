import React from "react";
import TitleSection from "components/TitleSection/TitleSection/";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <TitleSection
        center="true"
        title="SUSCRIBETE A NUESTRO "
        titleCaption="NEWSLETTER"
        subtitle="Recibe Las ultimas noticias y paquetes turisticos"
      />
      <div className="newsletter-form">
        <input
          className="newsletter-input"
          placeholder="Ingresa tu Correo Electronico"
        />
        <button className="newsletter-button">
          <i className="fa fa-paper-plane" />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
