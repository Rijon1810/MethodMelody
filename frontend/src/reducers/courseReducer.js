import { GET_COURSE, GET_FEATURED_COURSE, POST_COURSE } from "../actions/types";

const initialState = {
  payload: [],
  courseList: [],
  featuredCourseList: [],
};

export const getCourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FEATURED_COURSE:
      return {
        ...state,
        featuredCourseList: action.payload,
      };
    case GET_COURSE:
      return {
        ...state,
        courseList: action.payload,
      };
    default:
      return { ...state };
  }
};

export const postCourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_COURSE:
      return {
        ...state,
        payload: action.payload,
      };
    default:
      return { ...state };
  }
};
