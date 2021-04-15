import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { loadState, saveState } from "./localStorage";
import allReducers from "./reducers";

const initialState = loadState();
// const initialState = {};


const middleware = [thunk];

export const store = createStore(
  allReducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.subscribe(() => {
  saveState(store.getState());
});
