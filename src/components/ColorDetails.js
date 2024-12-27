import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";

function ColorDetails({ colors }) {
  const { color } = useParams();
  const selectedColor = colors.find((c) => c.name.toLowerCase() === color.toLowerCase());

  if (!selectedColor) {
    return <Navigate to="/colors" />;
  }

  return (
    <div style={{ backgroundColor: selectedColor.value, height: "100vh", color: "#fff" }}>
      <h1>{selectedColor.name}</h1>
      <p>Isn't it beautiful?</p>
      <Link to="/colors">Go Back</Link>
    </div>
  );
}

export default ColorDetails;
