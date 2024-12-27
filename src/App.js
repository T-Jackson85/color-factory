import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ColorList from "./components/ColorList";
import ColorDetails from "./components/ColorDetails";
import AddColorForm from "./components/AddColorForm";
import "./App.css"

function App() {
  const [colors, setColors] = useState(() => JSON.parse(localStorage.getItem("colors")) || []);

  useEffect(() => {
    localStorage.setItem("colors", JSON.stringify(colors));
  }, [colors]);

  const addColor = (newColor) => {
    setColors([newColor, ...colors]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/colors" element={<ColorList colors={colors} />} />
        <Route path="/colors/new" element={<AddColorForm addColor={addColor} />} />
        <Route path="/colors/:color" element={<ColorDetails colors={colors} />} />
        <Route path="*" element={<Navigate to="/colors" />} />
      </Routes>
    </Router>
  );
}

export default App;
