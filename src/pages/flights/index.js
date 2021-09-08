import React, { useContext } from "react";
import Container from "components/Container";
import BookNav from "components/BookNav";
import DaySelected from "components/Flights/DaySelected";
import Paginate from "components/Flights/Paginate";
import FlightItem from "components/Flights/FlightItem";
import DetailItinerary from "components/Flights/DetailItinerary/DetailItinerary";
import Button from "components/Button/Button";
import Loading from "components/Loading/Loading";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getAvailability, resetError } from "store/availability/actions";
import moment from "moment";
import "moment/locale/es";
import Flight from "components/Flights/Flight/Flight";
import PageContext from "components/PageContext";
import Modal from "components/Modal";

const Flights = ({ theme }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  // const details = useSelector(({ availability }) => availability.details);

  const flightsRedux = useSelector(({ availability }) => availability.flights);

  const cities = useSelector(({ availability }) => availability.cities);

  const { setPath, setFlightsContext, detailsContext } = useContext(
    PageContext
  );

  const [loading, toggleLoading] = React.useState(false);
  const [dateDeparture, setDateDeparture] = React.useState(null);
  const [dateArrival, setDateArrival] = React.useState(null);
  const [flightSelected, setFlightSelected] = React.useState(null);
  const [indexFlightSelected, setSelectedIndex] = React.useState(false);
  const [flights, setFlights] = React.useState([]);
  const [dtaFlight, setFlightContext] = React.useState(null);

  const [flightsPaginate, setFlightsPaginate] = React.useState({
    first: 0,
    end: 5,
  });

  // console.log("flightsRedux", flightsRedux);
  // console.log("flights", flights);
  // console.log("hasError", hasError);

  React.useEffect(() => {
    setPath("flights");
    let dta = JSON.parse(detailsContext);
    if (!dta || Object.keys(dta).length === 0) {
      router.push("/");
      return;
    }
    setFlightContext(dta);
    setDateDeparture(dta.departure_date);
    setDateArrival(dta.return_date);
    getFlightsAsync(dta);
    //dispatch(getAvailability(dtaFlight, toggleLoading));
  }, []);

  const getFlightsAsync = async (info) => {
    const data = await getAvailability(info, toggleLoading, dispatch);
    if (data && data.hasOwnProperty("flights")) {
      setFlights(data.flights);
    } else {
      setError(true);
      setErrorMessage(data.message);
      toggleModal();
    }
  };

  const changeDepartureDate = (date) => {
    setDateDeparture(date);
    const newDtaFlight = {
      ...dtaFlight,
      departure_date: date,
    };
    getFlightsAsync(newDtaFlight);
  };

  const changeArrivalDate = (date) => {
    setDateArrival(date);
    const newDtaFlight = {
      ...dtaFlight,
      return_date: date,
    };
    dispatch(getAvailability(newDtaFlight, toggleLoading));
  };

  const hanldeChangeDeparture = ({ selected }) => {
    setDeparturePaginate({
      first: selected * 5,
      end: selected * 5 + 5,
    });
  };

  const hanldeChangeArrival = ({ selected }) => {
    setArrivalPaginate({
      first: selected * 5,
      end: selected * 5 + 5,
    });
  };

  const selectFlight = (index) => {
    setSelectedIndex(true);
    setFlightSelected(flights[index]);
  };

  const [isOpen, setIsOpen] = React.useState(false);
  const [hasError, setError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const goToSearch = () => {
    toggleModal();
    dispatch(resetError());
    router.push(
      {
        pathname: "/",
      },
      "/"
    );
  };

  const goToPassangers = () => {
    setFlightsContext(JSON.stringify(flightSelected));
    router.push(
      {
        pathname: "/passenger",
      },
      "/passenger"
    );
  };

  return (
    <React.Fragment>
      <BookNav />
      <Flight className="flights">
        <div className="container">
          {loading ? (
            <Loading />
          ) : (
            <React.Fragment>
              {!hasError && (
                <div className="flight">
                  <div>
                    {/* Ida */}
                    {flights.length > 0 && (
                      <div className="flight-type">
                        <div className="flight-type-row">
                          <h4 className="flight-bound in">Fecha de Salida</h4>
                          {indexFlightSelected && (
                            <Button
                              onClick={() => {
                                setSelectedIndex(false);
                                setFlightSelected(null);
                              }}
                              label="Mostar los demas vuelos"
                              className="button-primary"
                            />
                          )}
                        </div>
                        {dateDeparture && dateArrival && (
                          <DaySelected
                            typeTrip={dtaFlight.type_trip}
                            date={dateDeparture}
                            changeDate={changeDepartureDate}
                            limit={dateArrival}
                            limitType="max"
                          />
                        )}

                        {dateDeparture && (
                          <h3 className="flight-destination">
                            De {cities.departure} a {cities.arrival}, el{" "}
                            {moment(dateDeparture).format("dddd D [de] MMMM")}
                          </h3>
                        )}

                        {indexFlightSelected ? (
                          <div className="flight-items">
                            <FlightItem
                              typeTrip={dtaFlight.type_trip}
                              type="departure"
                              flight={flightSelected.departure}
                              totalFares={flightSelected.prices.totalFare}
                              key={0}
                              index={0}
                              indexFlightSelected={indexFlightSelected}
                              selectFlight={selectFlight}
                            />
                          </div>
                        ) : (
                          <div className="flight-items">
                            {flights
                              .slice(flightsPaginate.first, flightsPaginate.end)
                              .map((flight, key) => (
                                <FlightItem
                                  typeTrip={dtaFlight.type_trip}
                                  type="departure"
                                  flight={flight.departure}
                                  totalFares={flight.prices.totalFare}
                                  key={key}
                                  index={key}
                                  indexFlightSelected={indexFlightSelected}
                                  selectFlight={selectFlight}
                                />
                              ))}
                          </div>
                        )}

                        {flights.length > 5 && (
                          <div className="flight-paginate-container">
                            <Paginate
                              pageCount={
                                flights.length > 5
                                  ? parseInt(flights.length / 5)
                                  : 1
                              }
                              handlePageClick={hanldeChangeDeparture}
                            />
                          </div>
                        )}
                      </div>
                    )}
                    {flightSelected && dtaFlight.type_trip === "roundtrip" && (
                      <React.Fragment>
                        <div className="type">
                          <h4 className="flight-bound in">Fecha de Llegada</h4>
                          {/* <DaySelected
                            date={dateArrival}
                            changeDate={changeArrivalDate}
                            limit={dateDeparture}
                            limitType="min"
                          /> */}
                          <h3 className="flight-destination">
                            De {cities.arrival} a {cities.departure}, el{" "}
                            {moment(dateArrival).format("dddd D [de] MMMM ")}
                          </h3>
                        </div>
                        <div className="flight-items">
                          <FlightItem
                            typeTrip={dtaFlight.type_trip}
                            type="arrival"
                            flight={flightSelected.arrival}
                            totalFares={flightSelected.prices.totalFare}
                            key={0}
                            index={0}
                            selectFlight={selectFlight}
                          />
                        </div>
                      </React.Fragment>
                    )}
                  </div>
                  {flightSelected && (
                    <DetailItinerary
                      flightSelected={flightSelected}
                      cities={cities}
                      typeTrip={dtaFlight.type_trip}
                      dateDeparture={moment(dateDeparture).format(
                        "dddd[,] D [de] MMMM"
                      )}
                      dateArrival={moment(dateArrival).format(
                        "dddd[,] D [de] MMMM "
                      )}
                      goToPassangers={goToPassangers}
                    />
                  )}
                </div>
              )}
            </React.Fragment>
          )}
        </div>
      </Flight>
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
              label="Volver a buscar"
              type="primary"
              className="button-primary"
              onClick={() => {
                goToSearch();
              }}
            />
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
};

Flights.getInitialProps = ({ query, ...rest }) => {
  const dtaFlight = query;
  return { dtaFlight };
};

export default Flights;
