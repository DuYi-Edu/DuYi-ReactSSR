import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "@/pages/Home";
import Movies from "@/pages/Movies";
import NotFound from "@/pages/NotFound";
import Header from "@/components/Header";
export default function RouteApp() {
  return (
    <div>
      <Header></Header>
      <div
        style={{
          padding: 50
        }}
      >
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movies" exact component={Movies} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
}
