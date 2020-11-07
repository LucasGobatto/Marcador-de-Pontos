<<<<<<< HEAD
import React from "react";
import "./home.page.styles.css";
import Logo from "../../assets/icons/darklogo.jpeg";
import { ButtonPage } from "../../components/buttonPage.component";
=======
import * as React from 'react';

import './home.page.styles.css';
import Logo from '../../assets/icons/darklogo.jpeg';
>>>>>>> eslint and prettier configs

export const Home = () => {

  return (
    <div className="home">
      <img className="logo" src={Logo} alt="logo" />
<<<<<<< HEAD
      <ButtonPage title="Novo Jogo"/>
      <ButtonPage title="Continue"/>
      <ButtonPage title="Regras"/>
=======
      <button className="button" onClick={handleClick}>
        NOVO
      </button>
      {isContinue && (
        <button
          className="button"
          onClick={() => {
            alert('Continuar');
          }}
        >
          CONTINUAR
        </button>
      )}
      <button
        className="button"
        onClick={() => {
          alert('Regras');
        }}
      >
        REGRAS
      </button>
>>>>>>> eslint and prettier configs
    </div>
  );
};
