import React from "react";
import Select from "components/Select/Select";
import Input from "components/Input";

const Transfer = () => {
  const options = [
    { value: "Bank of America", label: "Bank of America" },
    { value: "Banesco Panama", label: "Banesco Panama" },
  ];

  const onChange = () => ({});

  return (
    <div className="transfer">
      <p className="text mb-5">
        Te facilitamos nuestros datos bancarios para realizar el pago
      </p>
      <div className="row mb-5">
        <div className="col-md-4">
          <Select options={options} label="Banco *" onChange={onChange} />
        </div>
        <div className="col-md-4">
          <p className="text mb-3">Nombre</p>
          <p className="title">Fly Travel</p>
        </div>
        <div className="col-md-4">
          <p className="text mb-3">Número de cuenta</p>
          <p className="title">6880 8221 6706</p>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-md-4">
          <p className="text mb-3">Código SWIFT</p>
          <p className="title">BOFAUS3N</p>
        </div>
        <div className="col-md-4">
          <p className="text mb-3">Número de ruta (ABA)</p>
          <p className="title">111000025</p>
        </div>
        <div className="col-md-4">
          <p className="text mb-3">Dirección</p>
          <p className="title">
            10685 HAZELHURST DR STE B, HOUSTON TX 77043 -3261
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <Input label="Nombre del Banco" placeholder="N. de transferencia" />
        </div>
        <div className="col-md-4">
          <Input
            label="N. de transferencia"
            placeholder="N. de transferencia"
          />
        </div>
        <div className="col-md-4">
          <p className="text mb-3">Monto</p>
          <p className="title">$300</p>
        </div>
      </div>
    </div>
  );
};

export default Transfer;
