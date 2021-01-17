import axios from "../LMS/api/Config";
import { GET_ALL_USER } from "./types";

export const getUser = (data) => (dispatch) => {
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
