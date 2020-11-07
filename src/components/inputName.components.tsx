import React, {useState} from "react";
import "./component.styles.css";

export function InputName(props: { placeholder: any; name: any, type: any, value: any, onChange: any}) {

    function handleChange   (event: { target: { value: any;}; }){
        props.onChange(event.target.value)
    }
   
    return(
        <div>
            <input
            className="input"
            placeholder={props.placeholder}
            type="text"
            value={props.value}
            onChange={handleChange} />
            <br></br>
        </div>
            
    )
}
