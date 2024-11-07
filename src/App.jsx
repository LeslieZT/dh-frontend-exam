import "./App.css";
import { useState } from "react";
import { Card } from "./components/Card";
import { Form } from "./components/Form";

function App() {
  const [cards, setCards] = useState([]);

  return (
    <div className="app">
      <h2>Agrega tu libro favorito</h2>
      <Form setCards={setCards} />
      {cards.length === 0 ? (
        <h3>No hay libros aún</h3>
      ) : (
        <h2>Lista de libros favoritos</h2>
      )}
      <div className="list-container">
        {cards.map((card, index) => {
          return <Card key={index} name={card.name} book={card.book} />;
        })}
      </div>
    </div>
  );
}

export default App;
