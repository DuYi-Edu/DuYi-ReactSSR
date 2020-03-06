import { actionTypes } from "../actions/movies";

export default function(state = [], { type, payload }) {
  switch (type) {
    case actionTypes.setDatas:
      return payload;
    default:
      return state;
  }
}
