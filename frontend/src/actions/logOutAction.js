import auth from "../LMS/routes/auth";
import { IS_LOGGED, GET_USER_COURSE } from "./types";

export const logOut = () => (dispatch) => {
  dispatch({
    type: IS_LOGGED,
    payload: [],
    login: false,
  });

  dispatch({
    type: GET_USER_COURSE,
    payload: [],
  });

  auth.logout();
};
