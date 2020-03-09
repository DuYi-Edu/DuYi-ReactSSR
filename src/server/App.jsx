import React from "react";
import { StaticRouter } from "react-router-dom";
import RouteApp from "@/routes/RouteApp";
import { Provider } from "react-redux";

export default ({ location, context, store }) => {
  return (
    <Provider store={store}>
      <StaticRouter location={location} context={context}>
        <RouteApp />
      </StaticRouter>
    </Provider>
  );
};
