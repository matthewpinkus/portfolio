import React from "react";
import StickyAboutSection from "../components/StickyAboutSection";
import Experience from "../components/Experience";

export default function ExperiencePage() {
  return (
    <div className="ml-96 bg-primary_dark">
      <div className="flex flex-col md:flex-row">
        <StickyAboutSection />
        <Experience />
      </div>
    </div>
  );
}
