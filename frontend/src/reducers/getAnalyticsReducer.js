import { ANALYTICS } from "../actions/types";

const initialState = {
    getAnalytics: [],
};

const getAnalyticsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ANALYTICS:
      return {
        ...state,
        getAnalytics: action.payload,
      };
    default:
      return { ...state };
  }
};

export default getAnalyticsReducer;
