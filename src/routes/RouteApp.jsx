import React from "react";
import routes from "./routeConfig";
import { renderRoutes } from "react-router-config";
export default function RouteApp() {
  return <div>{renderRoutes(routes)}</div>;
}
