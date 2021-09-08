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

import clientAxios from "../../config/axios";

export const getAvailability = async (body, loading, dispatch) => {
  const se = "1";
  if (loading) {
    loading(true);
  }
  dispatch(cleanAvailability());
  try {
    const { data } = await clientAxios.post("/availability/flights", {
      ...body,
      se,
    });

    // dispatch({
    // 	type    : GET_AVAILABILITY,
    // 	payload : data.flights
    // });
    dispatch({ type: ADD_SEARCH, payload: data.details });
    return data;
  } catch ({ request, response, ...error }) {
    console.log("error", error);
    console.log("request", request);
    console.log("response", response);
    if (response) {
      const message = response.data.message;
      dispatch({ type: ERROR_GETTING_AVAILABILITY, payload: message });
      return response.data;
    } else {
      dispatch({
        type: ERROR_GETTING_AVAILABILITY,
        payload: "Ha ocurrido un error, intente de nuevo más tarde",
      });
      return null;
    }
  } finally {
    loading(false);
  }
};

export const resetError = () => ({
  type: RESET_ERROR,
});

export const cleanAvailability = () => ({
  type: CLEAN_AVAILABILITY,
});

export const getAirports = async (airport) => {
  try {
    const {
      data: { data },
    } = await clientAxios.get(`/airports/autocomplete/${airport}`);
    return { success: true, data };
  } catch ({ request, response, ...error }) {
    return { success: false, data: [] };
  }
};

export const getCountries = (loading = null) => async (dispatch) => {
  try {
    const { data } = await clientAxios.get("/airports/countries");
    console.log(data);
    dispatch({
      type: SET_COUNTRIES,
      payload: data,
    });
  } catch ({ request, response, ...error }) {
    dispatch({
      type: SET_COUNTRIES,
      payload: [],
    });
  } finally {
    if (loading) {
      loading(false);
    }
  }
};

export const setAirports = (data) => ({
  type: SET_AIRPORTS,
  payload: data,
});

export const setCities = (data) => ({
  type: SET_CITIES,
  payload: data,
});

export const setDates = (data) => ({
  type: SET_DATES,
  payload: data,
});

export const setPassangers = (data) => ({
  type: SET_PASSANGERS,
  payload: data,
});

export const setTypeTrip = (data) => ({
  type: SET_TYPE_TRIP,
  payload: data,
});
