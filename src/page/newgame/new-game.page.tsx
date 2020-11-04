import React from "react";
import { useHistory, useParams } from "react-router-dom";

export const NewGame = () => {
  
  const params = useParams();
  console.log(params);

  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <div className="novo">
      <h1>Equipe 01</h1>
      <input type="text" />
      <br></br>
      <input type="text" />
      <h1>Equipe 02</h1>
      <input type="text" />
      <br></br>
      <input type="text" />
      <br></br>
      <button className="button">COMBINAR NOMES</button>
      <br></br>
      <button className="button" onClick={() => handleClick()}>HOME</button>
    </div>
  );
};
