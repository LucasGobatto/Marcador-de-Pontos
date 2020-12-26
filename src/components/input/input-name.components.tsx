import React, { useState, useEffect } from 'react';
import './input-name.styled.css';
import { onlyLetter } from './validation';

interface InputNameProps {
  name: 'player1' | 'player2' | 'player3' | 'player4';
  readyToValidate: boolean;
  placeholder?: string;
  onChangeParent: (text: string, name: string, hasError: boolean) => void;
}

export function InputName(props: InputNameProps) {
  const [text, setText] = useState<string>('');
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    function validateField(text: string): void {
      const hasError = onlyLetter(text);
      setHasError(hasError);
    }
    if (props.readyToValidate) {
      validateField(text);
    }
  }, [props, text]);

  function handleChangeChild(text: string): void {
    setText(text);
    props.onChangeParent(text, props.name, hasError);
  }

  return (
    <input
      className="input-names"
      placeholder={props.placeholder}
      onChange={(event) => handleChangeChild(event.target.value)}
    />
  );
}
