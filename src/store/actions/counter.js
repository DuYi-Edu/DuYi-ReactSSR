export const actionTypes = {
  increase: "counter/increase",
  decrease: "counter/decrease"
};

export function increase() {
  return { type: actionTypes.increase };
}

export function decrease() {
  return { type: actionTypes.decrease };
}
