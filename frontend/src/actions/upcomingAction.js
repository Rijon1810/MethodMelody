import axios from "../LMS/api/Config";
import { UPCOMING } from "./types";

export const upcoming = (data) => (dispatch) => {
  axios
    .post("user/upcoming/", data, {
      headers: {
        "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
        "Content-type": "multipart/form-data",
      },
    })
    .then((res) => {
      dispatch({
        type: UPCOMING,
        payload: res.data
      });
      // alert(res.data.message);
    })
    .catch((err) => {
      //console.log(err);
      //alert("failed try again");
    });
};
