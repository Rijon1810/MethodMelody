import axios from "../LMS/api/Config";
import { DEL_CART, POST_CART, GET_CART } from "./types";

export const getCart = () => (dispatch) => {
  axios
    .get("cart/", {
      headers: {
        "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
      },
    })
    .then((res) => {
      dispatch({
        type: GET_CART,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const postCart = (data) => (dispatch) => {
  axios
    .post("cart/", data, {
      headers: {
        "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
      },
    })
    .then((res) => {
      dispatch({
        type: POST_CART,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const removeCart = (data) => (dispatch) => {
  axios
    .delete("cart/", data, {
      headers: {
        "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
      },
    })
    .then((res) => {
      dispatch({
        type: DEL_CART,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
