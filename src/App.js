import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
// Switch makes sure that only one component is rendered and nothing else

import Homepage from "./pages/homepage/homepage.component";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
