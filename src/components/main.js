import React from "react";

import { Switch, Route } from "react-router-dom";
import LandingPage from "./portfolio";
import Collection from "./collection";
import About from "./aboutme";
import Contact from "./contactme";
const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/collection" component={Collection} />
      <Route path="/aboutme" component={About} />
      <Route path="/contactme" component={Contact} />
    </Switch>
  );
};

export default Main;
