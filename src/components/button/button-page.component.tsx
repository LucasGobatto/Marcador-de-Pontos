import React from 'react';
import { useHistory } from 'react-router-dom';
import { ImDiamonds, ImSpades, ImClubs } from 'react-icons/im';
import { GiHearts } from 'react-icons/gi';
import './button-page.styled.css';

interface ButtonProps {
  title: string;
  icon?: 'hearts' | 'spades' | 'diamonds' | 'clubs';
}

export function ButtonPage(props: ButtonProps) {
  const lowerTitle = props.title.toLowerCase();
  const noSpaceTitle = lowerTitle.replace(/\s+/g, '');

  const history = useHistory();

  function handleClick(name: string) {
    history.push(name);
  }

  function chooseIcon(): JSX.Element | null {
    switch (props.icon) {
      case 'hearts':
        return <GiHearts className="red-icon" />;
      case 'spades':
        return <ImSpades className="black-icon" />;
      case 'diamonds':
        return <ImDiamonds className="red-icon" />;
      case 'clubs':
        return <ImClubs className="black-icon" />;
      default:
        // there is no props
        return null;
    }
  }

  return (
    <button
      className="button-page"
      onClick={() => {
        handleClick(noSpaceTitle);
      }}
    >
      {chooseIcon()}
      <p className="button-name">{props.title}</p>
    </button>
  );
}
