import getScripts from "./getScripts";
import getLinks from "./getLinks";
import store from "../store";

export default (componentHTML, path) => {
  const html = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>SSR</title>
    ${getLinks()}
  </head>
  <body>
    <div id="root">${componentHTML}</div>
    <script>
      window.pageDatas = ${JSON.stringify(store.getState())}
      window.requestPath = "${path}";
    </script>
    ${getScripts()}
  </body>
  </html>
  `;
  return html;
};
