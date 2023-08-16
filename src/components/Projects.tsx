import React, { useEffect, useRef, useState } from "react";
import ProjectsTile from "./ProjectsTile";
import Projects_JSON from "../obj/Projects.json";

import { ReactComponent as ARROW_SVG } from "../assets/arrow-right.svg";
import { Link } from "react-router-dom";

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
  }, []);

  return (
    <div ref={anchor} id="projects" className="section">
      <div className="mobile-sticky-heading">
        <h2 className="text-2xl max-md:ml-8 md:text-3xl font-bold text-paragraph_dark uppercase">
          Projects
        </h2>
      </div>
      <div className="space-y-4">
        {Projects_JSON.map((json) => {
          return (
            <ProjectsTile
              id={json.id}
              key={json.id}
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
      <div className="mt-4 ml-4 inline-block [&>a>svg]:hover:ml-4">
        <Link to="/archives" className="inline-flex">
          <span className="flex align-center items-center uppercase font-bold link-hover">
            View Project Archive
          </span>
          <ARROW_SVG className="w-8 p-2 duration-300 transition-all" />
        </Link>
      </div>
    </div>
  );
}
