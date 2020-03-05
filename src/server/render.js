import React from "react";
import App from "./App";
import ReactDom from "react-dom/server";
import getHTML from "./getHTML";
export default (req, res) => {
  const context = {};
  const componentHTML = ReactDom.renderToString(
    <App location={req.path} context={context} />
  );
  const html = getHTML(componentHTML);
  res.send(html);
};
