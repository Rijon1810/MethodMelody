import auth from "../LMS/routes/auth";
import { IS_LOGGED } from "./types";

export const logOut = () => (dispatch) => {
  dispatch({
    type: IS_LOGGED,
    payload: [],
    login: false,
  });

  auth.logout();
};
