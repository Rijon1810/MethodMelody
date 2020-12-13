import { IS_LOGGED, IS_LOGGED_OUT } from "../actions/types";

const initialState = {
  payload: [],
  login: false,
};

const loggedReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOGGED:
      return { ...state, payload: action.payload, login: action.login };
    case IS_LOGGED_OUT:
      return { ...state, payload: [], login: action.login };
    default:
      return { ...state };
  }
};

export default loggedReducer;
