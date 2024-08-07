import React, { useEffect, useRef, useState } from "react";
import ScrollToHashElement from "../components/ScrollToHashElement";

import Nav from "../components/Nav";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

export default function HomePage() {
  document.title = "Matthew Pinkus";

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (event: any) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const [activeSection, setActiveSection] = useState("about");
  const refs = {
    about: useRef(document.getElementById("about")),
    experience: useRef(document.getElementById("experience")),
    projects: useRef(document.getElementById("projects")),
    contact: useRef(document.getElementById("contact")),
  };
  


  return (
    <div className="px-6 md:px-12 lg:px-24 lg:py-0 flex flex-col lg:flex-row min-h-screen max-w-screen-[95dvw] font-sans justify-center mx-auto">
      <ScrollToHashElement />
      <div
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
        className={"max-md:hidden inset-0 -z-30 fixed transition duration-300"}
      />
      <Nav />
      <div className="flex lg:w-4/5 flex-col lg:flex-row">
        <div className="space-y-8 text-paragraph_dark">
          <About />

          <div className="divider" />

          <Experience />

          <div className="divider" />

          <Projects />

          <div className="divider" />

          <Contact />

          <div className="divider" />

          <Footer />
        </div>
      </div>
    </div>
  );
}
