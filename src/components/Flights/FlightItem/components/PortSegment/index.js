import React from "react";
import { Segment } from "./styles";

const PortSegment = ({ airport, city, hours }) => {
  return (
    <Segment>
      <h3 className="hours">{hours}</h3>
      <h3 className="iata">{airport}</h3>
      <p className="city">{city}</p>
    </Segment>
  );
};

export default PortSegment;
