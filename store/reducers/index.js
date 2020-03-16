import counter from "./counter";
import loginUser from "./login";
import { combineReducers } from "redux";

export default combineReducers({
  counter,
  loginUser
});
