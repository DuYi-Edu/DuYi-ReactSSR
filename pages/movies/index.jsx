import Head from "next/head";
import { getMovies } from "../../services/movieService";

export default () => {
  getMovies().then(resp => {
    console.log(resp);
  });
  return (
    <div>
      <Head>
        <title>电影页</title>
      </Head>
      <h1>电影页</h1>
    </div>
  );
};
