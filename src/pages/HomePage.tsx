import React from "react";
import StickyAboutSection from "../components/StickyAboutSection";
import AboutTile from "../components/AboutTile";
import Experience from "../components/Experience";
import Projects from "../components/Projects";

export default function HomePage() {
  return (
    <div className="md:ml-96 bg-primary_dark">
      <StickyAboutSection />
      <div className="flex p-8 md:p-16 flex-col md:flex-row">
        <div className="space-y-8 w-full text-paragraph_dark">
          <AboutTile />

          <div className="divider" />

          <Experience />

          <div className="divider" />

          <Projects />

          <div className="divider" />

          <div className="">
            <h2 className="text-3xl font-bold mb-4">Technologies</h2>
            <p>Tiles go here?</p>
          </div>

          <div className="divider" />
        </div>
      </div>
    </div>
  );
}
