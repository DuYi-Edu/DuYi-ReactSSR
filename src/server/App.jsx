import React from "react";
import { StaticRouter } from "react-router-dom";
import RouteApp from "@/routes/RouteApp";

export default ({ location, context }) => {
  return (
    <StaticRouter location={location} context={context}>
      <RouteApp />
    </StaticRouter>
  );
};
