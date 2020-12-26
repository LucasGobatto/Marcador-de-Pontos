import React, { useState } from 'react';
import './score.page.styles.css';
import { useNames } from '@app/data';
import { InputScore } from '@components';

interface TeamScore {
  team1: Array<number>;
  team2: Array<number>;
}

interface CurrentInputType {
  team1: { score: number; hasError: boolean };
  team2: { score: number; hasError: boolean };
}

export function Score() {
  const { teamNames } = useNames();
  const [showPopUp, setShowPopUp] = useState(false);
  const [score, setScore] = useState({
    score1: 0,
    score2: 0,
    difference: 0,
  });

  const [currentInput, setCurrentInput] = useState<CurrentInputType>({
    team1: { hasError: true, score: 0 },
    team2: { hasError: true, score: 0 },
  });

  const [teamScore, setTeamScore] = useState<TeamScore>({
    team1: [],
    team2: [],
  });

  function handleChange(text: string, name: string, hasError: boolean) {
    setCurrentInput({ ...currentInput, [name]: { hasError, score: Number(text) } });
  }

  function handleReady() {
    if (!currentInput.team1.hasError && !currentInput.team2.hasError) {
      teamScore.team1.push(currentInput.team1.score);
      teamScore.team2.push(currentInput.team2.score);
      setCurrentInput({
        team1: { hasError: true, score: 0 },
        team2: { hasError: true, score: 0 },
      });
      const score1 = getTotalScore(teamScore.team1);
      const score2 = getTotalScore(teamScore.team2);
      setScore({ score1, score2, difference: Math.abs(score1 - score2) });
      setShowPopUp(false);
    }
  }

  function renderScore(team: 'team1' | 'team2') {
    return teamScore[team].map((value: number, index: number) => <p key={`${value} + ${index} + ${team}`}>{value}</p>);
  }

  function handleCancel() {
    setShowPopUp(false);
  }

  function cleanData() {
    setTeamScore({ team1: [], team2: [] });
    setCurrentInput({
      team1: { hasError: true, score: 0 },
      team2: { hasError: true, score: 0 },
    });
  }

  function getTotalScore(list: number[]): number {
    let total = 0;
    list.forEach((value: number) => {
      total += value;
    });

    return total;
  }

  return (
    <div className="container">
      <div className="score-container">
        <div>
          <h1>{teamNames?.team1?.name ?? 'Equipe 1'}</h1>
          {renderScore('team1')}
          <h1>{score.score1}</h1>
        </div>

        <div>
          <h1>{teamNames?.team2?.name ?? 'Equipe 2'}</h1>
          {renderScore('team2')}
          <h1>{score.score2}</h1>
        </div>
      </div>

      {score.difference && (
        <div>
          <p>{score.difference}</p>
        </div>
      )}

      {showPopUp && (
        <div>
          <h1>Pontuação da Rodada</h1>
          <div className="popup-container-1">
            <div>
              <p>{teamNames?.team1?.name ?? 'Equipe 1'}</p>
              <InputScore name="team1" onChangeParent={handleChange} readyToValidate placeholder="Digite aqui" />
            </div>
            <div>
              <p>{teamNames?.team2?.name ?? 'Equipe 2'}</p>
              <InputScore name="team2" onChangeParent={handleChange} readyToValidate placeholder="Digite aqui" />
            </div>
          </div>
          <button onClick={handleCancel}>Cancelar</button>
          <button onClick={handleReady}>Pronto</button>
        </div>
      )}

      <div>
        <button>Inicio</button>
        <button onClick={cleanData}>Zerar</button>
        <button onClick={() => setShowPopUp(true)}>Adicionar</button>
      </div>
    </div>
  );
}
