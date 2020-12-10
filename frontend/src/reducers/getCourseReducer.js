import { GET_COURSE, GET_FEATURED_COURSE } from "../actions/types";

const initialState = {
  courseList: [],
  featuredCourseList: [],
};

const getCourseReducer = (state = initialState, action) => {
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

export default getCourseReducer;
