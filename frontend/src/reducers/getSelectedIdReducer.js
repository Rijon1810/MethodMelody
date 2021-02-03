import {
  GET_SELECTED_COURSE_ID,
  GET_SELECTED_INSTRUCTOR_ID,
  GET_SELECTED_LESSON_ID,
  GET_SELECTED_COURSE_CATEGORY
} from "../actions/types";

const initialState = {
  getSelectedCourseId: {},
  getSelectedInstructorId: {},
  getCurrentVideoIndex: 0,
  getSelectedCourseCategoryList: "",
};

const getSelectedIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SELECTED_COURSE_ID:
      return {
        ...state,
        getSelectedCourseId: action.payload,
      };
    case GET_SELECTED_INSTRUCTOR_ID:
      return {
        ...state,
        getSelectedInstructorId: action.payload,
      };
    case GET_SELECTED_LESSON_ID:
      return {
        ...state,
        getCurrentVideoIndex: action.payload,
      };
      case GET_SELECTED_COURSE_CATEGORY:
        return {
          ...state,
          getSelectedCourseCategoryList: action.payload,
        };
    default:
      return { ...state };
  }
};

export default getSelectedIdReducer;
