import React from 'react';
import './app.css';
import { TeamNamesProvider } from '@app/data/hooks';
import { NewGame, Home, Continue, Rules, About, InitialPage, Score } from '@pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ButtonURL } from '@components/button/buttonURL.component';

export const App: React.FC = () => {
  return (
    <TeamNamesProvider>
      <Router>
        <Switch>
          <Route exact path="/placar" component={InitialPage} />
          <Route path="/inicio" component={Home} />
          <Route path="/novojogo" component={NewGame} />
          <Route path="/" component={Score} />
          <Route path="/continue" component={Continue} />
          <Route path="/regras" component={Rules} />
          <Route path="/sobre" component={About} />
          <Route path="/regras/jogatina" component={ButtonURL} />
        </Switch>
      </Router>
    </TeamNamesProvider>
  );
};
