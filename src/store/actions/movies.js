import { getMovies } from "../../services/movieService";

export const actionTypes = {
  setDatas: "movies/setDatas",
  fetchMovies: "movies/fetchMovies"
};

export function setDatas(datas) {
  return { type: actionTypes.setDatas, payload: datas };
}

export function fetchMovies(page = 1, limit = 10) {
  return async function(dispatch) {
    const resp = await getMovies(page, limit);
    dispatch(setDatas(resp.data));
  };
}
