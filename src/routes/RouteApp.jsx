import React from "react";
import Header from "@/components/Header";
import routes from "./routeConfig";
import { renderRoutes } from "react-router-config";
export default function RouteApp() {
  return (
    <div>
      <Header></Header>
      <div
        style={{
          padding: 50
        }}
      >
        {renderRoutes(routes)}
      </div>
    </div>
  );
}
