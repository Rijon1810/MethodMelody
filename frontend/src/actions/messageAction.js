import axios from "../LMS/api/Config";
import {
  GET_ALL_MESSAGE,
  POST_MESSAGE,
  REPLY_MESSAGE,
  GET_GENERAL_MESSAGE,
  GET_STUDENT_MESSAGE,
  GET_MESSAGE_BY_ID,
  GET_CURRENT_MESSAGE_BY_ID,
  GET_PREVIOUS_MESSAGE_BY_ID,
  GET_DYNAMICALLY_BY_TAG,
} from "./types";

export const getMessage = () => (dispatch) => {
  axios
    .get(`contact/`, {
      headers: {
        "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
      },
    })
    .then((res) => {
      dispatch({
        type: GET_ALL_MESSAGE,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: GET_ALL_MESSAGE,
        payload: "",
      });
    });
};

export const getMessageById = (id) => (dispatch) => {
  axios
    .get(`contact/m/${id}`, {
      headers: {
        "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
      },
    })
    .then((res) => {
      dispatch({
        type: GET_MESSAGE_BY_ID,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: GET_MESSAGE_BY_ID,
        payload: "",
      });
    });
};

export const getCurrentMessageById = (id) => (dispatch) => {
  axios
    .get(`contact/u/c/${id}`, {
      headers: {
        "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
      },
    })
    .then((res) => {
      console.log(`current message api response = ${res.body}`)
      dispatch({
        type: GET_CURRENT_MESSAGE_BY_ID,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: GET_CURRENT_MESSAGE_BY_ID,
        payload: "",
      });
    });
};

export const getPreviousMessageById = (id) => (dispatch) => {
  axios
    .get(`contact/u/p/${id}`, {
      headers: {
        "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
      },
    })
    .then((res) => {
      dispatch({
        type: GET_PREVIOUS_MESSAGE_BY_ID,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: GET_PREVIOUS_MESSAGE_BY_ID,
        payload: "",
      });
    });
};

export const getGeneralMessage = () => (dispatch) => {
  axios
    .get(`contact/general/`, {
      headers: {
        "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
      },
    })
    .then((res) => {
      dispatch({
        type: GET_GENERAL_MESSAGE,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: GET_GENERAL_MESSAGE,
        payload: "",
      });
    });
};

export const getStudentMessage = () => (dispatch) => {
  axios
    .get(`contact/student/`, {
      headers: {
        "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
      },
    })
    .then((res) => {
      dispatch({
        type: GET_STUDENT_MESSAGE,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: GET_STUDENT_MESSAGE,
        payload: "",
      });
    });
};

export const postMessage = (data) => (dispatch) => {
  console.log(data);
  axios
    .post(`contact/`, data, {
      headers: {
        "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
      },
    })
    .then((res) => {
      dispatch({
        type: POST_MESSAGE,
        payload: "post complete",
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: POST_MESSAGE,
        payload: "post failed",
      });
    });
};

//id = the message id need to be replied
//data = the reply msg itself
export const replyMessage = (id, data) => (dispatch) => {
  axios
    .post(`contact/r/${id}`, data, {
      headers: {
        "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
      },
    })
    .then((res) => {
      dispatch({
        type: REPLY_MESSAGE,
        payload: "replied",
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: REPLY_MESSAGE,
        payload: "reply failed",
      });
    });
};

///:tag/:_id (tag = to / from)
export const getAllMessageDynamicallyByTag = (tag, id) => (dispatch) => {
  axios
    .get(`contact/${tag}/${id}`, {
      headers: {
        "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
      },
    })
    .then((res) => {
      dispatch({
        type: GET_DYNAMICALLY_BY_TAG,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: GET_DYNAMICALLY_BY_TAG,
        payload: "",
      });
    });
};
