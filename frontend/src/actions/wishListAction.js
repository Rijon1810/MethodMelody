import axios from "../LMS/api/Config";
import {
    GET_WISHLIST_BY_ID
} from "./types";



export const getWishlistCourseById = (id) => async (dispatch) => {
  console.log(id);
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
      console.log(err);
    });
};
