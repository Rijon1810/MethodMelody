import { GET_SELECTED_COURSE_ID, GET_SELECTED_INSTRUCTOR_ID } from "../actions/types";

const initialState = {
  getSelectedCourseId: {},
  getSelectedInstructorId: {},
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
    default:
      return { ...state };
  }
};

export default getSelectedIdReducer;
