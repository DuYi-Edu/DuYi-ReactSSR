import axios from "axios";

const config = {};
if (typeof window === "undefined") {
  //服务器
  config.baseURL = "http://yuanjin.tech:5100/";
} else {
  //浏览器
  config.baseURL = "http://yuanjin.tech:5100/";
}

const instance = axios.create(config);

export default instance;
