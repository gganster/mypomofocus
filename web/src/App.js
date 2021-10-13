import React from "react";
import "./index.scss";

import Router from "./Router";

import {Provider as UserProvider} from "./contexts/user";

function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}

export default App;
