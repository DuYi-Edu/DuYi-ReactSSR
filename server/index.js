const express = require("express");
const history = require("connect-history-api-fallback");

const app = express();
app.use(history());
app.use(express.static("public"));

app.listen(5010);
