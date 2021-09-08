import React from "react";

import { Itinerary } from "./styles";

const DetailItinerary = ({ details, getTimeInHoursFromMins }) => {
  return (
    <Itinerary>
      <div className="header">
        <span>Vuelo</span>
        <span>Desde</span>
        <span>Hacia</span>
        <span>Duracion</span>
      </div>
      {Object.keys(details).map((i, key) => (
        <div className="body" key={key}>
          <div className="item">
            <span>
              <div>
                <img className="airline" src="../images/airline.png" />
                <h4 className="code">{details[i]["airline"]["name"]}</h4>
              </div>
              {/* <p className="airline-name">{details[i]["airline"]["name"]}</p> */}
              {/* <p className="more">Mas Info</p> */}
            </span>

            <span>
              <h3 className="hours">{details[i]["departureTime"]}</h3>
              <p className="city">{details[i]["departureAirportCity"]}</p>
              <p className="airport">{details[i]["departureAirport"]}</p>
            </span>

            <span>
              <h3 className="hours">{details[i]["arrivalTime"]}</h3>
              <p className="city">{details[i]["arrivalAirportCity"]}</p>
              <p className="airport">{details[i]["arrivalAirport"]}</p>
            </span>

            <span>
              <p className="duration">
                {getTimeInHoursFromMins(details[i]["stopFlightTime"])}
              </p>
            </span>
          </div>

          <div className="item">
            <div className="additional">
              <h4>
                Escalas y vuelos de conexión para{" "}
                <b>{details[i]["arrivalAirportCity"]}</b>
              </h4>
              <p className="airport">{details[i]["arrivalAirport"]}</p>
            </div>
          </div>
        </div>
      ))}
    </Itinerary>
  );
};

export default DetailItinerary;
