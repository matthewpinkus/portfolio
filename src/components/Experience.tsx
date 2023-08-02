import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

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
        rootMargin: "-150px",
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
        <h2 className="text-2xl max-md:ml-8 md:text-3xl font-bold text-paragraph_dark uppercase">
          Relevant Experience
        </h2>
      </div>
      <div
        ref={mobileAnimation}
        id="work-experience"
        className="space-y-4 [&>*]:hover:opacity-30"
      >
        <ExperienceTile
          title="Web Developer & IT Consultant"
          company="Masters Agency"
          description="In my time at Masters as the sole developer, I have developed and continue to maintain over a half dozen websites on Webflow and WordPress, 
                      created custom HTML/CSS/JS widgets, designs and animations, liased with clients to understand and meet their requirements to deliver them in a timely manner."
          link="https://mastersagency.au"
          technology={[
            "Webflow",
            "WordPress",
            "HTML",
            "CSS",
            "JavaScript",
            "AWS",
          ]}
        />
        <ExperienceTile
          title="Full Stack Developer"
          company="Yora Settlements"
          description="For multiple contracts, I created custom AWS OAuth authentication and routing for a single-page Svelte application,
                      implemented a password recovery system, developed the landing page & crypto chart tables for yora.tech"
          link="https://yora.tech"
          technology={[
            "HTML",
            "SCSS",
            "TypeScript",
            "JavaScript",
            "AWS",
            "REST API",
          ]}
        />
      </div>
      <a
        target="_blank"
        href="/resume.pdf"
        className="text-white ml-4 py-6 hover:underline hover:underline-offset-2"
      >
        <span className="inline-flex items-center uppercase font-bold">
          See full resume <ARROW_SVG className="w-10 h-10 p-2" />
        </span>
      </a>
    </div>
  );
}
