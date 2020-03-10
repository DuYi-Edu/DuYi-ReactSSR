import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./index.module.css"

export default () => {
  const router = useRouter();
  return (
    <div className={styles.header}>
      <div>
        <Link href="/">
          <a>
            <img src="/logo.png" alt=""/>
          </a>
        </Link>
      </div>
      <ul>
        <li>
          <Link href="/">
            <a>首页</a>
          </Link>
        </li>
        <li>
          <Link href="/page1">
            <a>page1</a>
          </Link>
        </li>
        <li>
          <Link href="/movies">
            <a>电影</a>
          </Link>
        </li>
        <li>
          <Link href="/movies/[id]" as="/movies/3">
            <a>电影详情页</a>
          </Link>
        </li>
        <li>
          <button
            onClick={() => {
              router.push("/movies/[...params]", "/movies/a/b/c");
            }}
          >
            跳转到 [...params].jsx
          </button>
        </li>
      </ul>
    </div>
  );
};
