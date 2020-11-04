import React from "react";
import "./App.css";
import { NewGame } from "./page/newgame";
import { Home } from "./page/home";
import { Continue } from "./page/continue";
import { Rules } from "./page/rules";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


export const App: React.FC = () => {

  // const [isHome, setIsHome] = React.useState(true);
  // const [renderedComponent, setRenderedComponent] = React.useState(
  //   <HomePage />
  // );

  // React.useEffect(() => {
  //   if (isHome) {
  //     setRenderedComponent(<HomePage />);
  //   } else {
  //     setRenderedComponent(<NewGame />);
  //   }
  // }, [isHome, setRenderedComponent]);

  // const handleClick = () => {
  //   isHome ? setIsHome(false) : setIsHome(true);
  // };

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
