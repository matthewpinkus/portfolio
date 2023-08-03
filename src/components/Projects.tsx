import React, { useEffect, useRef, useState } from "react";
import ProjectsTile from "./ProjectsTile";
import Projects_JSON from "../obj/Projects.json";

export default function Projects() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const anchor: any = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        rootMargin: "-250px",
      }
    );
    observer.observe(anchor.current);
    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    const anchor = document.getElementById("nav-projects");
    if (isIntersecting) {
      anchor?.classList.add("text-paragraph_dark");
    } else {
      anchor?.classList.remove("text-paragraph_dark");
    }
  }, [isIntersecting]);
  return (
    <div ref={anchor} id="projects" className="section">
      <div className="mobile-sticky-heading">
        <h2 className="text-2xl max-md:ml-8 font-bold mb-4 text-paragraph_dark uppercase">
          Projects
        </h2>
      </div>
      <div className="space-y-4">
        {Projects_JSON.map((json) => {
          return (
            <ProjectsTile
              title={json.title}
              description={json.description}
              link={json.link}
              technology={json.technologies.map((tech) => {
                return tech;
              })}
            />
          );
        })}
      </div>
    </div>
  );
}
