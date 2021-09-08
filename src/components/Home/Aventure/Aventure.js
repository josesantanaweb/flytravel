import React from "react";
import Button from "components/Button/Button";

const Aventure = () => {
  return (
    <div className="aventure">
      <div className="container">
        <h3 className="aventure-title">
          Vivé la Aventura de ver lo <br /> Que Nunca Has Visto!
        </h3>
        <p className="aventure-text">Solo 1000$ por persona por 6 noches</p>
        <Button label="Buscar Vuelos" className="button-primary" />
      </div>
    </div>
  );
};

export default Aventure;
