import axios from "../LMS/api/Config";
import auth from "../LMS/routes/auth";

const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case "SIGN_IN":
      axios
        .post("user/login/", action.data, {
          headers: {
            "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
            "Content-type": "application/json",
          },
        })
        .then((res) => {
          console.log(res);
          auth.login(
            res.data.v_token,
            res.data.email,
            res.data.type,
            res.data.name,
            res.data.id,
            res.data.course
          );
        })
        .catch((res) => {
          auth.logout();
        });
      return !state;
    default:
      return state;
  }
};

export default loggedReducer;
