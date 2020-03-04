import React from "react";
import App from "./App";
import ReactDom from "react-dom/server";
import getScripts from "./getScripts";

export default (req, res) => {
  const componentHTML = ReactDom.renderToString(<App />);
  const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>SSR</title>
  </head>
  <body>
    <div id="root">${componentHTML}</div>
    ${getScripts()}
  </body>
  </html>
  `;
  res.send(html);
};
