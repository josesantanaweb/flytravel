import React, { useEffect, useState } from "react";
import Card from "components/Card/Card";
import Button from "components/Button/Button";
// import moment from 'moment';

const DetailItinerary = ({
  flightSelected,
  cities,
  typeTrip,
  dateDeparture,
  dateArrival,
  goToPassangers,
}) => {
  const [isSticky, setSticky] = useState(false);

  const countOfSegments =
    Object.keys(flightSelected.departure).length === 1
      ? 1
      : Object.keys(flightSelected.departure).length - 1;

  const [departure, setDepartureData] = React.useState(null);
  const [arrival, setarrivalData] = React.useState(null);

  React.useEffect(() => {
    setDepartureData(
      flightSelected["departure"][countOfSegments > 1 ? countOfSegments : 0]
    );
    setarrivalData(
      flightSelected["arrival"][countOfSegments > 1 ? countOfSegments : 0]
    );
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > 600) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, [flightSelected]);

  const jsUcfirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const getTimeInHoursFromMins = (mins, withFormat = false) => {
    if (mins >= 24 * 60 || mins < 0) {
      throw new RangeError(
        "Valid input should be greater than or equal to 0 and less than 1440."
      );
    }
    const h = (mins / 60) | 0,
      m = mins % 60 | 0;
    if (withFormat) {
      return `${h}:${m}`;
    }
    return `${h}h ${m}min`;
  };

  return (
    <div className="detail">
      {departure && (
        <Card className="detail-float">
          <h3 className="title text-truncate mb-3" style="width: 190px;">
            {cities.departure} - {cities.arrival}
          </h3>

          <div className="detail-bound mb-3">
            <h4 className="title text-secondary mb-2">Ida</h4>
            <p className="text mb-4">{jsUcfirst(dateDeparture)}</p>

            <div className="detail-segment">
              <div>
                <h4 className="title mb-2">{departure.stopsInfo[0]}</h4>
                <h4 className="text">
                  {departure.departureTimeAllFlight.slice(0, -3)}
                </h4>
              </div>

              <div className="detail-scale">
                {departure.stopsInfo.length > 2 && (
                  <React.Fragment>
                    <span className="detail-stop">
                      CSS
                      <span />
                      <img src="../images/airline.png" />
                    </span>
                    <span className="detail-stop">
                      CSS
                      <span />
                      <img src="../images/airline.png" />
                    </span>
                  </React.Fragment>
                )}
              </div>
              <div className="segment-file">
                <h4 className="title mb-2">
                  {departure.stopsInfo[departure.stopsInfo.length - 1]}
                </h4>
                <h4 className="text">
                  {departure.arrivalTimeAllFlight.slice(0, -3)}
                </h4>
              </div>
            </div>

            <div>
              <p className="text mb-2">Duración</p>
              <p className="text mb-4">
                {getTimeInHoursFromMins(departure.totalFlightTime)}
              </p>
            </div>
          </div>
          {typeTrip === "roundtrip" && arrival && (
            <React.Fragment>
              <h3 className="title text-truncate mb-3" style="width: 190px;">
                {cities.arrival} - {cities.departure}
              </h3>
              <div className="detail-bound mb-3">
                <h4 className="title text-secondary mb-2">Vuelta</h4>
                <p className="text mb-4">{jsUcfirst(dateArrival)}</p>

                <div className="detail-segment">
                  <div>
                    <h4 className="title mb-2">{arrival.stopsInfo[0]}</h4>
                    <h4 className="text">
                      {arrival.departureTimeAllFlight.slice(0, -3)}
                    </h4>
                  </div>

                  <div className="detail-scale">
                    {arrival.stopsInfo.length > 2 && (
                      <React.Fragment>
                        <span className="detail-stop">
                          CSS
                          <span />
                          <img src="../images/airline.png" />
                        </span>
                        <span className="detail-stop">
                          CSS
                          <span />
                          <img src="../images/airline.png" />
                        </span>
                      </React.Fragment>
                    )}
                  </div>
                  <div className="segment-file">
                    <h4 className="title mb-2">
                      {arrival.stopsInfo[arrival.stopsInfo.length - 1]}
                    </h4>
                    <h4 className="text">
                      {arrival.arrivalTimeAllFlight.slice(0, -3)}
                    </h4>
                  </div>
                </div>

                <div>
                  <p className="text mb-2">Duración</p>
                  <p className="text mb-4">
                    {getTimeInHoursFromMins(arrival.totalFlightTime)}
                  </p>
                </div>
              </div>
            </React.Fragment>
          )}

          <div className="detail-policies mb-4">
            <p className="text text-primary mb-4">Precio</p>
            <p
              className="text text-success"
              style={{ fontWeight: "bold" }}
            >{`USD ${flightSelected.prices.totalFare[0]}`}</p>
          </div>
          <Button
            label="Aceptar"
            onClick={() => goToPassangers()}
            className="button-primary button-block"
          />

          {isSticky ? (
            <Card className="detail-sticky">
              <div className="detail-policies mb-4">
                <p className="text text-primary mb-4">Precio</p>
                <p
                  className="text text-success"
                  style={{ fontWeight: "bold" }}
                >{`USD ${flightSelected.prices.totalFare[0]}`}</p>
              </div>
              <Button
                label="Aceptar"
                onClick={() => goToPassangers()}
                className="button-primary button-block"
              />
            </Card>
          ) : null}
        </Card>
      )}
    </div>
  );
};

export default DetailItinerary;
