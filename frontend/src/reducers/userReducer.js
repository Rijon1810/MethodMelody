import { GET_ALL_USER, GET_USER_COURSE } from "../actions/types";

const initialState = {
  allUsers: {},
  getUserCourse: {},
};

const getAllUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USER:
      return {
        ...state,
        allUsers: action.payload,
      };
    case GET_USER_COURSE:
      return {
        ...state,
        getUserCourse: action.payload,
      };
    default:
      return { ...state };
  }
};

export default getAllUsersReducer;
