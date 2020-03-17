var prerender = require("prerender");

var server = prerender({
  port: 5011
});

server.use(prerender.removeScriptTags());

server.start();
