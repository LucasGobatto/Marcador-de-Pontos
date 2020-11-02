import * as React from "react";

import "./home.page.styles.css";
import Logo from "../../assets/icons/darklogo.jpeg";

export const HomePage: React.FC = () => {
  const [isContinue, setContinue] = React.useState(false);

  const handleClick = () => {
    setContinue(true);
  };

  return (
    <div className="home">
      <img className="logo" src={Logo} alt="logo" />
      <button className="button" onClick={handleClick}>
        NOVO
      </button>
      {isContinue && (
        <button
          className="button"
          onClick={() => {
            alert("Continuar");
          }}
        >
          CONTINUAR
        </button>
      )}
      <button
        className="button"
        onClick={() => {
          alert("Regras");
        }}
      >
        REGRAS
      </button>
    </div>
  );
};
