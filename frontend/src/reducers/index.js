import loggedReducer from "./isLogged";
import signUpReducer from "./signUp";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  isLogged: loggedReducer,
  signUp: signUpReducer,
});

export default allReducers;
