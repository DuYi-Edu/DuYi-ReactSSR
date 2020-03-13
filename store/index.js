import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import isBrowser from "../util/isBrowser";

let store;

/**
 * 创建仓库的函数
 * 该函数保证，如果是服务器端，每一次调用产生一个新的仓库
 * 如果是客户端，每一次调用返回同一个仓库
 * @param {*} initialState 仓库的初始值
 */
export default function(initialState) {
  if (isBrowser()) {
    //客户端
    if (!store) {
      store = create(initialState);
    }
    return store; //返回已有仓库
  }
  return create(initialState);
}

function create(initialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
}
