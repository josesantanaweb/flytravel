import {
  GET_CONTACTS,
  GET_CONTACTS_ERROR,
} from "./types";

import clientAxios from "../../config/axios";

export const getContacts = () => {
  return async (dispatch) => {
    dispatch(readContacts());
    try {
      const response = await clientAxios.get("/contacts");
      dispatch({
        type: GET_CONTACTS,
        payload: contacts,
      });
    } catch (error) {
      dispatch({
        type: GET_CONTACTS_ERROR,
        payload: true,
      });
    }
  };
};
