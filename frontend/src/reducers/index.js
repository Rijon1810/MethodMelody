import { combineReducers } from "redux";

import loggedReducer from "./isLoggedReducer";
import {
  getInstructorReducer,
  postInstructorReducer,
} from "./instructorReducer";
import { getCourseReducer, postCourseReducer } from "./courseReducer";
import getAnalyticsReducer from "./getAnalyticsReducer";
import getSelectedIdReducer from "./getSelectedIdReducer";
import cartStatusReducer from "./cartReducer";
import getAllUsersReducer from "./userReducer";
import getAllMessagesReducer from "./messageReducer";

const allReducers = combineReducers({
  isLogged: loggedReducer,
  getInstructor: getInstructorReducer,
  postInstructor: postInstructorReducer,
  getCourse: getCourseReducer,
  postCourse: postCourseReducer,
  getAnalytics: getAnalyticsReducer,
  getSelectedId: getSelectedIdReducer,
  cartInfo: cartStatusReducer,
  getAllUsers: getAllUsersReducer,
  getAllGeneralMessages: getAllMessagesReducer
});

export default allReducers;
