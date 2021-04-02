import {CUPON } from "../actions/types";

const initialState = {
  payload: [],
};

const cuponReducer = (state = initialState, action) => {
  switch (action.type) {
    case CUPON:
      return { ...state, payload: action.payload };
    default:
      return { ...state };
  }
};

export default cuponReducer;
