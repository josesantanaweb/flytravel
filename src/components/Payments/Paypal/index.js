import React from "react";

const Paypal = () => {
  return (
    <div className="paypal">
      <p className="text mb-4">
        Para completar la transacción, te enviaremos a los servidores seguros de
        PayPal.
      </p>
      <div className="paypal-security">
        <i className="fa fa-lock mr-2"></i>
        Conexión segura
      </div>
    </div>
  );
};

export default Paypal;
