import React from "react";

import Input from "components/Input";

const Zelle = () => {
  const onChange = () => ({});

  return (
    <div className="zelle">
      <p className="text mb-5">
        Te facilitamos nuestros datos para realizar el pago
      </p>
      <div className="row mb-5">
        <div className="col-md-6">
          <p className="text mb-2">Nombre</p>
          <p className="text text-primary">FlyTravel</p>
        </div>
        <div className="col-md-6">
          <p className="text mb-2">Cuenta</p>
          <p className="text text-primary">pagos@flytravel.com</p>
        </div>
      </div>
      <p className="text mb-5">
        A continuacion indica los datos de transferencia
      </p>
      <div className="row">
        <div className="col-md-6">
          <Input
            label="Numero de Transferencia"
            placeholder="Numero de Transferencia"
          />
        </div>
        <div className="col-md-6">
          <Input label="Nombre de Cuenta" placeholder="Nombre de Cuenta" />
        </div>
      </div>
    </div>
  );
};

export default Zelle;
