import { GET_INSTRUCTOR } from "../actions/types";

const initialState = {
  instructorList: [],
  length: 0,
};

const getInstructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INSTRUCTOR:
      return { ...state, instructorList: action.payload, length: action.length };
    default:
      return { ...state };
  }
};

export default getInstructorReducer;
