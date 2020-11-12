import React from 'react';
import './random-button.styled.css';

interface RandomizeNameButtonProps {
  title?: string;
  onClick?: () => void;
}

export const RandomNamesButton: React.FC<RandomizeNameButtonProps> = (props) => {
  return (
    <button className="random-button" onClick={props.onClick}>
      {props.title}
      {props.children}
    </button>
  );
};
