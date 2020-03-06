export const actionTypes = {
  setDatas: "movies/setDatas"
};

export function setDatas(datas) {
  return { type: actionTypes.setDatas, payload: datas };
}
