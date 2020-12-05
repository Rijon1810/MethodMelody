import { IS_LOGGED } from "../actions/types";

const initialState = {
  loginData: [],
  login: false,
};

const loggedReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOGGED:
      return { ...state, loginData: action.payload.data, login: true };
    default:
      return { ...state };
  }
};

export default loggedReducer;
