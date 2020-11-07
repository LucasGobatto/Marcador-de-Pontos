<<<<<<< HEAD
import React, { useState } from "react";
import "./new-game.page.styles.css";
import { ButtonPage } from "../../components/buttonPage.component";
import { InputName } from "../../components/inputName.components";
import { stringify } from "querystring";

interface InputNameProps {
  name: string;
  valuw: string;
}

export function NewGame() {

  const [inputName, setInputName] = useState<InputNameProps>({} as InputNameProps);

  function handleSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault();
    console.log(inputName);
    setInputName(inputName);
}

  function handleChange(name: any, value: any) {
    setInputName(prev => ({...prev, [name]: value}));
  }

  function handleClick() { 
    return inputName
  }
=======
import * as React from 'react';
>>>>>>> eslint and prettier configs

  return (
    <div className="novo">
      <h1>Equipe 1</h1>
        <InputName placeholder="Nome 01" name="Nome 01" type="text" value="" onChange={handleChange} />
        <InputName placeholder="Nome 02" name="Nome 02" type="text" value="" onChange={handleChange} />
      <br></br>
        <InputName placeholder="Nome 03" name="Nome 03" type="text" value="" onChange={handleChange} />
        <InputName placeholder="Nome 04" name="Nome 04" type="text" value="" onChange={handleChange} />
      <br></br>
      <button className="button" onClick={handleClick}>Combinar Nomes</button>
      <br></br>
      <ButtonPage title="Inicio" />
    </div>
  );
}
