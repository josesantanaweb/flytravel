import React from "react";
import Card from "components/Card/Card";
import moment from "moment";

const VerifyData = ({ details, passengers }) => {
  return (
    <Card>
      <div className="verifydata">
        <h3 className="title mb-4">
          Antes de finalizar revisá los datos ingresados
        </h3>
        <div className="date">
          <h6 className="title text-secondary mb-4">Fecha</h6>
          <p className="text mb-3">
            Ida:{" "}
            <span>
              {moment(details.departure_date).format("D [de] MMMM YYYY")}
            </span>
          </p>
          <p className="text mb-4">
            Vuelta:{" "}
            <span>
              {moment(details.return_date).format("D [de] MMMM YYYY")}
            </span>
          </p>
        </div>
        <div className="passengers">
          <h6 className="title text-secondary mb-4">Pasajeros</h6>
          <div className="row">
            {passengers.map((passenger) => {
              if (
                passenger.PersonName.GivenName.length > 0 &&
                passenger.PersonName.Surname.length > 0 &&
                passenger.Document.DocID.length > 0
              ) {
                return (
                  <div className="col-md-6 mb-3">
                    <p className="text mb-3">
                      Nombres: <span>{passenger.PersonName.GivenName}</span>
                    </p>
                    <p className="text mb-3">
                      Apellidos: <span>{passenger.PersonName.Surname}</span>
                    </p>
                    <p className="text mb-3">
                      Documento: <span>{passenger.Document.DocID}</span>
                    </p>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default VerifyData;
