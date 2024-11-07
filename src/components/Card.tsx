import React from "react";

export const Card = ({ name, book }) => {
  return (
    <div className={"card-container"}>
      <h3>Hola {name}!</h3>
      <p>Sabemos que tu libro favorito es:</p>
      <div className={"card-book"}>
        <p>{book}</p>
      </div>
    </div>
  );
};