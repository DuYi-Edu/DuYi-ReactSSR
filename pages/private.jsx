import withStore from "../util/widthStore";
import { whoAmi } from "../store/actions/login";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { connect } from "react-redux";

const Page = ({ loginUser }) => {
  const router = useRouter();
  useEffect(() => {
    if (!loginUser) {
      router.push("/login");
    }
  }, []);
  if (loginUser) {
    return <h1>必须登录状态才能访问</h1>;
  } else {
    return null;
  }
};

function mapState(state){
  return {
    loginUser: state.loginUser
  }
}

export default connect(mapState)(Page);

const func = async function({ axios, store }) {
  await store.dispatch(whoAmi(axios));
};

export const getServerSideProps = withStore(func);
