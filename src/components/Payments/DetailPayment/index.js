import React from "react";

import Card from "components/Card/Card";

const DetailPayment = ({ flights, cantPerson = 1, setPrice }) => {
  const [baseFares, setBaseFare] = React.useState(0);
  const [totalFare, setTotalFare] = React.useState(0);
  const [totalTaxes, setTotalTaxes] = React.useState(0);

  React.useEffect(() => {
    const allFares = flights.prices.allFares;
    const firstFare = allFares[0];

    const taxes = Object.values(firstFare.taxes).reduce(
      (t, { Amount }) => t + Amount,
      0
    );

    setTotalTaxes(taxes);
    setTotalFare(firstFare.totalFare);
    setBaseFare(firstFare.equivFare);
    setPrice(firstFare.totalFare);
  }, []);

  console.log("totalFare, totalTaxes", totalFare, totalTaxes);

  return (
    <Card>
      <div className="detail-payment">
        <div className="row mb-3">
          <div className="col-md-8">
            <p className="text">Vuelo para {cantPerson} persona</p>
          </div>
          <div className="col-md-4">
            <p className="text text-truncate" style="width: 90px">USD {baseFares}</p>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-8">
            <p className="text">Impuestos:</p>
          </div>
          <div className="col-md-4">
            <p className="text text-truncate text-error" style="width: 90px">
              USD {totalTaxes}
            </p>
          </div>
        </div>
        <div className="detail-payment-total">
          <div className="row">
            <div className="col-md">
              <p className="title">TOTAL:</p>
            </div>
            <div className="col-md text-right">
              <p className="title">USD {totalFare}</p>
            </div>
          </div>
        </div>
        {/* <Button
					label='Comprar'
					onClick={() => makePayment()}
					disabled={!stripeActive}
					className='button-primary button-block'
				/> */}
      </div>
    </Card>
  );
};

export default DetailPayment;
