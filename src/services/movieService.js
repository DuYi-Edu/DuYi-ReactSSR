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
