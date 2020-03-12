import request from "./request";

export async function getMovies(page = 1, limit = 10) {
  let resp = await request.get("/api/movie", {
    params: {
      page,
      limit
    }
  });
  return resp.data;
}

export async function getMovie(id) {
  let resp = await request.get("/api/movie/" + id);
  return resp.data;
}
