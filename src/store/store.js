import { combineReducers, createStore } from "redux";
import mainReducer from "./reducers/main-reducer";

const reducers = combineReducers({
  main: mainReducer
});

const store = createStore(reducers);

export default store;
