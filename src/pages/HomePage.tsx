import React from "react";
import StickyAboutSection from "../components/StickyAboutSection";
import WorkExperienceTile from "../components/WorkExperienceTile";
import AboutTile from "../components/AboutTile";
import ProjectTile from "../components/ProjectTile";

export default function HomePage() {
  return (
    <div className="md:p-8 md:ml-96 bg-primary_dark">
      <div className="flex flex-col md:flex-row">
        <div className="space-y-16 w-full text-paragraph_dark">
          <StickyAboutSection />
          <div>
            <h1 className="text-5xl">Web Developer</h1>
          </div>
          <div className="divider" />
        </div>
      </div>
    </div>
  );
}
