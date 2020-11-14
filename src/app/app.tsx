import React from 'react';
import './app.css';
import { NewGame, Home, Continue, Rules, About, InitialPage } from '@pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ButtonURL } from '@components/button/buttonURL.component';

export const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={InitialPage} />
        <Route path="/inicio" component={Home} />
        <Route path="/novojogo" component={NewGame} />
        <Route path="/continue" component={Continue} />
        <Route path="/regras" component={Rules} />
        <Route path="/sobre" component={About} />
        <Route path="/regras/jogatina" component={ButtonURL} />
      </Switch>
    </Router>
  );
};
