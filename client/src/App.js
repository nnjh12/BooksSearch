import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BookSearch from "./pages/BookSearch";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={BookSearch} />
          <Route exact path="/booksearch" component={BookSearch} />
          <Route exact path="/saved" component={Saved} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
