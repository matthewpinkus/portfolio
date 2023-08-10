import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function About() {
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
    const anchor = document.getElementById("nav-about");
    if (isIntersecting) {
      anchor?.classList.add("text-paragraph_dark");
    } else {
      anchor?.classList.remove("text-paragraph_dark");
    }
  }, [isIntersecting]);
  return (
    <div
      ref={anchor}
      id="about"
      className="section relative md:pt-24 pt-6 text-paragraph_dark_low"
    >
      <div className="">
        <div className="mobile-sticky-heading">
          <h2 className="text-2xl max-md:ml-8 md:text-3xl font-bold text-paragraph_dark uppercase">
            About
          </h2>
        </div>
        <div className="p-4">
          <p className="mb-2">
            Back in '99, I built my first computer at age 4 (with my father
            acting as overseer).
          </p>

          <p className="mb-2">
            Ever since, I have been encouraged to pursue my passion for
            technology which has led me well down the many rabbit holes of
            Computer Science. My pursuit eventually landed me at Western Sydney
            University to study Computer Science, where I graduated my bachelors
            in September '22.
          </p>

          <p className="mb-2">
            Among taking on many spontaneous projects to find my field of
            expertise, including a
            <a href="https://github.com/kaildrai/discord-bot" className="link">
              {" "}
              TypeScript Discord bot
            </a>
            , a
            <a href="/" className="link">
              {" "}
              Seinfield themed door-opener{" "}
            </a>
            to annoy my housemates (built on an Arduino) and a headless Debian
            <a href="" className="link">
              {" "}
              NAS+ Raspberry Pi server
            </a>
            , I have taken up the mantle of Web Developer.
          </p>
          <p className="">
            Professionally, I build and maintain websites for our clients at
            <a href="www.mastersagency.au" className="link">
              {" "}
              Masters Agency
            </a>
            . In my free time I like to play couch co-op games with my
            girlfriend, annoy our cat and read epic fantasy series.
          </p>
        </div>
      </div>
    </div>
  );
}
