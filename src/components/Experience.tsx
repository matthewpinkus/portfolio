import { useEffect, useRef, useState } from "react";
import ExperienceTile from "./ExperienceTile";
import { Link } from "react-router-dom";

import { ReactComponent as ARROW_SVG } from "../assets/arrow-right.svg";

export default function Experience() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const mobileAnimation: any = useRef(null);

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
    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting) {
      mobileAnimation.current.classList.add("[&>*]:max-md:opacity-30");
    } else {
      mobileAnimation.current.classList.remove("[&>*]:max-md:opacity-30");
    }
  }, [isIntersecting]);

  return (
    <div id="experience" className="container">
      <div className="mobile-sticky-heading">
        <h2 className="text-2xl max-md:ml-4 md:text-3xl font-bold text-paragraph_dark uppercase">
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
          description="Masters Agency is a marketing company that offers comprehensive desgins, web development, 
                      marketing and IT maintenance services for over 30 clients. 
                      In my time here as the sole developer I have developed and continue to maintain over a half dozen websites on Webflow and WordPress, 
                      created custom widgets, designs and animations with JS/CSS, liased with clients to understand and meet their requirements and 
                      deliver them in a timely manner."
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
          description="In a solo or two-person team, I created custom AWS OAuth authentication and routing for a single-page Svelte application,
                      implemented a password recovery system, developed the landing page & crypto chart tables for yora.tech."
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
        <div></div>
      </div>
      <Link
        to="/experience"
        className="text-white py-6 hover:underline hover:underline-offset-2"
      >
        <span className="inline-flex items-center uppercase ">
          See all experience <ARROW_SVG className="w-10 h-10 p-2" />
        </span>
      </Link>
    </div>
  );
}
