import { matchRoutes } from "react-router-config";
import routeConfig from "../routes/routeConfig";

/**
 * 负责服务端渲染前的加载
 */
export default function(pathname, store) {
  const matches = matchRoutes(routeConfig, pathname);
  const proms = [];
  for (const match of matches) {
    if (match.route.component.loadData) {
      proms.push(Promise.resolve(match.route.component.loadData(store)));
    }
  }
  return Promise.all(proms);
}
