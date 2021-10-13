import React from "react";

import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Hooks from "./hooks";
import Pages from "./pages"

const Router = () => {
  const [user, loading] = Hooks.useAuth();

  console.log(user, loading);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"><Pages.Home /></Route>
        <Route       path="*"><Redirect to="/" /></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router;