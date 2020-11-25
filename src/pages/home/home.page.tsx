import React from 'react';
import './home.page.styles.css';
import Logo from '@assets/icons/darklogo.jpeg';
import { ButtonPage } from '@components';

export const Home = () => {
  return (
    <div className="home">
      <img className="logo" src={Logo} alt="logo" />
      <ButtonPage title="Novo Jogo" icon="newgame" />
      <ButtonPage title="Continue" icon="continue" />
      <ButtonPage title="Regras" icon="rules" />
      <ButtonPage title="Sobre" icon="home" />
    </div>
  );
};
