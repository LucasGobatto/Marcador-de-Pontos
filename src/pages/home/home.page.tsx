import React from 'react';
import './home.page.styles.css';
import Logo from '@assets/icons/darklogo.jpeg';
import { ButtonPage } from '@components';
import { useNames } from '@app/data';

export const Home: React.FC = () => {
  const { teamNames } = useNames();

  const handleClick = () => {
    /**
     * this function will handle with the click
     * when alreay exits an initiated game.
     */
    // here comes the confirm alert!
  };

  if (teamNames?.team1) {
    return (
      <div className="home">
        <img className="logo" src={Logo} alt="logo" />
        <ButtonPage title="Novo Jogo" icon="hearts" onClick={handleClick} />
        <ButtonPage title="Continue" icon="spades" />
        <ButtonPage title="Regras" icon="diamonds" />
        <ButtonPage title="Sobre" icon="clubs" />
      </div>
    );
  }

  return (
    <div className="home">
      <img className="logo" src={Logo} alt="logo" />
      <ButtonPage title="Novo Jogo" icon="hearts" />
      <ButtonPage title="Regras" icon="spades" />
      <ButtonPage title="Sobre" icon="diamonds" />
    </div>
  );
};
