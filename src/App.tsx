import React from 'react';
import './App.css';
import { NewGame, Home, Continue, Rules, About, InitialPage } from './page';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ButtonURL } from './components/buttonURL.component';

export const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={InitialPage} />
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
