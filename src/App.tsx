import React from "react";
import "./App.css";
import { NewGame } from "./page/newgame";
import { Home } from "./page/home";
import { Continue } from "./page/continue";
import { Rules } from "./page/rules";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


export const App: React.FC = () => {

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/newgame" component={NewGame} />
          <Route path="/continue" component={Continue} />
          <Route path="/rules" component={Rules} />
        </Switch>
      </div>
    </Router>
  );
};
