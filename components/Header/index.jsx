import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./index.module.css";

export default () => {
  const router = useRouter();
  return (
    <div className={styles.header}>
      <div>
        <Link href="/">
          <a>
            <img src="/logo.png" alt="" />
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
          <Link href="/movies">
            <a>电影</a>
          </Link>
        </li>
        <li>
          <Link href="/redux">
            <a>redux测试</a>
          </Link>
        </li>
        <li>
          <Link href="/login">
            <a>登录</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
