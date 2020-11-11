import React from 'react';
import { ButtonPage } from '../../components/buttonPage.component';
import "./score.page.styles.css";

export const Score = () => {
    
  return (
  <div className="Fundo">
        <div className= "NomesEquipes">
            <h1>Equipe 1</h1>
            <h1>Equipe 2</h1>
        </div>
        <div className="PlacarEquipes">Placar</div>
        <div className="BarraBotões">
            <ButtonPage title="Adicionar" />
            <ButtonPage title="Zerar" />
            <ButtonPage title="Inicio" />
        </div>
    </div>
  );
};