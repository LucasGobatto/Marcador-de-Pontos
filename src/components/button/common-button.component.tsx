import * as React from 'react';
import './common-button.styled.css';

interface CommonButtonProps {
  title: string;
  color?: 'red' | 'gray';
  onClick: () => void;
}

export const CommonButton: React.FC<CommonButtonProps> = (props) => {
  return (
    <button className="common-button" id={props.color ?? 'red'} onClick={props.onClick}>
      {props.title}
    </button>
  );
};
