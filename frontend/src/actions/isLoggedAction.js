import axios from "../LMS/api/Config";
import auth from "../LMS/routes/auth";
import { IS_LOGGED } from "./types";

export const isLogged = (data) => (dispatch) => {
  axios
    .post("user/login/", data, {
      headers: {
        "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
        "Content-type": "application/json",
      },
    })
    .then((res) => {
      dispatch({
        type: IS_LOGGED,
        payload: res.data,
        login: true,
      });
      console.log(" from action",res.data.v_token);
      
      auth.login(res.data.v_token, res.data.type);
    })
    .catch((res) => {
      dispatch({
        type: IS_LOGGED,
        payload: [],
        login: false,
      });
      auth.logout();
      alert("Login Failed!! Please try with correct Credentials.");
    });
};
