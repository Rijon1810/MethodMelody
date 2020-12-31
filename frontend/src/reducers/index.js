import { combineReducers } from "redux";

import loggedReducer from "./isLoggedReducer";
import getInstructorReducer from "./getInstructorReducer";
import { getCourseReducer, postCourseReducer } from "./courseReducer";
import getAnalyticsReducer from "./getAnalyticsReducer";
import getSelectedIdReducer from "./getSelectedIdReducer";

const allReducers = combineReducers({
  isLogged: loggedReducer,
  getInstructor: getInstructorReducer,
  getCourse: getCourseReducer,
  postCourse: postCourseReducer,
  getAnalytics: getAnalyticsReducer,
  getSelectedId: getSelectedIdReducer,
});

export default allReducers;
