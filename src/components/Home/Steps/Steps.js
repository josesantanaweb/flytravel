import React from "react";
import TitleSection from "components/TitleSection/TitleSection";
import Button from "components/Button/Button";
import Logo from "components/Logo/Logo";

const StepBase = () => {
  return (
    <div className="steps-item-base">
      <Logo variant width={110} />
    </div>
  );
};

const StepOne = () => {
  return (
    <div className="steps-item-one">
      <i className="fa fa-search" />
      <h6 className="steps-item-title">Busca tu Destino</h6>
    </div>
  );
};

const StepTwo = () => {
  return (
    <div className="steps-item-two">
      <i className="fa fa-calendar" />
      <h6 className="steps-item-title">Selecciona las Fechas</h6>
    </div>
  );
};

const StepThree = () => {
  return (
    <div className="steps-item-three">
      <i className="fa fa-book" />
      <h6 className="steps-item-title">Llena tus Datos</h6>
    </div>
  );
};

const StepFour = () => {
  return (
    <div className="steps-item-four">
      <i className="fa fa-plane" />
      <h6 className="steps-item-title">Vuela con FlyTravel</h6>
    </div>
  );
};

const Steps = () => {
  return (
    <div className="steps">
      <div className="container">
        <TitleSection
          center="true"
          title="Compra tu boleto"
          titleCaption="Con Estos 5 sencillos Pasos"
          subtitle="Como Comprar en "
          subtitleCaption="FLY TRAVEL"
        />
        <div className="steps-items">
          <div className="steps-item-one-wrapper">{StepOne()}</div>
          <div className="steps-item-two-wrapper">{StepTwo()}</div>
          <div className="steps-item-base-wrapper">
            <div className="steps-item-base-wrapper-inner">{StepBase()}</div>
          </div>
          <div className="steps-item-three-wrapper">{StepThree()}</div>
          <div className="steps-item-four-wrapper">{StepFour()}</div>
        </div>
        <h6 className="steps-invitation">
          Te invitamos a leer sobre los mejores viajes y las mejores aereolineas
        </h6>
        <a className="button button-primary" href="/airlines">
          Ver mas
        </a>
      </div>
    </div>
  );
};

export default Steps;
