import * as React from 'react';
import './flash-message.styled.css';
import { AiOutlineWarning, AiOutlineInfoCircle, AiOutlineCheckCircle } from 'react-icons/ai';
import { BiErrorAlt } from 'react-icons/bi';

export interface FlashMessageProps {
  message?: string;
  type?: 'sucess' | 'caption' | 'warning' | 'info';
  visible?: boolean;
  onClick?: () => void;
}

export const FlashMessage: React.FC<FlashMessageProps> = (props) => {
  const [isVisible, setIsVisible] = React.useState(props.visible);
  const timeRef = React.useRef<NodeJS.Timeout>();

  React.useEffect(() => {
    if (props.visible) {
      setIsVisible(true);
      timeRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 4000);
    } else {
      setIsVisible(false);
    }
  }, [props]);

  function setIcon() {
    let icon;
    switch (props.type ?? 'sucess') {
      case 'sucess':
        icon = <AiOutlineCheckCircle className="flash-icon" />;
        break;
      case 'caption':
        icon = <BiErrorAlt className="flash-icon" />;
        break;
      case 'warning':
        icon = <AiOutlineWarning className="flash-icon" />;
        break;
      case 'info':
        icon = <AiOutlineInfoCircle className="flash-icon" />;
        break;
    }
    return icon;
  }

  function handleClick() {
    clearTimeout(timeRef.current!);
    props?.onClick?.();
  }

  if (isVisible) {
    return (
      <button className="flash-message" id={props.type ?? 'sucess'} onClick={handleClick}>
        {setIcon()}
        <p className="show-message">{props.message ?? 'This is the flash message!'}</p>
      </button>
    );
  }

  return null;
};
