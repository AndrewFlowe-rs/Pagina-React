import React from 'react';
import "../assets/css/AbogadoCard.css";

function AbogadoCard({ abogado }) {
  return (
    <div className="card">
      <img src={abogado.imagen} alt={abogado.nombre} />
      <div className="info">
        <h2>{abogado.nombre}</h2>
        <p>{abogado.especialidad}</p>
      </div>
    </div>
  );
}

export default AbogadoCard;