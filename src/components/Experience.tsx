import { useEffect, useRef, useState } from "react";
import Experience_JSON from "../obj/Experience.json";
import ExperienceTile from "./ExperienceTile";

import { ReactComponent as ARROW_SVG } from "../assets/arrow-right.svg";

export default function Experience() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const mobileAnimation: any = useRef(null);
  const anchor: any = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        rootMargin: "-35%",
      }
    );
    observer.observe(mobileAnimation.current);
    observer.observe(anchor.current);
    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting) {
      mobileAnimation.current.classList.add("[&>*]:max-md:opacity-30");
      document
        .getElementById("nav-experience")
        ?.classList.add("text-paragraph_dark");
    } else {
      mobileAnimation.current.classList.remove("[&>*]:max-md:opacity-30");
      document
        .getElementById("nav-experience")
        ?.classList.remove("text-paragraph_dark");
    }
  }, [isIntersecting]);

  return (
    <div ref={anchor} id="experience" className="section">
      <div className="mobile-sticky-heading">
        <h2 className="text-2xl max-md:ml-8 md:text-3xl font-bold text-subheading_dark_high uppercase">
          Relevant Experience
        </h2>
      </div>

      <div
        ref={mobileAnimation}
        id="work-experience"
        className="space-y-4 [&>*]:hover:opacity-30"
      >
        {Experience_JSON.map((json) => {
          return (
            <ExperienceTile
              id={json.id}
              date={json.date}
              company={json.company}
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
        <a
          href={process.env.PUBLIC_URL + "/resume.pdf"}
          rel="noopener noreferrer"
          target="_blank"
          className="inline-flex"
        >
          <span className="flex align-center items-center uppercase font-bold link-hover">
            View Resume
          </span>
          <ARROW_SVG className="w-8 p-2 duration-300 transition-all" />
        </a>
      </div>
    </div>
  );
}
