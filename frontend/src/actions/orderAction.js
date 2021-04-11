import axios from "../LMS/api/Config";
import {  GET_ORDER} from "./types";


export const getOrder = () => (dispatch) => {
 
  axios
    .get("order/list", {
      headers: {
        "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
      }
    })
    .then((res) => {
    //  console.log(res+ "piea gechi");
      dispatch({
        type: GET_ORDER,
        payload: res.data,
      });
     
      // alert(res.data.message);
    })
    .catch((err) => {
     // console.log(err);
     // alert("failed try again");
    });
};
