import React from "react";
import Home from "./Home";
import About from "./About";
import Navbar from "../Cocktails/Navbar";
import Error from "../Cocktails/Error";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const Index = () => {
  return (
    <main>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </main>
  );
};

export default Index;
