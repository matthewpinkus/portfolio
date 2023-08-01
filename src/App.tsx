import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Archive from "./pages/Archive";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="archives" element={<Archive />} />
    </Routes>
  );
}

export default App;
