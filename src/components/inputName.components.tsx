import React from 'react';
import './component.styles.css';

interface InputNameProps {
  placeholder?: string;
  name: "player1" | "player2" | "player3" | "player4";
  onChangeParent: (text: string, name: string) => void; 
}

export function InputName(props: InputNameProps) {
  function handleChangeChild(text: string): void {
    props.onChangeParent(text, props.name);
  }

  return (
    <input
      className="input"
      placeholder={props.placeholder}
      onChange={(event) => handleChangeChild(event.target.value)}
    />
  );
}
