import React from "react";

import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Hooks from "./hooks";
import Pages from "./pages"
import Layouts from "./layouts";

const Router = () => {
  const [user, loading] = Hooks.useAuth();
  
  if (loading) return <Pages.Loading />

  return (
    <Switch>
      {user ?
        <Layouts.Blank>
          <Route exact path="/">     <Pages.Home /></Route>
          <Route       path="*"><Redirect to="/" /></Route>
        </Layouts.Blank>
        :
        <Layouts.Blank>
          <Route exact path="/login"><Pages.Login /></Route>
          <Route       path="*"><Redirect to="/login" /></Route>
        </Layouts.Blank>
      }
    </Switch>
  )
}

export default Router;