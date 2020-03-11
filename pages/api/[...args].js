import { createProxyMiddleware } from "http-proxy-middleware";

export default createProxyMiddleware({
  target: "http://yuanjin.tech:5005",
  changeOrigin: true
});
