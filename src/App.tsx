import React, { useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { history } from "helpers/utils";
import Home from "pages/home";

const App: React.FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/home" component={Home} />
        <Redirect from="/" to="/home" />
      </Switch>
    </Router>
  );
};

export default App;
