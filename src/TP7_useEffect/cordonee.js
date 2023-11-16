import React, { useEffect, useState } from "react";
export default function Coordonnee() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setX(event.clientX);
      setY(event.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove)})

  return (
    <div className="container">
      <h4 className="title">Recuperation des coordonnees de la souris</h4>
      <h5>Coordonnees x: {x} y: {y}</h5>
    </div>
  );
}
