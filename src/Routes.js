import React from "react";
import {Router,Route,browserHistory} from "react-router";
import Home from "./home";

const PortfolioRoutes = () => (
  <Router history={browserHistory}>
    <Route component={Home} path="/" />
  </Router>
);

export default PortfolioRoutes;
