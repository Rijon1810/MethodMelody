import { GET_ORDER } from "../actions/types";

const initialState = {
  orderList: [],
};


export const getOrderReducer = (state = initialState, action) => {
  //console.log(action.payload);
  switch (action.type) {

    case GET_ORDER:
      return {
        ...state,
        orderList: action.payload,
      
      };
    default:
      return { ...state };
  }
};


