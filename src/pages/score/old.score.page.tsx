import React, { useState, useRef } from 'react';
import './score.page.styles.css';
import { useNames } from '@app/data';
import { InputName } from '@components';

interface TeamScore {
  team1: Array<number>;
  team2: Array<number>;
}

interface CurrentInputType {
  player1: { score: number; hasError: boolean };
  player2: { score: number; hasError: boolean };
}

export function Score() {
  const { teamNames } = useNames();
  const [showPopUp, setShowPopUp] = useState(false);
  const [clicked, setClicked] = useState(false);
  const currentInput = useRef<CurrentInputType>({
    player1: { hasError: true, score: 0 },
    player2: { hasError: true, score: 0 },
  });

  const [teamScore, setTeamScore] = useState<TeamScore>({
    team1: [],
    team2: [],
  });

  function handleChange(text: string, name: string, hasError: boolean) {
    if (name === 'player1') {
      currentInput.current = { ...currentInput.current, player1: { hasError, score: Number(text) } };
    } else {
      currentInput.current = { ...currentInput.current, player2: { hasError, score: Number(text) } };
    }
  }

  function handleReady() {
    setClicked(true);
  }

  React.useEffect(() => {
    console.log(clicked, currentInput.current);
    function updateTeamScore() {
      if (!currentInput.current.player1.hasError && !currentInput.current.player2.hasError) {
        teamScore.team1.push(currentInput.current.player1.score);
        teamScore.team2.push(currentInput.current.player2.score);
        setShowPopUp(false);
      } else {
        // todo: flash message!
      }
    }
    if (clicked) {
      updateTeamScore();
      setClicked(false);
    }
  }, [setClicked, clicked, teamScore]);

  function renderScore(team: number) {
    if (team === 1) {
      return teamScore.team1.map((value: number, index: number) => <p key={`${value} + ${index} team1`}>{value}</p>);
    } else {
      return teamScore.team2.map((value: number, index: number) => <p key={`${value} + ${index} team2`}>{value}</p>);
    }
  }

  function increaseScore() {
    setShowPopUp(true);
  }

  function handleCancel() {
    setShowPopUp(false);
    setClicked(false);
  }

  function cleanData() {
    setTeamScore({ team1: [], team2: [] });
    currentInput.current = {
      player1: { hasError: true, score: 0 },
      player2: { hasError: true, score: 0 },
    };
  }

  return (
    <div className="container">
      <div className="score-container">
        <div>
          <h1>{teamNames?.team1?.name ?? 'Equipe 1'}</h1>
          {renderScore(1)}
        </div>

        <div>
          <h1>{teamNames?.team2?.name ?? 'Equipe 2'}</h1>
          {renderScore(2)}
        </div>
      </div>

      {showPopUp && (
        <div>
          <h1>Pontuação da Rodada</h1>
          <div className="popup-container-1">
            <div>
              <p>{teamNames?.team1?.name ?? 'Equipe 1'}</p>
              <InputName name="player1" onChangeParent={handleChange} readyToValidate placeholder="Digite aqui" />
            </div>
            <div>
              <p>{teamNames?.team2?.name ?? 'Equipe 2'}</p>
              <InputName name="player2" onChangeParent={handleChange} readyToValidate placeholder="Digite aqui" />
            </div>
          </div>
          <button onClick={handleCancel}>Cancelar</button>
          <button onClick={handleReady}>Pronto</button>
        </div>
      )}

      <div>
        <button>Inicio</button>
        <button onClick={cleanData}>Zerar</button>
        <button onClick={increaseScore}>Adicionar</button>
      </div>
    </div>
  );
}
