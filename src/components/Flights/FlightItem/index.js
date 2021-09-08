import React, { useState } from "react";

import Scales from "./components/Scales";
import PortSegment from "./components/PortSegment";
import PriceSegment from "./components/PriceSegment";
import DetailItinerary from "./components/DetailItinerary";
import moment from "moment-timezone";

import { Item } from "./styles";

const FlightItem = ({
  type,
  flight,
  typeTrip,
  index,
  selectFlight,
  totalFares,
  indexFlightSelected,
}) => {
  const [isdetail, setIsDetail] = useState(false);

  const countOfSegments =
    Object.keys(flight).length === 1 ? 1 : Object.keys(flight).length - 1;

  const [flightShow, setFlightShow] = React.useState(null);
  const [departureCity, setDepartureCity] = React.useState(null);
  const [departureAirport, setDepartureAirport] = React.useState(null);
  const [departureFlightTime, setDepartureFlightTime] = React.useState(null);
  const [arrivalCity, setArrivalCity] = React.useState(null);
  const [arrivalAirport, setArrivalAirport] = React.useState(null);
  const [arrivalFlightTime, setArrivalFlightTime] = React.useState(null);

  React.useEffect(() => {
    setFlightShow(flight[countOfSegments > 1 ? countOfSegments : 0]);
    setDepartureCity(
      flight[countOfSegments > 1 ? countOfSegments : 0]["detailedItinerary"][
        `segment-${countOfSegments}`
      ]["departureAirportCity"]
    );
    setDepartureAirport(
      flight[countOfSegments > 1 ? countOfSegments : 0]["detailedItinerary"][
        `segment-${countOfSegments}`
      ]["departureAirport"]
    );
    setDepartureFlightTime(
      flight[countOfSegments > 1 ? countOfSegments : 0]["detailedItinerary"][
        `segment-${countOfSegments}`
      ]["departureTime"]
    );
    setArrivalCity(
      flight[countOfSegments > 1 ? countOfSegments : 0]["detailedItinerary"][
        `segment-${countOfSegments}`
      ]["arrivalAirportCity"]
    );
    setArrivalAirport(
      flight[countOfSegments > 1 ? countOfSegments : 0]["detailedItinerary"][
        `segment-${countOfSegments}`
      ]["arrivalAirport"]
    );
    setArrivalFlightTime(
      flight[countOfSegments > 1 ? countOfSegments : 0]["detailedItinerary"][
        `segment-${countOfSegments}`
      ]["arrivalTime"]
    );
  }, [countOfSegments]);

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
    <React.Fragment>
      {flightShow && (
        <Item>
          <div className="card-group">
            <div className="card">
              <PortSegment
                airport={departureAirport}
                city={departureCity}
                hours={departureFlightTime}
              />

              {flightShow.stops && (
                <Scales stops={flightShow.stops.slice(0, 1)} />
              )}

              <PortSegment
                airport={arrivalAirport}
                city={arrivalCity}
                hours={arrivalFlightTime}
              />

              <div>
                <p className="duration">Duracion del Vuelo</p>
                <p className="time">
                  {getTimeInHoursFromMins(flightShow.totalFlightTime)}
                </p>
              </div>

              <div>
                <span
                  className="details"
                  onClick={() => setIsDetail(!isdetail)}
                >
                  Detalles
                </span>
              </div>
            </div>

            <div className="card">
              <PriceSegment
                prices={totalFares}
                total={totalFares[0]}
                typeTrip={typeTrip}
                type={type}
                index={index}
                selectFlight={selectFlight}
                indexFlightSelected={indexFlightSelected}
              />
            </div>
          </div>

          {isdetail && (
            <DetailItinerary
              details={flightShow.detailedItinerary}
              getTimeInHoursFromMins={getTimeInHoursFromMins}
            />
          )}
        </Item>
      )}
    </React.Fragment>
  );
};

export default FlightItem;
