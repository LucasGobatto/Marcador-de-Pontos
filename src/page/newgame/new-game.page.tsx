<<<<<<< HEAD
import React, { useState } from "react";
import "./new-game.page.styles.css";
import { ButtonPage } from "../../components/buttonPage.component";
import { InputName } from "../../components/inputName.components";
import { equipName } from "../../scripts/equip-name";
import { stringify } from "querystring";

interface InputNameProps {
  name: any
}

export function NewGame() {

  const [inputName , setInputName] = useState<InputNameProps>({} as InputNameProps);
  
  function handleChange(name: any) {
    setInputName(name);
  }
  
  function handleClick() { 
    console.log(inputName);
  }
=======
import * as React from 'react';
>>>>>>> eslint and prettier configs



  return (
    <div className="novo">
      <h1>Equipe 1</h1>
        <InputName placeholder="Nome 01" name="Nome01" type="text" value="" onChange={handleChange} />
        <InputName placeholder="Nome 02" name="Nome02" type="text" value="" onChange={handleChange} />
      <br></br>
      <h1>Equipe 2</h1>
        <InputName placeholder="Nome 03" name="Nome03" type="text" value="" onChange={handleChange} />
        <InputName placeholder="Nome 04" name="Nome04" type="text" value="" onChange={handleChange} />
      <br></br>
      <button className="button" onClick={handleClick}>Combinar Nomes</button>
      <br></br>
      <ButtonPage title="Inicio" />
    </div>
  );
}
