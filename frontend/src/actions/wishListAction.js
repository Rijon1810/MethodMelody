import axios from "../LMS/api/Config";
import {getUserCourse} from "./userAction";
import {
  GET_WISHLIST_BY_ID,
  POST_WISHLIST
} from "./types";



export const getWishlistCourseById = (id) => async (dispatch) => {
// console.log(id);
  await axios
    .get(`course/${id}/`, {
      headers: {
        "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
      },
    })
    .then((res) => {
      dispatch({
        type: GET_WISHLIST_BY_ID,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_WISHLIST_BY_ID,
        payload: "failed",
      });
     // console.log(err);
    });
};

export const postWishListCourse = (data) => (dispatch) => {
  axios
    .post("wishlist/", data, {
      headers: {
        "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
        "Content-type": "application/json",
      },
    })
    .then((res) => {
      // dispatch({
      //   type: POST_WISHLIST,
      //   payload: res.data,
      // });
      // alert(res.data.message);
    })
    .catch((err) => {
      //console.log(err);
    });
};

export const removeWishList = (data) => (dispatch) => {
  axios
    .post("wishlist/delete/", data, {
      headers: {
        "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
        "Content-type": "application/json",
      },
    })
    .then((res) => {
      alert(res.data.message);
      getUserCourse(data.user);
    })
    .catch((err) => {
     // console.log(err);
    });
};
