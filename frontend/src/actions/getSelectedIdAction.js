import axios from "../LMS/api/Config";
import {
  GET_SELECTED_COURSE_CATEGORY, GET_SELECTED_COURSE_ID,
  GET_SELECTED_INSTRUCTOR_ID,
  GET_SELECTED_LESSON_ID
} from "./types";

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

export const getSelectedCourseCategory = (category) => (dispatch) => {
  dispatch({
    type: GET_SELECTED_COURSE_CATEGORY,
    payload: [],
  });
  console.log(`course category locked = ${category}`);
  let url = `course/search?catagory=${category}`;
  if(category===""){
    url = `course/search?catagory=`
  }
  axios
    .get(url, {
      headers: {
        "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
      },
    })
    .then((res) => {
      dispatch({
        type: GET_SELECTED_COURSE_CATEGORY,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getCurrentVideoIndex = (videoIndex) => (dispatch) => {
  dispatch({
    type: GET_SELECTED_LESSON_ID,
    payload: videoIndex,
  });
};
