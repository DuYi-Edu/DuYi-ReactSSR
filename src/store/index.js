import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducers";
import thunk from "redux-thunk";

let store;

if (global.document) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
} else {
  store = createStore(reducer, applyMiddleware(thunk));
}
export default store;
