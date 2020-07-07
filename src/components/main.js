import React from "react";

import { Switch, Route } from "react-router-dom";
import Portfolio from "./portfolio";
import Collection from "./collection";
import About from "./aboutme";
import Contact from "./contactme";
const Main = () => (
  <Switch>
    <Route exact path="/Morgan-Portfolio/portfolio" component={Portfolio} />
    <Route path="/Morgan-Portfolio/collection" component={Collection} />
    <Route path="/Morgan-Portfolio/aboutme" component={About} />
    <Route path="/Morgan-Portfolio/contactme" component={Contact} />
  </Switch>
);

export default Main;
