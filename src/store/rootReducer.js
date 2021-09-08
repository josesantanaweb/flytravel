import { combineReducers } from "redux";
import contactsReducer from "./contacts/reducer";
import availabilityReducer from "./availability/reducer";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  availability: availabilityReducer,
});

export default rootReducer;
