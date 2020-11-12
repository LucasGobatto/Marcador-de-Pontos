import React, { useState } from 'react';
import './new-game.page.styles.css';
import { ButtonPage } from '../../components/buttonPage.component';
import { InputName } from '../../components/inputName.components';
import { equipName } from '../../scripts/equip-name';

interface PlayerNames {
  player1: { name: string; hasError: boolean };
  player2: { name: string; hasError: boolean };
  player3: { name: string; hasError: boolean };
  player4: { name: string; hasError: boolean };
}

export function NewGame() {
  const [inputName, setInputName] = useState<PlayerNames>(initialNames());
  const [randomName, setRandomName] = useState<string[]>([]);
  const [clicked, setClicked] = useState(false);

  function initialNames(): PlayerNames {
    return {
      player1: { name: '', hasError: true },
      player2: { name: '', hasError: true },
      player3: { name: '', hasError: true },
      player4: { name: '', hasError: true },
    };
  }

  function handleChangeParent(input: string, player: string, hasError: boolean): void {
    setInputName({ ...inputName, [player]: { name: input, hasError } });
  }

  function handleValidation(): void {
    if (
      !inputName.player1.hasError &&
      !inputName.player2.hasError &&
      !inputName.player3.hasError &&
      !inputName.player4.hasError
    ) {
      const teamName1 = equipName(inputName.player1.name, inputName.player2.name);
      const teamName2 = equipName(inputName.player3.name, inputName.player4.name);
      setRandomName([teamName1, teamName2]);
    } else {
      alert('Todos os campos devem ser preenchidos somente com letras');
    }
  }

  function handleClick() {
    setClicked(true);
    handleValidation();
  }

  return (
    <div className="novo">
      <h1>{randomName.length > 0 ? `${randomName[0]}` : 'Equipe 1'}</h1>
      <InputName placeholder="Nome 01" name="player1" onChangeParent={handleChangeParent} readyToValidate={clicked} />
      <InputName placeholder="Nome 02" name="player2" onChangeParent={handleChangeParent} readyToValidate={clicked} />
      <br></br>
      <h1>{randomName.length > 0 ? `${randomName[1]}` : 'Equipe 2'}</h1>
      <InputName placeholder="Nome 03" name="player3" onChangeParent={handleChangeParent} readyToValidate={clicked} />
      <InputName placeholder="Nome 04" name="player4" onChangeParent={handleChangeParent} readyToValidate={clicked} />
      <br></br>
      <button className="button" onClick={handleClick}>
        Combinar Nomes
      </button>
      <br></br>
      <ButtonPage title="Inicio" />
    </div>
  );
}
