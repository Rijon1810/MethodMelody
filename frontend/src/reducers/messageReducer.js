import { GET_ALL_MESSAGE } from "../actions/types";

const initialState = {
  generalMessages: {},
};

const getAllMessagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MESSAGE:
      return {
        ...state,
        generalMessages: action.payload,
      };
    default:
      return { ...state };
  }
};

export default getAllMessagesReducer;
