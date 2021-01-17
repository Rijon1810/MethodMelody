import { GET_ALL_USER } from "../actions/types";

const initialState = {
  allUsers: {},
};

const getAllUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USER:
      return {
        ...state,
        allUsers: action.payload,
      };
    default:
      return { ...state };
  }
};

export default getAllUsersReducer;
