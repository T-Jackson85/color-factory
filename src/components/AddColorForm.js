import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddColorForm({ addColor }) {
  const [name, setName] = useState("");
  const [value, setValue] = useState("#000000");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor({ name, value });
    navigate("/colors");
  };

  return (
    <div>
      <h1>Add a New Color</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Color Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="value">Pick a Color:</label>
          <input
            id="value"
            type="color"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <button type="submit">Add Color</button>
      </form>
    </div>
  );
}

export default AddColorForm;
