const express = require("express");
const history = require("connect-history-api-fallback");

const app = express();
app.use(
  history({
    htmlAcceptHeaders: ["text/html"]
  })
);
app.use(express.static("public"));

app.get("/api/test", (req, res) => {
  res.send("data from server");
});

app.listen(5000);
