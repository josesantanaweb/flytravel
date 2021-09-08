import {
  GET_CONTACTS,
  GET_CONTACTS_ERROR,
} from "./types";

const initialState = {
  contacts: [],
  contact: {},
  error: false,
  loading: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CONTACTS:
      return {
        ...state,
        loading: true,
        contacts: payload,
        error: false,
      };
    case GET_CONTACTS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
}
