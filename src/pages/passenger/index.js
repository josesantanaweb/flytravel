import React, { useContext } from "react";
import Container from "components/Container";
import SendVouchers from "components/Passenger/SendVouchers";
import VerifyData from "components/Passenger/VerifyData";
import PhoneCall from "components/Passenger/PhoneCall";
import PassengersData from "components/Passenger/PassengersData";
import DetailFlight from "components/Passenger/DetailFlight";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "store/availability/actions";
import PageContext from "components/PageContext";
import Loading from "components/Loading/Loading";
import { isValidEmail } from "utils";
import moment from "moment";

const Passenger = ({ query }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const countries = useSelector(({ availability }) => availability.countries);
  const {
    setPath,
    countryContext,
    flightsContext,
    detailsContext,
    setPassengersContext,
  } = useContext(PageContext);

  const [loading, toggleLoading] = React.useState(true);
  const [flights, setFlights] = React.useState(null);
  const [details, setDetails] = React.useState(null);
  const [counts, setCounts] = React.useState(null);
  const [passengers, setPassengers] = React.useState([]);

  const [voucher, setVoucher] = React.useState({
    email: "",
    confirm: "",
  });

  const [phonesCall, setPhones] = React.useState([
    {
      code: countryContext && countryContext.code ? countryContext.code : "",
      phone: "",
    },
  ]);
  const [errorsPassengers, setErrorsPassengers] = React.useState([]);
  const [errorsPhones, setErrorsPhones] = React.useState([]);

  React.useEffect(() => {
    if (!!!flightsContext & !!!detailsContext) {
      router.push("/");
    } else {
      setPath("passenger");
      setFlights(JSON.parse(flightsContext));
      setDetails(JSON.parse(detailsContext));
      dispatch(getCountries(toggleLoading));
    }
  }, []);

  const createPassengersData = (adt, ch, inf) => {
    let passengersInfo = [];
    let count = 0;
    let country = countries.find(
      (values) => values.name.indexOf(`(${countryContext.iso})`) !== -1
    );
    console.log("country", country);
    // console.log('countryContext', countryContext);

    if (adt > 0) {
      for (let i = 0; i < adt; i++) {
        count++;
        passengersInfo.push({
          NumShow: i + 1,
          PassengerTypeCode: "ADT",
          PersonName: {
            NamePrefix: "",
            GivenName: "",
            Surname: "",
          },
          BirthDate: "",
          Email: "",
          Document: {
            DocID: "",
            DocType: "PP",
          },
          TSAInfo: {
            BirthDate: "",
            Gender: "",
            DocExpireDate: "",
            DocIssueCountry: country ? country.value : "",
            BirthCountry: country ? country.value : "",
            TSADocType: "P",
            TSADocID: "",
          },
          TravelerRefNumber: {
            RPH: count,
          },
        });

        if (inf > 0 && i < inf) {
          count++;
          passengersInfo.push({
            NumShow: i + 1,
            PassengerTypeCode: "INF",
            PersonName: {
              NamePrefix: "",
              GivenName: "",
              Surname: "",
            },
            BirthDate: "",
            Document: {
              DocID: "",
              DocType: "PP",
            },
            TSAInfo: {
              Gender: "",
              DocExpireDate: "",
              DocIssueCountry: country ? country.value : "",
              BirthCountry: country ? country.value : "",
            },
            BirthDate: "",
            TravelerRefNumber: {
              RPH: count,
            },
          });
        }
      }
    }
    if (ch > 0) {
      for (let i = 0; i < ch; i++) {
        count++;
        passengersInfo.push({
          NumShow: i + 1,
          PassengerTypeCode: "CNN",
          PersonName: {
            NamePrefix: "",
            GivenName: "",
            Surname: "",
          },
          BirthDate: "",
          Email: "",
          Document: {
            DocID: "",
            DocType: "PP",
          },
          TSAInfo: {
            Gender: "",
            DocExpireDate: "",
            DocIssueCountry: country ? country.value : "",
            BirthCountry: country ? country.value : "",
          },
          TravelerRefNumber: {
            RPH: count,
          },
        });
      }
    }

    setPassengers(passengersInfo);
  };

  React.useEffect(() => {
    if (details && countries.length > 0) {
      setCounts({
        adt: parseInt(details.adult_count),
        ch: parseInt(details.child_count),
        inf: parseInt(details.inf_count),
      });

      createPassengersData(
        parseInt(details.adult_count),
        parseInt(details.child_count),
        parseInt(details.inf_count)
      );
    }
  }, [details, countries]);

  const isValidPassangerData = () => {
    let isValid = true;
    let errors = [];
    passengers.forEach((p) => {
      let partName = `${p.PassengerTypeCode.toLowerCase()}-${p["NumShow"]}`;

      if (p.PersonName.GivenName.length === 0) {
        isValid = false;
        errors.push(`${partName}-PersonName.GivenName`);
      }

      if (p.PersonName.Surname.length === 0) {
        isValid = false;
        errors.push(`${partName}-PersonName.Surname`);
      }

      if (!moment(p.BirthDate).isValid()) {
        isValid = false;
        errors.push(`${partName}-BirthDate`);
      }

      if (p.TSAInfo.BirthCountry.toString().length === 0) {
        isValid = false;
        errors.push(`${partName}-TSAInfo.BirthCountry`);
      }

      if (p.Document.DocType.length === 0) {
        isValid = false;
        errors.push(`${partName}-Document.DocType`);
      }

      if (p.Document.DocID.length === 0) {
        isValid = false;
        errors.push(`${partName}-Document.DocID`);
      }

      if (p.TSAInfo.DocIssueCountry.toString().length === 0) {
        isValid = false;
        errors.push(`${partName}-TSAInfo.DocIssueCountry`);
      }

      if (p.TSAInfo.DocExpireDate.length === 0) {
        isValid = false;
        errors.push(`${partName}-DocExpireDate`);
      }

      if (p.PassengerTypeCode === "ADT" && !isValidEmail(p.Email)) {
        isValid = false;
        errors.push(`${partName}-Email`);
      } else if (
        p.PassengerTypeCode === "CNN" &&
        p.Email.length > 0 &&
        !isValidEmail(p.Email)
      ) {
        isValid = false;
        errors.push(`${partName}-Email`);
      }

      if (p.TSAInfo.Gender.length === 0) {
        isValid = false;
        errors.push(`${partName}-TSAInfo.Gender`);
      }
    });

    if (errors.length > 0) {
      setErrorsPassengers(errors);
    }

    return isValid;
  };

  const isValidPhones = () => {
    let isValid = true;
    let errors = [];

    phonesCall.forEach((phone, index) => {
      if (phone.code.length === 0) {
        isValid = false;
        errors = [{ index, name: "code" }];
      }
      if (phone.phone.length === 0) {
        isValid = false;
        errors = [{ index, name: "phone" }];
      }
    });

    if (errors.length > 0) {
      setErrorsPhones(errors);
    }

    return isValid;
  };

  const verifyDataPassanger = () => {
    let validData = isValidPassangerData();
    let validPhones = isValidPhones();

    if (voucher.email.length > 0 && validPhones && validData) {
      let body = {
        passengers,
        voucher: voucher.email,
        phonesCall,
      };
      goToPayment(JSON.stringify(body));
    }
  };

  const goToPayment = (passengersInfo) => {
    setPassengersContext(passengersInfo);

    router.push(
      {
        pathname: "/payment",
      },
      "/payment"
    );
  };

  return (
    <React.Fragment>
      {loading || !flights || !details ? (
        <Loading />
      ) : (
        <div className="passenger">
          <Container>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                router.back();
              }}
              className="passenger-back mb-3"
            >
              Volver a la Pagina Anterior
            </a>
            <div className="row">
              <div className="col-md-9">
                <h3 className="title mb-4">
                  Falta poco! completa tus datos y finaliza tu compra
                </h3>
                <div className="mb-4">
                  <PassengersData
                    countryPreselected={
                      countryContext && countryContext.iso
                        ? countryContext.iso
                        : ""
                    }
                    setPassengers={setPassengers}
                    passengers={passengers}
                    counts={counts}
                    countries={countries}
                    errors={errorsPassengers}
                    setErrors={setErrorsPassengers}
                    setVoucher={setVoucher}
                  />
                </div>
                <div className="mb-4">
                  <SendVouchers voucher={voucher} setVoucher={setVoucher} />
                </div>
                <div className="mb-4">
                  <PhoneCall
                    countryPreselected={
                      countryContext && countryContext.code
                        ? countryContext.code
                        : ""
                    }
                    phones={phonesCall}
                    setPhones={setPhones}
                    errors={errorsPhones}
                    setErrors={setErrorsPhones}
                  />
                </div>
                <div className="mb-4">
                  <VerifyData passengers={passengers} details={details} />
                </div>
              </div>
              <div className="col-md-3">
                <h3 className="title mb-4">Detalles del Vuelo</h3>
                <DetailFlight
                  flight={flights}
                  typeTrip={details.type_trip}
                  dateDeparture={details.departure_date}
                  dateArrival={details.return_date}
                  acceptFunction={verifyDataPassanger}
                />
              </div>
            </div>
          </Container>
        </div>
      )}
    </React.Fragment>
  );
};

Passenger.getInitialProps = ({ query, ...rest }) => {
  console.log("query", query);
  return { query };
};

export default Passenger;
