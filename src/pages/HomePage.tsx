import React from "react";
import StickyAboutSection from "../components/StickyAboutSection";
import WorkExperienceTile from "../components/WorkExperienceTile";
import AboutTile from "../components/AboutTile";
import ProjectTile from "../components/ProjectTile";

export default function HomePage() {
    return(
        <div className="p-12 bg-primary_dark scroll-smooth">
        <div className="flex flex-col md:flex-row">
          <StickyAboutSection />
          <div className="space-y-16">
            <AboutTile />
            <WorkExperienceTile />
            <ProjectTile />
          </div>
        </div>
      </div>
    )
    
}