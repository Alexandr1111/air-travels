import { combineReducers, createStore } from "redux";
import filterReducer from "./reducers/filter-reducer";

const reducers = combineReducers({
  filter: filterReducer
});

const store = createStore(reducers);

export default store;
