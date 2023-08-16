import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Archive from "./pages/Archive";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="portfolio" element={<Home />} />
        <Route path="archives" element={<Archive />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
