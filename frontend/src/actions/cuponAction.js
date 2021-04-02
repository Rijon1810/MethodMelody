import axios from "../LMS/api/Config";
import { CUPON } from "./types";

export const cupon = (cuponCode ,discount,useLimit,expireDate) => (dispatch) => {
  var data = {
    cuponCode,
    discount,
    useLimit,
    expireDate
  }
  console.log(data);
  axios
    .post("cart/cupon", data, {
      headers: {
        "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
        "Content-type": "application/json",
      },
    })
    .then((res) => {
      alert("Cupon created succesfully")
      dispatch({
        type: CUPON,
        payload: res.data,
      });
     
      // alert(res.data.message);
    })
    .catch((err) => {
      console.log(err);
      alert("failed try again");
    });
};
