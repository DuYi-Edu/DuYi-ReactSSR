import Head from "next/head";
import { getMovies } from "../../services/movieService";

export default ({ movies }) => {
  return (
    <div>
      <Head>
        <title>电影页</title>
      </Head>
      <h1>电影页</h1>
      <ul>
        {movies.map(m => (
          <li key={m._id}>
            <a href={`/movies/${m._id}`}>
              <span>{m.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

//该函数只可能在服务端运行
//该函数运行在组件渲染之前
//该函数只能在build期间运行
//返回的对象中的props属性，将被混合到整个组件属性
export async function getStaticProps() {
  const resp = await getMovies(1, 20);
  return {
    props: {
      movies: resp.data
    }
  };
}
