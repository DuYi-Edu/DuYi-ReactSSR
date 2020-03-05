import React from "react";
import { BrowserRouter } from "react-router-dom";
import "../assets/global.css";
import RouteApp from "@/routes/RouteApp";

export default () => {
  return (
    <BrowserRouter>
      <RouteApp />
    </BrowserRouter>
  );
};
