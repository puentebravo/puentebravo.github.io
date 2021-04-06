import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/index";
import Portfolio from "./pages/portfolio/portfolio";
import Contact from "./pages/contact/contact";

import "./App.css";

function App() {
  return (
    <Router basename={`${process.env.PUBLIC_URL}/`}>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
