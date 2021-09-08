import React, { useState } from "react";
import BookerAutoComplete from "../BookerAutoComplete";
import {
  BookerPortContainer,
  BookerPortIcon,
  BookerPortSelect,
  BookerPortInput,
  BookerPortButton,
  BookerPortLabel,
  BookerPortText,
} from "./styles";
import { useSelector } from "react-redux";

const BookerPort = ({ focused, onFocus, label, setFocus, type }) => {
  const [selectedAirport, setAirport] = React.useState("");

  const { airports } = useSelector(({ availability }) => availability);

  return (
    <BookerPortContainer>
      <BookerPortIcon>
        <img src={`${window.location.origin}/images/plane_round.png`} />
      </BookerPortIcon>
      <BookerPortSelect focused={focused}>
        <BookerAutoComplete
          preSelected={airports[type]}
          focused={focused}
          onFocus={onFocus}
          setAirport={setAirport}
          setFocus={setFocus}
          type={type}
        />
        <BookerPortButton>
          <BookerPortLabel focused={focused}>{label}</BookerPortLabel>
        </BookerPortButton>
        <BookerPortText>
          {selectedAirport.length > 0 && selectedAirport}
        </BookerPortText>
      </BookerPortSelect>
    </BookerPortContainer>
  );
};

export default BookerPort;
