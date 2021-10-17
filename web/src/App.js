import React from "react";
import "./index.scss";

import {
  BrowserRouter
} from "react-router-dom";

import Router from "./Router";

import {Provider as UserProvider} from "./contexts/user";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Router />
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
