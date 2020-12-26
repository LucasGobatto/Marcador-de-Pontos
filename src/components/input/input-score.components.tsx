import React, { useState, useEffect } from 'react';
import { onlyNumber } from './validation';
import './input-name.styled.css';

interface InputScoreProps {
  name: 'team1' | 'team2';
  readyToValidate: boolean;
  placeholder?: string;
  onChangeParent: (text: string, name: string, hasError: boolean) => void;
}

export function InputScore(props: InputScoreProps) {
  const [text, setText] = useState<string>('');
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const validateField = (text: string) => {
      const hasError = onlyNumber(text);
      setHasError(hasError);
    };
    if (props.readyToValidate) {
      validateField(text);
    }
  }, [props.readyToValidate, text]);

  useEffect(() => {
    props.onChangeParent(text, props.name, hasError);
  }, [hasError, text, props.name, props]);

  function handleChangeChild(text: string): void {
    setText(text);
  }

  return (
    <input
      className="input-names"
      placeholder={props.placeholder}
      onChange={(event) => handleChangeChild(event.target.value)}
    />
  );
}
