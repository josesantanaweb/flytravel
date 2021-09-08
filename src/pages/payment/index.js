import React, { useContext } from "react";
import Container from "components/Container";
import DetailFlight from "components/Passenger/DetailFlight";
import DetailPayment from "components/Payments/DetailPayment";
import SelectPayment from "components/Payments/SelectPayment";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import PageContext from "components/PageContext";
import Loading from "components/Loading/Loading";
import { makePaymentApi } from "store/payment/actions";
import Modal from "components/Modal";
import Button from "components/Button/Button";

const Payments = ({ query }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [flights, setFlights] = React.useState(null);
  const [details, setDetails] = React.useState(null);
  const [passengers, setPassengers] = React.useState(null);
  const [loading, toggleLoading] = React.useState(true);
  const [price, setPrice] = React.useState(0);
  const [stripe, setStripe] = React.useState(null);
  const [urlInfo, setInfoUrl] = React.useState("");
  const [paymentIntentClientSecret, setPaymentClient] = React.useState("");
  const [resultStripe, setResult] = React.useState(null);
  const [tdcData, setTDC] = React.useState({
    nameTdc: "",
    emailTdc: "",
    phoneTdc: "",
  });

  const [errorMessage, setErrorMessage] = React.useState("");

  const [isOpen, setIsOpen] = React.useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const [isOpenSuccess, setIsOpenSuccess] = React.useState(false);

  const toggleModalSuccess = () => {
    setIsOpenSuccess(!isOpenSuccess);
  };

  const {
    setPath,
    flightsContext,
    detailsContext,
    passengersContext,
  } = useContext(PageContext);

  React.useEffect(() => {
    if (!!!flightsContext && !!!detailsContext && !!!passengersContext) {
      router.push("/");
    } else {
      setPath("payment");
      setFlights(JSON.parse(flightsContext));
      setDetails(JSON.parse(detailsContext));
      setPassengers(JSON.parse(passengersContext));
      toggleLoading(false);
    }
  }, []);

  const asyncPayment = async (body) => {
    const data = await makePaymentApi(body, toggleLoading, null);

    if (data && data.hasOwnProperty("type") && data.type === "payment") {
      const { paymentIntentClientSecret } = data.data;
      let payload = await stripe.confirmCardPayment(paymentIntentClientSecret);
      if (
        payload.hasOwnProperty("paymentIntent") &&
        payload.paymentIntent &&
        payload.paymentIntent.status === "succeeded"
      ) {
        console.log("Aasd", payload.paymentIntent);
        let newBody = {
          ...body,
          paymentStatus: payload.paymentIntent.status === "succeeded",
        };
        const result = await makePaymentApi(newBody, toggleLoading, null);
        console.log("result", result);
      } else {
        console.log("error", payload);
      }
    } else if (
      data &&
      data.hasOwnProperty("type") &&
      data.type === "reservation"
    ) {
      toggleModalSuccess();
    } else {
      console.log("data error", data);
      setErrorMessage(data.message);
      toggleModal();
    }
  };

  const goToFlights = () => {
    router.push(
      {
        pathname: "/flights",
      },
      "/flights"
    );
  };

  const goToHome = () => {
    router.push(
      {
        pathname: "/",
      },
      "/"
    );
  };

  const makePayment = (result, type, TDCData) => {
    switch (type) {
      case "tdc":
        let bodyTdc = {
          passengers: passengers.passengers,
          voucher: passengers.voucher,
          phonesCall: passengers.phonesCall,
          // paymentMethodId : 'pm_card_visa',
          paymentMethodId: result.id,
          retrievePayment: false,
          type,
          flight: {
            arrival: flights.arrival[0],
            departure: flights.departure[0],
            prices: flights.prices.allFares[0],
          },
        };
        setTDC(TDCData);
        setResult(bodyTdc);
        // console.log('body', JSON.stringify(bodyTdc));
        asyncPayment(bodyTdc);
        return;

      default:
        let body = {
          passengers: passengers.passengers,
          voucher: passengers.voucher,
          phonesCall: passengers.phonesCall,
          result,
          type,
          flight: {
            arrival: flights.arrival[0],
            departure: flights.departure[0],
            prices: flights.prices.allFares[0],
          },
        };
        setResult(body);

        console.log(body, "body");
        console.log(JSON.stringify(body), "body");
        return;
    }
  };

  return (
    <React.Fragment>
      {loading || !flights || !details || !passengers ? (
        <Loading />
      ) : (
        <div className="payment">
          <Container>
            <a href="#" className="payment-back mb-3">
              Volver a la Pagina Anterior
            </a>
            <div className="row">
              <div className="col-md-9">
                <h3 className="title mb-4">
                  ¡Ya estás cerca de terminar el proceso de compra!
                </h3>
                <SelectPayment
                  price={price}
                  makePayment={makePayment}
                  setStripe={setStripe}
                  openPopUp={() => null}
                  urlInfo={urlInfo}
                  tdcData={tdcData}
                />
              </div>
              <div className="col-md-3">
                <h3 className="title mb-4">Detalles del Pago</h3>
                <div className="mb-4">
                  <DetailPayment
                    flights={flights}
                    cantPerson={passengers.length}
                    setPrice={setPrice}
                  />
                </div>
                <DetailFlight
                  showPrice={false}
                  flight={flights}
                  typeTrip={details.type_trip}
                  dateDeparture={details.departure_date}
                  dateArrival={details.return_date}
                />
              </div>
            </div>
          </Container>
        </div>
      )}
      <Modal width="50%" style={{ padding: "20px" }} isOpen={isOpen}>
        <div>
          <h3>Oops....</h3>
          <p>{errorMessage}</p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Button
              label="Volver a los vuelos"
              type="primary"
              className="button-primary"
              onClick={() => {
                goToFlights();
              }}
            />
          </div>
        </div>
      </Modal>
      <Modal width="50%" style={{ padding: "20px" }} isOpen={isOpenSuccess}>
        <div>
          <h3>Exito!</h3>
          <p>Su reserva se ha hecho exitosamente</p>
          <p>Enviamos la informacion a su correo</p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Button
              label="Regresar"
              type="primary"
              className="button-primary"
              onClick={() => {
                goToHome();
              }}
            />
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
};

Payments.getInitialProps = ({ query, ...rest }) => {
  console.log("query", query);
  return { query };
};

export default Payments;
