import React, { useState, useEffect } from 'react';
import './input-name.styled.css';

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
      // false for just letters and true for else;
      if (text === '') {
        setHasError(true);
      } else {
        const regex = /[0-9]|\W|_/;
        setHasError(regex.test(text));
      }
    }
    if (props.readyToValidate) {
      validateField(text);
    }
    console.log('entrou no useEffect');
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
