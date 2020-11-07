import React from "react";
import { useHistory } from "react-router-dom";
import "./component.styles.css";

export function ButtonURL(props: { site: string; url: any }) {
    
    const buttonTitle = props.site;
    const buttonLink = props.url;

    function handleClick() {
        window.open(buttonLink,"_blank");
    }

    return (
        <button className="botao" onClick={() => {handleClick()}}>{buttonTitle}</button>
    )
}