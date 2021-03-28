import axios from "../LMS/api/Config";
import { SIGN_UP } from "./types";

export const signUp = (data) => (dispatch) => {
  axios
    .post("user/signup/", data, {
      headers: {
        "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
        "Content-type": "multipart/form-data",
      },
    })
    .then((res) => {
      dispatch({
        type: SIGN_UP,
        payload: res.data,
        login: false,
      });
      // alert(res.data.message);
    })
    .catch((err) => {
      console.log(err);
      alert("failed try again");
    });
};
