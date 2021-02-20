import {
  GET_ALL_USER,
  GET_USER_COURSE,
  USER_UPDATE,
  USER_SUSPEND,
} from "../actions/types";

const initialState = {
  allUsers: {},
  getUserCourse: {},
  payload: {},
  suspendStatus: "",
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
    case USER_UPDATE:
      return {
        ...state,
        payload: action.payload,
      };
    case USER_SUSPEND:
      return {
        ...state,
        suspendStatus: action.payload,
      };
    default:
      return { ...state };
  }
};

export default getAllUsersReducer;
