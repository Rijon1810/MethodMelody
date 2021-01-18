import axios from "../LMS/api/Config";
import { GET_ALL_MESSAGE, POST_MESSAGE } from "./types";

export const getMessage = () => (dispatch) => {
  axios
    .get(`contact/getall/`, {
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
    });
};

export const submitGeneralContact = (data) => (dispatch) => {
  axios
    .post(`contact/`, data, {
      headers: {
        "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
      },
    })
    .then((res) => {
      dispatch({
        type: POST_MESSAGE,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
