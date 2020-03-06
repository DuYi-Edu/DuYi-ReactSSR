import { createStore } from "redux";
import reducer from "./reducers";

let store;

if (global.document) {
  store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
} else {
  store = createStore(reducer);
}

export default store;
