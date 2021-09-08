import React from "react";
import MainSlider from "components/MainSlider/MainSlider";
import Booker from "components/Booker";

const Hero = ({ images }) => {
  return (
    <div className="hero">
      <MainSlider images={images} />
      <div className="hero-wrapper">
        <div className="container">
          <div className="hero-caption">
            <h3 className="hero-title">Hola</h3>
            <h6 className="hero-subtitle">¿A donde quieres ir?</h6>
          </div>
          <div className="hero-menu">
            <span>Reservar Vuelo</span>
            <span>Check-In/Gestionar Reservar</span>
            <span>Estado del Vuelo</span>
          </div>
          <Booker />
          <div className="hero-services">
            <a>
              <i className="fa fa-umbrella" />
              <span>Seguros de Viaje</span>
            </a>
            <a>
              <i className="fa fa-car" />
              <span>Alquilar un coche</span>
            </a>
            <a>
              <i className="fa fa-bed" />
              <span>Reservar un hotel</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
