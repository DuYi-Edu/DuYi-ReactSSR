import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./index.module.css";
import { connect } from "react-redux";
import { loginOut } from "../../store/actions/login";

const Header = ({ loginUser, loginOut }) => {
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
        {loginUser ? (
          <li>
            <span>{loginUser.name}</span>
            <button
              onClick={() => {
                loginOut && loginOut();
                router.push("/login");
              }}
            >
              注销
            </button>
          </li>
        ) : (
          <li>
            <Link href="/login">
              <a>登录</a>
            </Link>
          </li>
        )}
        <li>
          <Link href="/private">
            <a>受保护的页面</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

function mapState(state) {
  return {
    loginUser: state.loginUser
  };
}

function mapDispatch(dispatch) {
  return {
    loginOut() {
      dispatch(loginOut());
    }
  };
}

export default connect(mapState, mapDispatch)(Header);
