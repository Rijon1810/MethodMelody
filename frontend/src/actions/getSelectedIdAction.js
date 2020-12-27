import { GET_SELECTED_COURSE_ID, GET_SELECTED_INSTRUCTOR_ID } from "./types";

export const getSelectedCourseId = (course) => (dispatch) => {
  dispatch({
    type: GET_SELECTED_COURSE_ID,
    payload: course,
  });
};

export const getSelectedInstructorId = (instructor) => (dispatch) => {
    dispatch({
      type: GET_SELECTED_INSTRUCTOR_ID,
      payload: instructor,
    });
  };
  