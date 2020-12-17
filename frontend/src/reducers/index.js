import { combineReducers } from "redux";

import loggedReducer from "./isLoggedReducer";
import getInstructorReducer from "./getInstructorReducer";
import getCourseReducer from "./getCourseReducer";
import getAnalyticsReducer from "./getAnalyticsReducer";

const allReducers = combineReducers({
  isLogged: loggedReducer,
  getInstructor: getInstructorReducer,
  getCourse: getCourseReducer,
  getAnalytics: getAnalyticsReducer,
});

export default allReducers;
