import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import BookerPort from "./BookerPort";
import BookerCabin from "./BookerCabin";
import BookerTrigger from "./BookerTrigger";
import {
  BookerContainer,
  BookerMenu,
  BookerItems,
  BookerPrevious,
  BookerLink,
  BookerSubmit,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import {
  setTypeTrip,
  cleanAvailability,
} from "../../store/availability/actions";

import PageContext from "../PageContext";

const Booker = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { dates, airports, passangers, ...availability } = useSelector(
    ({ availability }) => availability
  );
  const [isFocusedFrom, setFocusedFrom] = useState(false);
  const [isFocusedTo, setFocusedTo] = useState(false);
  const [typeTrip, setTrip] = useState("roundtrip");

  const { setDetailsContext } = useContext(PageContext);

  const buildData = () => {
    const body = {
      type_trip: typeTrip,
      departure_airport: airports.departure,
      destination_airport: airports.arrival,
      departure_date: dates.departure,
      return_date: dates.arrival,
      adult_count: passangers.adult,
      child_count: passangers.child,
      inf_count: passangers.inf,
    };
    // console.log(body);

    if (
      body.destination_airport !== "" &&
      body.departure_airport !== "" &&
      body.inf_count <= body.adult_count
    ) {
      setDetailsContext(JSON.stringify(body));
      dispatch(cleanAvailability());
      router.push(
        {
          pathname: "/flights",
        },
        "/flights"
      );
    }
  };

  React.useEffect(() => {
    if (availability.hasOwnProperty("typeTrip") && availability.typeTrip) {
      setTrip(availability.typeTrip);
    }
  }, [availability]);

  return (
    <BookerContainer>
      <BookerMenu>
        <BookerLink
          selected={typeTrip === "roundtrip"}
          onClick={() => {
            setTrip("roundtrip");
            dispatch(setTypeTrip("roundtrip"));
          }}
        >
          Ida y Vuelta
        </BookerLink>
        <BookerLink
          selected={typeTrip === "one-way"}
          onClick={() => {
            setTrip("one-way");
            dispatch(setTypeTrip("one-way"));
          }}
        >
          Solo Ida
        </BookerLink>
      </BookerMenu>
      <BookerItems>
        <BookerPort
          type="departure"
          label="Origen"
          focused={isFocusedFrom}
          onFocus={() => setFocusedFrom(true)}
          setFocus={setFocusedFrom}
        />

        <BookerPort
          type="arrival"
          label="Destino"
          focused={isFocusedTo}
          onFocus={() => setFocusedTo(true)}
          setFocus={setFocusedTo}
        />

        <BookerTrigger typeTrip={typeTrip} />

        <BookerCabin />

        <BookerSubmit onClick={() => buildData()}>
          <i className="fa fa-angle-right" />
        </BookerSubmit>
      </BookerItems>
      <BookerPrevious>
        <BookerLink>Búsquedas anteriores</BookerLink>
      </BookerPrevious>
    </BookerContainer>
  );
};

export default Booker;
