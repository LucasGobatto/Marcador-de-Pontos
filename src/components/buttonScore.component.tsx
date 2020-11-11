import React from 'react';
import { useHistory } from 'react-router-dom';
import './component.styles.css';

export function ButtonScore(props: { title: string }) {
  const buttonTitle = props.title;

  const history = useHistory();

  function handleClick(name: string) {
    history.push(name);
  }

  return (
    <button className="buttonScore" onClick={() => {handleClick(name)}}>{buttonTitle}</button>
  );
}
