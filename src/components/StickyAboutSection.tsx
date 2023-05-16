import React from "react";
import logo from "../assets/matthew-icon.png" 

export default function StickyAboutSection() {
  
  return (
    <div className="h-full sticky top-0">
      <div className="bg-green-300 w-auto p-6">
        <div className="w-56 mb-12 bg-secondary_dark rounded-full">
          <img src={logo} className="mx-auto" />
        </div>
        <h2 className="text-heading_dark font-bold text-5xl mb-6">Matthew Pinkus</h2>
        <h3 className="text-subheading_dark font-italic text-3xl mb-12">Software Engineer</h3>
        <p className="text-paragraph_dark text-2xl">I build and maintain websites.</p>
        <div className="mt-24">
          <a href=""> </a>
        </div>
      </div>
      
    </div>
  );
}