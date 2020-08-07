import {createStore, combineReducers} from "redux";
import reducer from "./reducer";

let   reducers = combineReducers({
      App: reducer,
});

let store = createStore(reducers);

export default store;