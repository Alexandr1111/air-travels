import { combineReducers, createStore } from "redux";
import mainReducer from "./reducers/main-reducer";
import filterReducer from "./reducers/filter-reducer";

const reducers = combineReducers({
  main: mainReducer,
  filter: filterReducer
});

const store = createStore(reducers);

export default store;
