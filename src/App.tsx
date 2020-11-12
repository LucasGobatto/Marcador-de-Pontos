import React from "react";
import "./App.css";
import { NewGame } from "./page/newgame";
import { Home } from "./page/home";
import { Continue } from "./page/continue";
import { Rules } from "./page/rules";
import { About } from "./page/about"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ButtonURL } from "./components/buttonURL.component";


export const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/inicio" component={Home} />
          <Route path="/novojogo" component={NewGame} />
          <Route path="/continue" component={Continue} />
          <Route path="/regras" component={Rules} />
          <Route path="/sobre" component={About} />
          <Route path="/regras/jogatina" component={ButtonURL} />
        </Switch>
      </div>
    </Router>
  );
};
