import axios from "../LMS/api/Config";
import { GET_INSTRUCTOR } from "./types";

export const getInstructor = () => (dispatch) => {
  axios
    .get("instructor/", {
      headers: {
        "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
      },
    })
    .then((res) => {
      dispatch({
        type: GET_INSTRUCTOR,
        payload: res.data,
        length: res.data.length,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_INSTRUCTOR,
        payload: [],
        length: 0,
      });
      console.log(err);
    });
    return "True"
};