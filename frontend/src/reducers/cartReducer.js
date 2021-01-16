import { GET_CART, DEL_CART, POST_CART } from "../actions/types";

const initialState = {
  cart: {},
  cartUpdateStatus: {},
};

const cartStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case DEL_CART:
      return {
        ...state,
        cartUpdateStatus: action.payload,
      };
    case POST_CART:
      return {
        ...state,
        cartUpdateStatus: action.payload,
      };
    default:
      return { ...state };
  }
};

export default cartStatusReducer;
