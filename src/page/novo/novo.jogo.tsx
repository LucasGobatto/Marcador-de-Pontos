import * as React from "react";

export const NovoJogo = () => {
  return (
    <div className="novo">
      <h1>Equipe 01</h1>
      <input type="text" name="Nome01">
        Nome 01
      </input>
      <input type="text" name="Nome02">
        Nome 02
      </input>
      <h1>Equipe 02</h1>
      <input type="text" name="Nome03">
        Nome 03
      </input>
      <input type="text" name="Nome04">
        Nome 04
      </input>
      <button className="button">COMBINAR NOMES</button>
    </div>
  );
};
