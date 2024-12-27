import React from "react";
import { Link } from "react-router-dom";
import "./ColorList.css";

function ColorList({ colors }) {
  return (
    <div>
      <h1>Welcome to the Color Factory</h1>
      <Link to="/colors/new">Add a New Color</Link>
      <div>
        {colors.length > 0 ? (
          <ul>
            {colors.map((color, index) => (
              <li key={index}>
                <Link to={`/colors/${color.name.toLowerCase()}`}>{color.name}</Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No colors available. Add one!</p>
        )}
      </div>
    </div>
  );
}

export default ColorList;
