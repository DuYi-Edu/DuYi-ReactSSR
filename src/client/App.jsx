import React from "react";
import { BrowserRouter } from "react-router-dom";
import "../assets/global.css";
import RouteApp from "@/routes/RouteApp";
import { Provider } from "react-redux";
import store from "../store";

export default () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RouteApp />
      </BrowserRouter>
    </Provider>
  );
};
