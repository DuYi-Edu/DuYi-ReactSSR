import { login, whoAmI, loginOut } from "../services/loginService";
import { getServerInstance } from "../services/request";
export default () => {
  // login("11111111111", "123123").then(resp => {
  //   console.log(resp);
  // });
  // whoAmI().then(resp => {
  //   console.log(resp);
  // });
  // loginOut();
  return <h1>登录页</h1>;
};

export async function getServerSideProps({ req }) {
  const request = getServerInstance(req);
  whoAmI(request).then(resp => {
    console.log(resp);
  });
  return {
    props: {}
  };
}
