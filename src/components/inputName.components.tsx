import React, {useState} from "react";
import "./component.styles.css";

export function InputName(props: { placeholder: any; name: any, type: any, value: any, onChange: any}) {

    const [inputName, setInputName] = useState("");

    function handleChange   (event: { target: { value: any; name: any }; }){
        setInputName(event.target.value);
        props.onChange(event.target.name, event.target.value);
    }
   
    return(
        <div>
            <input
            className="input"
            placeholder={props.placeholder}
            name={props.name}
            type="text"
            value={props.value ? props.value : inputName}
            onChange={handleChange}
            required />
            <br></br>
        </div>
            
    )
}
