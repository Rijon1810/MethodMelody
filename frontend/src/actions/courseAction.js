import axios from "../LMS/api/Config";
import {
  GET_CATAGORY,
  GET_COURSE,
  GET_UPCOMING_COURSE,
  GET_COURSE_BY_ID,
  GET_FEATURED_COURSE,
  POST_COURSE,
  POST_FILTER,
  UPDATE_COURSE,
} from "./types";

export const getCourse = () => (dispatch) => {
  axios
    .get("course/featured/", {
      headers: {
        "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
      },
    })
    .then((res) => {
      dispatch({
        type: GET_FEATURED_COURSE,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
  axios
    .get("course/", {
      headers: {
        "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
      },
    })
    .then((res) => {
      dispatch({
        type: GET_COURSE,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
  axios
    .get("course/upcoming", {
      headers: {
        "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
      },
    })
    .then((res) => {
      dispatch({
        type: GET_UPCOMING_COURSE,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
  axios
    .get("course/catagory/", {
      headers: {
        "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
      },
    })
    .then((res) => {
      console.log("this is another problem", res.data);
      dispatch({
        type: GET_CATAGORY,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const postCourse = (data) => async (dispatch) => {
  await axios
    .post("course/add/", data, {
      headers: {
        "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
        "Content-type": "multipart/form-data",
      },
    })
    .then((res) => {
      dispatch({
        type: POST_COURSE,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: POST_COURSE,
        payload: "failed",
      });
      console.log(err);
    });
};
export const courseFilter = (data) => async (dispatch) => {
  await axios
    .post("course/filter", data, {
      headers: {
        "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
        "Content-type": "multipart/form-data",
      },
    })
    .then((res) => {
      dispatch({
        type: POST_FILTER,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: POST_FILTER,
        payload: "failed",
      });
      console.log(err);
    });
};

export const updateCourse = (id, data) => async (dispatch) => {
  console.log(id);
  console.log(data);

  await axios
    .post(`course/${id}/`, data, {
      headers: {
        "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
        "Content-type": "multipart/form-data",
      },
    })
    .then((res) => {
      dispatch({
        type: UPDATE_COURSE,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: UPDATE_COURSE,
        payload: "failed",
      });
      console.log(err);
    });
};

export const getCourseById = (id) => async (dispatch) => {
  console.log(id);
  await axios
    .get(`course/${id}/`, {
      headers: {
        "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
      },
    })
    .then((res) => {
      dispatch({
        type: GET_COURSE_BY_ID,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_COURSE_BY_ID,
        payload: "failed",
      });
      console.log(err);
    });
};
