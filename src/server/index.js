import express from "express";
import render from "./render";
const app = express();

app.use(express.static("./public"));

app.get("*", render);

app.listen(8080, () => {
  console.log("server start on 8080");
});
