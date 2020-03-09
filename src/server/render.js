import React from "react";
import App from "./App";
import ReactDom from "react-dom/server";
import getHTML from "./getHTML";
import loadData from "./loadData";
import makeStore from "../store";

export default async (req, res) => {
  const store = makeStore();
  const context = {};
  //加载数据到仓库
  //调用对应组件（根据路由匹配到的组件）的loadData
  await loadData(req.path, store);

  //渲染组件
  const componentHTML = ReactDom.renderToString(
    <App location={req.path} context={context} store={store} />
  );
  const html = getHTML(componentHTML, req.path, store);
  res.send(html);
};
