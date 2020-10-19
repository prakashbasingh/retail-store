import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
// to use Okta auth
import { Security, SecureRoute, LoginCallback } from "@okta/okta-react";

import NavBar from "./components/layout/NavBar.js";
import Home from "./components/pages/HomePage.js";
import User from "./components/pages/UserPage.js";
import Login from "./components/auth/Login.js";

function onAuthRequired({ history }) {
  history.push("/login");
}

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.onAuthRequired = this.onAuthRequired.bind(this);
  // }

  // onAuthRequired() {
  //   this.props.history.push("/login");
  // }

  render() {
    return (
      <Router>
        {/*             for Okta auth */}
        <Security
          issuer="https://dev-7992170.okta.com/oauth2/default"
          clientId="0oa9uarb59m50KdRA5d5"
          redirectUri={window.location.origin + "/implicit/callback"}
          onAuthRequired={onAuthRequired}
        >
          {/* ^ for Okta auth */}
          <div className="App">
            <h1>Hello Hello</h1>
            <NavBar />
            <div className="container">
              <Route path="/" exact={true} component={Home} />
              <SecureRoute path="/user" exact={true} component={User} />
              {/* below for okta auth */}
              <Route
                path="/login"
                render={() => <Login baseUrl="https://dev-7992170.okta.com" />}
              />
              <Route path="/implicit/callback" component={LoginCallback} />
              {/* ^ for okta auth*/}
            </div>
          </div>
        </Security>
      </Router>
    );
  }
}

export default App;
