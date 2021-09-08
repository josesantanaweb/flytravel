import React from "react";
import { Scales } from "./styles";

const Stops = ({ stops }) => {
  return (
    <Scales>
      {stops.map((stop, key) => (
        <div key={key}>
          <span className="stop">
            {stop.iata}
            <span />
          </span>
          <img className="airline" src="../images/airline.png" />
        </div>
      ))}
    </Scales>
  );
};

export default Stops;
