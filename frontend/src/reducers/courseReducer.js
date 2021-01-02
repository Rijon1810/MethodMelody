import {
  GET_COURSE,
  GET_FEATURED_COURSE,
  POST_COURSE,
  GET_CATAGORY,
} from "../actions/types";

const initialState = {
  payload: [],
  courseList: [],
  featuredCourseList: [],
  catagoryList: [],
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
    case GET_CATAGORY:
      return {
        ...state,
        catagoryList: action.payload,
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
