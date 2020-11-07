<<<<<<< HEAD
import React, { useState } from "react";
import "./new-game.page.styles.css";
import { ButtonPage } from "../../components/buttonPage.component";
import { InputName } from "../../components/inputName.components";
import { equipName } from "../../scripts/equip-name";

interface InputNameProps {
  value: any
}

export function NewGame() {

  const [inputName , setInputName] = useState([]);
  
  function handleChange(newValue: { preventDefault: () => void; }) {
    newValue.preventDefault();
    setInputName([...inputName]);
  }
  
  function handleClick() { 
    console.log(inputName[1]);
  }
=======
import * as React from 'react';
>>>>>>> eslint and prettier configs



  return (
    <div className="novo">
      <h1>Equipe 1</h1>
        <InputName placeholder="Nome 01" name="Nome01" type="text" value={inputName[0]} onChange={handleChange} />
        <InputName placeholder="Nome 02" name="Nome02" type="text" value={inputName[1]} onChange={handleChange} />
      <br></br>
      <h1>Equipe 2</h1>
        <InputName placeholder="Nome 03" name="Nome03" type="text" value={inputName[2]} onChange={handleChange} />
        <InputName placeholder="Nome 04" name="Nome04" type="text" value={inputName[3]} onChange={handleChange} />
      <br></br>
      <button className="button" onClick={handleClick}>Combinar Nomes</button>
      <br></br>
      <ButtonPage title="Inicio" />
    </div>
  );
}
