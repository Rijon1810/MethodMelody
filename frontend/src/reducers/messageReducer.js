import {
  GET_ALL_MESSAGE,
  POST_MESSAGE,
  REPLY_MESSAGE,
  GET_GENERAL_MESSAGE,
  GET_STUDENT_MESSAGE,
  GET_MESSAGE_BY_ID,
  GET_CURRENT_MESSAGE_BY_ID,
  GET_PREVIOUS_MESSAGE_BY_ID,
  GET_DYNAMICALLY_BY_TAG,
} from "../actions/types";

const initialState = {
  all: {},
  byId: {},
  current: {},
  previous: {},
  general: {},
  student: {},
  postConfirm: {},
  replyConfirm: {},
  dynamicallyByTag: {},
};

const getAllMessagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MESSAGE:
      return {
        ...state,
        all: action.payload,
      };
    case POST_MESSAGE:
      return {
        ...state,
        postConfirm: action.payload,
      };
    case REPLY_MESSAGE:
      return {
        ...state,
        replyConfirm: action.payload,
      };
    case GET_GENERAL_MESSAGE:
      return {
        ...state,
        general: action.payload,
      };
    case GET_STUDENT_MESSAGE:
      return {
        ...state,
        student: action.payload,
      };
    case GET_MESSAGE_BY_ID:
      return {
        ...state,
        byId: action.payload,
      };
    case GET_CURRENT_MESSAGE_BY_ID:
      return {
        ...state,
        current: action.payload,
      };
    case GET_PREVIOUS_MESSAGE_BY_ID:
      return {
        ...state,
        previous: action.payload,
      };
    case GET_DYNAMICALLY_BY_TAG:
      return {
        ...state,
        dynamicallyByTag: action.payload,
      };
    default:
      return { ...state };
  }
};

export default getAllMessagesReducer;
