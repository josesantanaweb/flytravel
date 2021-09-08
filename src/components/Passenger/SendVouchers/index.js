import React from "react";
import Input from "components/Input";
import Card from "components/Card/Card";
import { isValidEmail } from "utils";

const SendVouchers = ({ voucher, setVoucher }) => {
  const { email, confirm } = voucher;

  const onChange = (value, type) => {
    setVoucher((old) => {
      return {
        ...old,
        [type]: value,
      };
    });
  };

  const getErrorStyle = (value, isConfirm = false) => {
    let show = false;

    if (isConfirm) {
      show = !isValidEmail(value) || value !== email;
    } else {
      show = !isValidEmail(value);
    }

    if (show) {
      return { borderColor: "red", borderWidth: 1 };
    }

    return {};
  };

  return (
    <Card>
      <div className="sendvouchers">
        <h3 className="title mb-3">¿A dónde enviamos tus vouchers?</h3>
        <p className="text mb-4">
          El email que elijas será fundamental para que gestiones tu reserva y
          recibas información importante sobre tu viaje.
        </p>
        <div className="row">
          <div className="col-md-6">
            <Input
              label="Email"
              style={getErrorStyle(email)}
              placeholder="Ingrese su email"
              value={email}
              onChange={(e) => onChange(e.currentTarget.value, "email")}
            />
          </div>
          <div className="col-md-6">
            <Input
              label="Confirma tu Email"
              style={getErrorStyle(confirm, true)}
              placeholder="Repita su email"
              value={confirm}
              onChange={(e) => onChange(e.currentTarget.value, "confirm")}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SendVouchers;
