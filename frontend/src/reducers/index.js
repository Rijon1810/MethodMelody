import { combineReducers } from "redux";

import loggedReducer from "./isLoggedReducer";
const allReducers = combineReducers({
  isLogged: loggedReducer,
});

export default allReducers;
