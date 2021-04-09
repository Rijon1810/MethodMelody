import { combineReducers } from "redux";

import loggedReducer from "./isLoggedReducer";
import upcomingReducer from "./upcomingReducer";
import {
  getInstructorReducer,
  postInstructorReducer,
} from "./instructorReducer";
import { getCourseReducer, postCourseReducer , postCourseFilter } from "./courseReducer";
import getAnalyticsReducer from "./getAnalyticsReducer";
import getSelectedIdReducer from "./getSelectedIdReducer";
import cartStatusReducer from "./cartReducer";
import { getCuponReducer } from './cuponReducer';
import { getOrderReducer } from './orderReducer';
import getAllUsersReducer from "./userReducer";
import getAllMessagesReducer from "./messageReducer";

const allReducers = combineReducers({
  isLogged: loggedReducer,
  upcoming: upcomingReducer,
  getInstructor: getInstructorReducer,
  postInstructor: postInstructorReducer,
  getCourse: getCourseReducer,
  postCourse: postCourseReducer,
  courseFilter : postCourseFilter,
  getAnalytics: getAnalyticsReducer,
  getSelectedId: getSelectedIdReducer,
  cartInfo: cartStatusReducer,
  getAllUsers: getAllUsersReducer,
  getCupon: getCuponReducer,
  getOrder : getOrderReducer,
  Messages: getAllMessagesReducer
});

export default allReducers;
