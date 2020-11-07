<<<<<<< HEAD
import React from "react";
import "./App.css";
import { NewGame } from "./page/newgame";
import { Home } from "./page/home";
import { Continue } from "./page/continue";
import { Rules } from "./page/rules";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

=======
import * as React from 'react';

import './App.css';
import { NovoJogo } from './page/newgame';
import { HomePage } from './page/home';

export const App: React.FC = () => {
  const [isHome, setIsHome] = React.useState(true);
  const [renderedComponent, setRenderedComponent] = React.useState(<HomePage />);
>>>>>>> eslint and prettier configs

export const App: React.FC = () => {

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/inicio" component={Home} />
          <Route path="/novojogo" component={NewGame} />
          <Route path="/continue" component={Continue} />
          <Route path="/regras" component={Rules} />
        </Switch>
      </div>
    </Router>
  );
};
