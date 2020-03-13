import { login, whoAmI } from "../services/loginService";

export default () => {
  // login("11111111111", "123123").then(resp => {
  //   console.log(resp);
  // });
  whoAmI().then(resp => {
    console.log(resp);
  });
  return <h1>登录页</h1>;
};
