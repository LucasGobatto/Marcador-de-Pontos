import React, { useState } from 'react';
import './new-game.page.styles.css';
import { ButtonPage } from '../../components/buttonPage.component';
import { InputName } from '../../components/inputName.components';
import { equipName } from '../../scripts/equip-name';

interface PlayerNames {
  player1: string;
  player2: string;
  player3: string;
  player4: string;
}

export function NewGame() {
  const [inputName, setInputName] = useState<PlayerNames>({} as PlayerNames);
  const [randomName, setRandomName] = useState<string[]>([]);

  function handleChangeParent(input: string, player: string): void {
    setInputName({ ...inputName, [player]: input })
  }

  function handleClick() {
    const teamName1 = equipName(inputName.player1, inputName.player2);
    const teamName2 = equipName(inputName.player3, inputName.player4);
    setRandomName([teamName1, teamName2])
  }

  return (
    <div className="novo">
      <h1>{randomName.length > 0 ? `${randomName[0]}` : "Equipe 1"}</h1>
      <InputName placeholder="Nome 01" name="player1" onChangeParent={handleChangeParent} />
      <InputName placeholder="Nome 02" name="player2" onChangeParent={handleChangeParent} />
      <br></br>
      <h1>{randomName.length > 0 ? `${randomName[1]}` : "Equipe 2"}</h1>
      <InputName placeholder="Nome 03" name="player3" onChangeParent={handleChangeParent} />
      <InputName placeholder="Nome 04" name="player4" onChangeParent={handleChangeParent} />
      <br></br>
      <button className="button" onClick={handleClick}>
        Combinar Nomes
      </button>
      <br></br>
      <ButtonPage title="Inicio" />
    </div>
  );
}
