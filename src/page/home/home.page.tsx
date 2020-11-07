import React from 'react';
import './home.page.styles.css';
import Logo from '../../assets/icons/darklogo.jpeg';
import { ButtonPage } from '../../components/buttonPage.component';

export const Home = () => {
  return (
    <div className="home">
      <img className="logo" src={Logo} alt="logo" />
      <ButtonPage title="Novo Jogo" />
      <ButtonPage title="Continue" />
      <ButtonPage title="Regras" />
    </div>
  );
};
