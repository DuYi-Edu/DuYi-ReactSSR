import request from "./request";
import isBrowser from "../util/isBrowser";
import cookie from "cookie";

export async function login(loginId, loginPwd, axios = request) {
  const resp = await axios.post("/api/user/login", {
    loginId,
    loginPwd
  });
  return resp.data;
}

export async function whoAmI(axios = request) {
  const resp = await axios.get("/api/user/whoami");
  return resp.data;
}

export function loginOut() {
  if (isBrowser()) {
    const result = cookie.serialize("token", "", {
      maxAge: 0
    });
    document.cookie = result;
  }
}
