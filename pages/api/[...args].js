import { createProxyMiddleware } from "http-proxy-middleware";

const cookieName = "token";
const maxAge = 24 * 60 * 60;

export default createProxyMiddleware({
  target: "http://yuanjin.tech:5100",
  changeOrigin: true,
  onProxyRes(proxyRes) {
    const token = proxyRes.headers["authorization"];
    if (token) {
      //说明数据服务器给我响应了token
      //将header中的token放到cookie中
      delete proxyRes.headers["authorization"]; //删除响应头中的header
      proxyRes.headers[
        "set-cookie"
      ] = `${cookieName}=${token}; Max-Age=${maxAge}; path=/`;
    }
  },
  onProxyReq(proxyReq, req, res) {
    const token = req.cookies[cookieName];
    if (token) {
      proxyReq.setHeader("authorization", token);
    }
  }
});

export const config = {
  api: {
    bodyParser: false
  }
};
