import {
  GET_INSTRUCTOR,
  POST_INSTRUCTOR,
  UPDATE_INSTRUCTOR,
  GET_FEATURED_INSTRUCTOR,
} from "../actions/types";

const initialState = {
  instructorList: [],
  featuredInstructorList: [],
  payload: [],
  length: 0,
};

export const getInstructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INSTRUCTOR:
      return {
        ...state,
        instructorList: action.payload,
        length: action.length,
      };
    case GET_FEATURED_INSTRUCTOR:
      return {
        ...state,
        featuredInstructorList: action.payload,
        length: action.length,
      };
    case UPDATE_INSTRUCTOR:
      return {
        ...state,
        payload: action.payload,
      };
    default:
      return { ...state };
  }
};

export const postInstructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_INSTRUCTOR:
      return {
        ...state,
        payload: action.payload,
      };

    default:
      return { ...state };
  }
};
