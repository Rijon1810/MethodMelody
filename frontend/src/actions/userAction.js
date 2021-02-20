import axios from "../LMS/api/Config";
import {
  GET_ALL_USER,
  GET_USER_COURSE,
  USER_UPDATE,
  USER_SUSPEND,
  GET_TYPED_USER,
} from "./types";

export const getUser = () => (dispatch) => {
  axios
    .get(`user/`, {
      headers: {
        "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
      },
    })
    .then((res) => {
      dispatch({
        type: GET_ALL_USER,
        payload: res.data,
      });
      console.log(`all users = ${res.data}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getByType = (type) => (dispatch) => {
  axios
    .get(`user/type/${type}`, {
      headers: {
        "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
      },
    })
    .then((res) => {
      dispatch({
        type: GET_TYPED_USER,
        payload: res.data,
      });
      console.log(`all users = ${res.data}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getByStudentType = (tag) => (dispatch) => {
  axios
    .get(`user/${tag}`, {
      headers: {
        "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
      },
    })
    .then((res) => {
      dispatch({
        type: GET_TYPED_USER,
        payload: res.data,
      });
      console.log(`all users = ${res.data}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getUserCourse = (id) => async (dispatch) => {
  await axios
    .get(`user/${id}/`, {
      headers: {
        "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
        "Content-type": "multipart/form-data",
      },
    })
    .then((res) => {
      dispatch({
        type: GET_USER_COURSE,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_USER_COURSE,
        payload: "failed",
      });
      console.log(err);
    });
};

export const updateUser = (data) => async (dispatch) => {
  await axios
    .post("user/", data, {
      headers: {
        "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
        "Content-type": "multipart/form-data",
      },
    })
    .then((res) => {
      dispatch({
        type: USER_UPDATE,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: USER_UPDATE,
        payload: "failed",
      });
      console.log(err);
    });
};

export const suspend = (id) => async (dispatch) => {
  await axios
    .post(`user/${id}`, {
      headers: {
        "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
        "Content-type": "multipart/form-data",
      },
    })
    .then((res) => {
      dispatch({
        type: USER_SUSPEND,
        payload: "suspended",
      });
    })
    .catch((err) => {
      dispatch({
        type: USER_SUSPEND,
        payload: "failed",
      });
      console.log(err);
    });
};
