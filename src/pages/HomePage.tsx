import React from "react";
import StickyAboutSection from "../components/StickyAboutSection";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Technologies from "../components/Technologies";

export default function HomePage() {
  return (
    <div className="md:ml-80 bg-primary_dark">
      <StickyAboutSection />
      <div className="flex flex-col container md:flex-row">
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
