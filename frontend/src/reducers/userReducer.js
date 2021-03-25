import {
  GET_ALL_USER,



  GET_TYPED_USER_1,
  GET_TYPED_USER_2,
  GET_TYPED_USER_3,
  GET_TYPED_USER_4,
  GET_TYPED_USER_STUDENT,
  GET_TYPED_USER_SUBSCRIBER, GET_USER_COURSE,

  USER_SUSPEND, USER_UPDATE
} from "../actions/types";

const initialState = {
  allUsers: {},
  getUserCourse: {},
  payload: {},
  suspendStatus: "",
  getByType_1: {},
  getByType_2: {},
  getByType_3: {},
  getByType_4: {},
  student: {},
  subscriber: {},
};

const getAllUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USER:
      return {
        ...state,
        allUsers: action.payload,
      };
    case GET_USER_COURSE:
      return {
        ...state,
        getUserCourse: action.payload,
      };
    case USER_UPDATE:
      return {
        ...state,
        payload: action.payload,
      };
    case USER_SUSPEND:
      return {
        ...state,
        suspendStatus: action.payload,
      };
    case GET_TYPED_USER_1:
      return {
        ...state,
        getByType_1: action.payload,
      };
    case GET_TYPED_USER_2:
      return {
        ...state,
        getByType_2: action.payload,
      };
    case GET_TYPED_USER_3:
      return {
        ...state,
        getByType_3: action.payload,
      };
    case GET_TYPED_USER_4:
      return {
        ...state,
        getByType_4: action.payload,
      };
    case GET_TYPED_USER_STUDENT:
      return {
        ...state,
        student: action.payload,
      };
    case GET_TYPED_USER_SUBSCRIBER:
      return {
        ...state,
        subscriber: action.payload,
      };
    default:
      return { ...state };
  }
};

export default getAllUsersReducer;
