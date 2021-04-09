import { UPCOMING } from "../actions/types";

const initialState = {
  payload: [],
};

const upcomingReducer = (state = initialState, action) => {
  switch (action.type) {

    case UPCOMING:
      return { ...state, payload: action.payload};
    default:
      return { ...state };
  }
};

export default upcomingReducer;
