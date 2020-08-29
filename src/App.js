import React from "react";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import NoMatch from "./pages/NoMatch";
import Footer from "./components/Footer";

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
          >
            <Home />
          </Route>
          <Route exact path={process.env.PUBLIC_URL + "/about"}>
            <About />
          </Route>
          <Route exact path={process.env.PUBLIC_URL + "/contact"}>
            <Contact />
          </Route>
          <Route exact path={process.env.PUBLIC_URL + "/portfolio"}>
            <Portfolio />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
      <div className="push"></div>
      <Footer className="footer" />
    </Router>
  );
}

export default App;
