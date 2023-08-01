import React from "react";
import Nav from "../components/Nav";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Technologies from "../components/Technologies";
import ScrollToHashElement from "../components/ScrollToHashElement";

export default function HomePage() {
  return (
    <div className="px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 flex min-h-screen max-w-screen-xl font-sans justify-center mx-auto bg-primary_dark">
      <ScrollToHashElement />
      <Nav />
      <div className="flex md:w-1/2 flex-col md:flex-row">
        <div className="space-y-8 text-paragraph_dark">
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
