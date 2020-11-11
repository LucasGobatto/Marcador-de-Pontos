import React from 'react';
import './common-button.styled.css';

interface CommonButtonProps {
  title?: string;
  onClick?: () => void;
}

const Button: React.FC<CommonButtonProps> = (props) => {
  return (
    <button className="common-button" onClick={props.onClick}>
      {props.title}
      {props.children}
    </button>
  );
};

// this button can be named as you wish, so this is a generec configuration. That is why we put a default export
export default Button;
