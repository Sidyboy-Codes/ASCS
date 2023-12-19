import React from "react";
import { Route, Router } from "wouter";
import "./App.css";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home";
import Partners from "./pages/Partners/Partners";
import Press from "./pages/Press/press";

const App = () => {
  return (
    <Router>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/partners">
        <Partners />
      </Route>
      <Route path="/press">
        <Press />
      </Route>
    </Router>
  );
};

export default App;
