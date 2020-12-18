import * as React from 'react';
import './flash-message.styled.css';
import { AiOutlineWarning, AiOutlineInfoCircle, AiOutlineCheckCircle } from 'react-icons/ai';
import { BiErrorAlt } from 'react-icons/bi';

export interface FlashMessageProps {
  message?: string;
  type?: 'success' | 'caption' | 'warning' | 'info';
  onTap?: (visible?: boolean) => void;
}

export interface FlashMessageParams extends FlashMessageProps {
  visible?: boolean;
}

const ANIMATION_TIME = 4000; //ms

export const FlashMessage: React.FC<FlashMessageProps> = (props) => {
  const timeRef = React.useRef<NodeJS.Timeout>();
  const wrapperRef = React.createRef<HTMLButtonElement>();

  React.useEffect(() => {
    const wrapper = wrapperRef.current;
    wrapper?.classList.toggle('show-flash-message');

    timeRef.current = setTimeout(() => {
      props.onTap?.();
    }, ANIMATION_TIME);

    return () => {
      clearTimeout(timeRef.current!);
    };
  }, [props, wrapperRef]);

  function setIcon() {
    let icon: JSX.Element;
    switch (props.type ?? 'success') {
      case 'success':
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
      default:
        throw new Error(`Type '${props.type}' is not a valid type. Must be success, caption, warning or info.`);
    }
    return icon;
  }

  function handleClick() {
    clearTimeout(timeRef.current!);
    props?.onTap?.();
  }

  return (
    <button ref={wrapperRef} className="flash-message" id={props.type ?? 'success'} onClick={handleClick}>
      {setIcon()}
      <p className="message">{props.message ?? 'This is the flash message!'}</p>
    </button>
  );
};
