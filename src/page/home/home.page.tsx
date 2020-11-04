import React from "react";
import { useHistory, useParams } from "react-router-dom";
import "./home.page.styles.css";
import Logo from "../../assets/icons/darklogo.jpeg";

export const Home = () => {

  const history = useHistory();

  function handleClick(name: string) {
    history.push(name);
  }


  return (
    <div className="home">
      <img className="logo" src={Logo} alt="logo" />
      <button className="button" onClick={() => handleClick("newgame")}>
        NOVO
      </button>
      <button className="button" onClick={() => handleClick("continue")}>
        CONTINUAR
      </button>
      <button className="button" onClick={() => handleClick("rules")} >
        REGRAS
      </button>
    </div>
  );
};
