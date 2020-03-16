import request from "./request";

export async function getMovies(page = 1, limit = 10, axios = request) {
  let resp = await axios.get("/api/movie", {
    params: {
      page,
      limit
    }
  });
  return resp.data;
}

export async function getMovie(id, axios = request) {
  let resp = await axios.get("/api/movie/" + id);
  return resp.data;
}
