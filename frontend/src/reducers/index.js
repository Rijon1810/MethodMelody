import { combineReducers } from "redux";

import loggedReducer from "./isLoggedReducer";
import getInstructorReducer from "./getInstructorReducer";
import getCourseReducer from "./getCourseReducer";
import getAnalyticsReducer from "./getAnalyticsReducer";
import getSelectedIdReducer from "./getSelectedIdReducer";


const allReducers = combineReducers({
  isLogged: loggedReducer,
  getInstructor: getInstructorReducer,
  getCourse: getCourseReducer,
  getAnalytics: getAnalyticsReducer,
  getSelectedId: getSelectedIdReducer
});

export default allReducers;
