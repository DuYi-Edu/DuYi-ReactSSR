import * as loginService from "../../services/loginService";

export const actionTypes = {
  setLoginUser: "login/setLoginUser",
  login: "login/login",
  whoAmI: "login/whoAmI",
  loginOut: "login/loginOut"
};

function setLoginUser(user) {
  return { type: actionTypes.setLoginUser, payload: user };
}

export function login(loginId, loginPwd) {
  return async function(dispatch) {
    const resp = await loginService.login(loginId, loginPwd);
    if (resp.data) {
      //登录成功
      dispatch(setLoginUser(resp.data));
      return true;
    } else {
      dispatch(setLoginUser(null));
      return false;
    }
  };
}

export function whoAmi(axios) {
  return async function(dispatch) {
    const resp = await loginService.whoAmI(axios);
    if (resp.data) {
      //有权限
      dispatch(setLoginUser(resp.data));
      return true;
    } else {
      dispatch(setLoginUser(null));
      return false;
    }
  };
}

export function loginOut() {
  return function(dispatch) {
    dispatch(setLoginUser(null));
    loginService.loginOut();
  };
}
