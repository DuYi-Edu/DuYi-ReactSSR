import counter from "./counter";
import movies from "./movies";
import { combineReducers } from "redux";

export default combineReducers({
  counter,
  movies
});
