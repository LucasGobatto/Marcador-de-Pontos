import React from 'react';
import { useHistory } from 'react-router-dom';
import './component.styles.css';

export function ButtonPage(props: { title: string }) {
  const buttonTitle = props.title;
  const lowerTitle = buttonTitle.toLowerCase();
  const noSpaceTitle = lowerTitle.replace(/\s+/g, '');

  const history = useHistory();

  function handleClick(name: string) {
    history.push(name);
  }

  return (
    <button
      className="botao"
      onClick={() => {
        handleClick(noSpaceTitle);
      }}
    >
      {buttonTitle}
    </button>
  );
}
