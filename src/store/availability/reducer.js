import {
  GET_AVAILABILITY,
  SET_AIRPORTS,
  SET_DATES,
  SET_PASSANGERS,
  SET_TYPE_TRIP,
  SET_CITIES,
  SET_COUNTRIES,
  ERROR_GETTING_AVAILABILITY,
  RESET_ERROR,
  CLEAN_AVAILABILITY,
  ADD_SEARCH,
} from "./types";
const now = require("moment-timezone");
const week = require("moment-timezone");

const initialState = {
  flights: [],
  countries: [],
  details: {},
  recentSearchs: [],
  typeTrip: "roundtrip",
  airports: {
    departure: "",
    arrival: "",
  },
  dates: {
    // departure: "2020-10-25",
    departure: now().tz("America/Caracas").format("Y-MM-DD"),
    // arrival: "2020-10-29",
    arrival: week().tz("America/Caracas").add(1, "week").format("Y-MM-DD"),
  },
  passangers: {
    adult: 1,
    child: 0,
    inf: 0,
  },
  cities: {
    departure: "",
    arrival: "",
  },
  errorAvailability: false,
  errorMessage: "",
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_AVAILABILITY:
      return {
        ...state,
        flights: payload.flights,
        details: payload.details,
      };
    case ADD_SEARCH:
      console.log("asdf");
      return {
        ...state,
        recentSearchs: [payload, ...state.recentSearchs],
        errorAvailability: false,
        errorMessage: "",
      };
    case CLEAN_AVAILABILITY:
      return {
        ...state,
        flights: [],
        details: {},
        errorAvailability: false,
        errorMessage: "",
      };
    case ERROR_GETTING_AVAILABILITY:
      return {
        ...state,
        errorAvailability: true,
        errorMessage: payload,
        flights: [],
        details: {},
      };

    case RESET_ERROR:
      return {
        ...state,
        errorAvailability: false,
        errorMessage: "",
      };

    case SET_AIRPORTS:
      let airports = state.airports;

      airports[payload.type] = payload.data;

      return {
        ...state,
        airports,
      };

    case SET_COUNTRIES:
      let countries = payload.data;

      return {
        ...state,
        countries,
      };

    case SET_CITIES:
      let cities = state.cities;

      cities[payload.type] = payload.data;

      return {
        ...state,
        cities,
      };

    case SET_DATES:
      let dates = state.dates;

      dates[payload.type] = payload.data;

      return {
        ...state,
        dates,
      };

    case SET_PASSANGERS:
      let passangers = state.passangers;

      passangers[payload.type] = payload.data;

      return {
        ...state,
        passangers,
      };

    case SET_TYPE_TRIP:
      return {
        ...state,
        typeTrip: payload,
      };

    default:
      return state;
  }
}
