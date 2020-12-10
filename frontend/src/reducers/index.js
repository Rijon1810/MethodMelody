import { combineReducers } from "redux";

import loggedReducer from "./isLoggedReducer";
import getInstructorReducer from "./getInstructorReducer";
import getCourseReducer from "./getCourseReducer";

const allReducers = combineReducers({
  isLogged: loggedReducer,
  getInstructor: getInstructorReducer,
  getCourse: getCourseReducer,
});

export default allReducers;
