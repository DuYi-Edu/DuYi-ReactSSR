const express = require("express");

const app = express();

app.get("*", (req, res) => {
  const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>SSR</title>
  </head>
  <body>
    <div id="root">
      Hello 1111
    </div>
  </body>
  </html>
  `;
  res.send(html);
});

app.listen(8080, () => {
  console.log("server start on 8080");
});
