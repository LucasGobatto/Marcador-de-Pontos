import * as React from "react";

import "./App.css";
import { NovoJogo } from "./page/newgame";
import { HomePage } from "./page/home";

export const App: React.FC = () => {
  const [isHome, setIsHome] = React.useState(true);
  const [renderedComponent, setRenderedComponent] = React.useState(
    <HomePage />
  );

  React.useEffect(() => {
    if (isHome) {
      setRenderedComponent(<HomePage />);
    } else {
      setRenderedComponent(<NovoJogo />);
    }
  }, [isHome, setRenderedComponent]);

  const handleClick = () => {
    isHome ? setIsHome(false) : setIsHome(true);
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Vapa
      </button>
      {renderedComponent} {/* <HomePage />*/}
    </div>
  );
};
