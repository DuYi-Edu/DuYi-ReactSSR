import Head from "next/head";
import { getMovies } from "../../services/movieService";
import Pager from "../../components/Pager";
import { useRouter } from "next/router";

export default ({ movies, page, total, limit }) => {
  console.log("render");
  const router = useRouter();
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
      <Pager
        page={page}
        total={total}
        limit={limit}
        onPageChange={newPage => {
          router.push(`/movies`, `/movies?page=${newPage}`, {shallow:true});
        }}
      />
    </div>
  );
};

// 每次请求到达后都会运行
// 仅在服务器端运行
// req, res, query
export async function getServerSideProps({ query }) {
  const page = +query.page || 1;
  console.log("getServerSideProps");
  const resp = await getMovies(page, 10);
  return {
    props: {
      movies: resp.data,
      page,
      total: resp.count,
      limit: 10
    }
  };
}
