import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={ <HomePage/> } />
      <Route path="experience" element={ <ExperiencePage />}  />
      <Route path="projects" element={ <ProjectsPage/> } />
    </Routes>
  );
}

export default App;
