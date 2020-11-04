import React from "react";
import { useHistory, useParams } from "react-router-dom";
import "./home.page.styles.css";
import Logo from "../../assets/icons/darklogo.jpeg";

export const Home = () => {

  const history = useHistory();

  function handleClickNewGame() {
    history.push("/newgame");
  }

  function handleClickContinue() {
    history.push("/continue");
  }

  function handleClickRules() {
    history.push("/rules");
  }

  return (
    <div className="home">
      <img className="logo" src={Logo} alt="logo" />
      <button className="button" onClick={() => handleClickNewGame()}>
        NOVO
      </button>
      <button className="button" onClick={() => handleClickContinue()}>
        CONTINUAR
      </button>
      <button className="button" onClick={() => handleClickRules()} >
        REGRAS
      </button>
    </div>
  );
};
