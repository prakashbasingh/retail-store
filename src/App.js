import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./components/layout/NavBar.js";
import Home from "./components/pages/Home.js";
import User from "./components/pages/User.js";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Hello Hello</h1>
        <NavBar />
        <div className="container">
          <Route path="/" exact={true} component={Home} />
          <Route path="/users" exact={true} component={User} />
        </div>
      </div>
    </Router>
  );
}

export default App;
