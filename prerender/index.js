const prerender = require("prerender");
const server = prerender({
  port: 6001 //更改prerender服务器端口
});
//使用prerender插件
server.use(prerender.removeScriptTags());
server.start();
