import React from 'react';
import './common-button.styled.css';

export function ButtonURL(props: { site: string; url: any }) {
  const buttonTitle = props.site;
  const buttonLink = props.url;

  function handleClick() {
    window.open(buttonLink, '_blank');
  }

  return (
    <button className="common-button" onClick={handleClick}>
      {buttonTitle}
    </button>
  );
}
