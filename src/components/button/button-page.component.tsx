import React from 'react';
import { useHistory } from 'react-router-dom';
import { ImDiamonds, ImSpades, ImClubs } from 'react-icons/im';
import { GiHearts } from 'react-icons/gi';
import './button-page.styled.css';

interface ButtonProps {
  title: string;
  icon?: 'newgame' | 'continue' | 'rules' | 'home';
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
      case 'newgame':
        return <GiHearts className="red-icon" />;
      case 'continue':
        return <ImSpades className="black-icon" />;
      case 'rules':
        return <ImDiamonds className="red-icon" />;
      case 'home':
        return <ImClubs className="black-icon" />;
      default:
        // there is no props
        return null;
    }
  }

  return (
    <button
      className="button"
      onClick={() => {
        handleClick(noSpaceTitle);
      }}
    >
      {chooseIcon()}
      {props.title}
    </button>
  );
}
