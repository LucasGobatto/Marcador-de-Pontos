import React, { useState, useEffect, useRef } from 'react';
import { onlyNumber } from './validation';
import './input-name.styled.css';

interface InputScoreProps {
  name: 'team1' | 'team2';
  readyToValidate: boolean;
  placeholder?: string;
  onChangeParent: (text: string, name: string, hasError: boolean) => void;
}

export const InputScore: React.FC<InputScoreProps> = (props) => {
  const text = useRef<string>('');
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const validateField = (text: string) => {
      const hasError = onlyNumber(text);
      setHasError(hasError);
    };
    if (props.readyToValidate) {
      validateField(text.current);
    }
  }, [props.readyToValidate, text]);

  const handleChange = (event: any) => {
    text.current = event.target.value;
    props.onChangeParent(text.current, props.name, hasError);
  };

  return <input className="input-names" placeholder={props.placeholder} onChange={handleChange} />;
};
