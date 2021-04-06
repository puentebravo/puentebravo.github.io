import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "./pages/home/index";
import Portfolio from "./pages/portfolio/portfolio";
import Contact from "./pages/contact/contact";

import "./App.css";

function App() {
  return (
    <Router basename={`${process.env.PUBLIC_URL}/`}>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/home" component={Index} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
    </Router>
  );
}

export default App;
