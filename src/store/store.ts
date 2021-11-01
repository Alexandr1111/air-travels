import { combineReducers, createStore } from "redux";
import filterReducer from "./reducers/filter-reducer";

const rootReducer = combineReducers({
  filter: filterReducer
});

const store = createStore(rootReducer);

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

export default store;
