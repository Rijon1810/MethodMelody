import {
  GET_COURSE,
  GET_FEATURED_COURSE,
  POST_COURSE,
  GET_CATAGORY,
  GET_COURSE_BY_ID,
  UPDATE_COURSE,
  POST_FILTER,
  GET_UPCOMING_COURSE
} from "../actions/types";

const initialState = {
  payload: [],
  courseList: [],
  featuredCourseList: [],
  catagoryList: [],
  updateConfirmation: [],
  upcomingList : []
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
    case GET_UPCOMING_COURSE:
      return {
        ...state,
        upcomingList: action.payload,
      };
    case GET_CATAGORY:
      return {
        ...state,
        catagoryList: action.payload,
      };
    case GET_COURSE_BY_ID:
      return {
        ...state,
        payload: action.payload,
      };
    case UPDATE_COURSE:
      return {
        ...state,
        updateConfirmation: action.payload,
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
export const postCourseFilter = (state = initialState, action) => {
  switch (action.type) {
    case POST_FILTER:
      return {
        ...state,
        payload: action.payload,
      };
    default:
      return { ...state };
  }
};
