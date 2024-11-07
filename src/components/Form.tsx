import React from "react";
import { useState } from "react";

export const Form = ({ setCards }) => {
  const [data, setData] = useState({
    name: "",
    book: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.name.length < 3 || data.name.startsWith(" ")) {
      setError(
        "El nombre debe tener al menos 3 caracteres y no puede comenzar con un espacio."
      );
    } else if (data.book.length < 6) {
      setError("El libro debe tener al menos 6 caracteres.");
    } else {
      setError("");
      setCards((cards) => [...cards, data]);
      setData({ name: "", book: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          placeholder="Ingresa tu nombre"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
      </div>

      <div className="form-group">
        <label htmlFor="book">Libro favorito:</label>
        <input
          type="text"
          id="book"
          placeholder="Ingresa tu Libro favorito"
          value={data.book}
          onChange={(e) => setData({ ...data, book: e.target.value })}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Agregar
      </button>
      {error.length > 0 && <h4 style={{ color: "red" }}>{error}</h4>}
    </form>
  );
};
