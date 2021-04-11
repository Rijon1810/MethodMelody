import {CUPON , GET_CUPON } from "../actions/types";

const initialState = {
  cuponList: [],
};

export const cuponReducer = (state = initialState, action) => {
  switch (action.type) {
    case CUPON:
      return { ...state, payload: action.payload };
    default:
      return { ...state };
  }
};

export const getCuponReducer = (state = initialState, action) => {
  //console.log(action.payload);
  switch (action.type) {

    case GET_CUPON:
      return {
        ...state,
        cuponList: action.payload,
      
      };
    default:
      return { ...state };
  }
};


