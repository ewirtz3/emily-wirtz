import React from "react";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import NoMatch from "./pages/NoMatch";
import Footer from "./components/Footer";
import "./style.css";

function App() {
  return (
    <Router>
      <div className="main">
        <Nav />
        <Switch>
          <Route
            exact
            path={[
              process.env.PUBLIC_URL + "/",
              process.env.PUBLIC_URL + "/home",
            ]}
            render={(props) => <Home {...props} />}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/about"}
            render={(props) => <About {...props} />}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/contact"}
            render={(props) => <Contact {...props} />}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/portfolio"}
            render={(props) => <Portfolio {...props} />}
          />
          <Route render={(props) => <NoMatch {...props} />} />
        </Switch>
      </div>
      <div className="push"></div>
      <Footer className="footer" />
    </Router>
  );
}

export default App;
