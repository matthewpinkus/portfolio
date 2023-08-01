import React from "react";
import Nav from "../components/Nav";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Technologies from "../components/Technologies";
import ScrollToHashElement from "../components/ScrollToHashElement";

export default function HomePage() {
  return (
    <div className="md:my-24 md:mr-48 m-12 md:ml-[33%] bg-primary_dark">
      <ScrollToHashElement />
      <Nav />
      <div className="flex flex-col md:flex-row">
        <div className="space-y-8 w-full text-paragraph_dark">
          <About />

          <div className="divider" />

          <Experience />

          <div className="divider" />

          <Projects />

          <div className="divider" />

          <Technologies />
        </div>
      </div>
    </div>
  );
}
