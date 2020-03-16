import axios from "axios";
import cookie from "cookie";

let instance;
if (typeof window === "undefined") {
  //服务器
  instance = getServerInstance();
}
else{
  instance = axios.create();
}

export default instance;

export function getServerInstance(req) {
  const config = {
    baseURL: "http://yuanjin.tech:5100/"
  };
  if (req) {
    const cookies = req.headers["cookie"];
    const cookieObj = cookie.parse(cookies);
    if (cookieObj.token) {
      config.headers = {
        authorization: cookieObj.token
      };
    }
  }
  return axios.create(config);
}
