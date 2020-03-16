import { actionTypes } from "../actions/login";

export default function(state = null, { type, payload }) {
  switch (type) {
    case actionTypes.setLoginUser:
      return payload;
    default:
      return state;
  }
}
