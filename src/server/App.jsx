import React from "react";
import { StaticRouter } from "react-router-dom";
import RouteApp from "@/routes/RouteApp";
import { Provider } from "react-redux";
import store from "../store";

export default ({ location, context }) => {
  return (
    <Provider store={store}>
      <StaticRouter location={location} context={context}>
        <RouteApp />
      </StaticRouter>
    </Provider>
  );
};
