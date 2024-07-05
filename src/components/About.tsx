import React, { Fragment, useEffect, useRef, useState } from "react";

export default function About() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const anchor: any = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    });
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

  const showLightbox = () => {
    return <video src="../assets/seinfield-arduino.mp4" />;
  };

  return (
    <div
      ref={anchor}
      id="about"
      className="section relative lg:pt-24 pt-6 text-paragraph_dark_low"
    >
      <Fragment>
        <div className="mobile-sticky-heading">
          <h2 className="text-2xl max-md:ml-8 md:text-3xl font-bold text-paragraph_dark uppercase">
            About
          </h2>
        </div>
        <div className="p-4">
          <p className="mb-2">
            Ever since I was 4 years old I have been encouraged to pursue my passion for
            technology, which has led me well down the many rabbit holes of
            Computer Science. My pursuit eventually landed me at Western Sydney
            University to study Computer Science, where I graduated my bachelors
            in September 2022.
          </p>

          <p className="mb-2">
            While taking on many spontaneous projects to find my preferred field of
            expertise, including a
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/matthewpinkus/discord-bot"
              className="link"
            >
              {" "}
              TypeScript Discord bot
            </a>
            ,
            <a onClick={showLightbox} className="link cursor-pointer">
              {" "}
              Seinfield themed door-opener{" "}
            </a>
            to annoy my housemates and a
            <a target="_blank" href="" className="link">
              {" "}
              Raspberry Pi server
            </a>
            , I have landed in Web Development.
          </p>

          <p className="mb-2">
            Professionally, I create websites using React, Webflow and WordPress on a contractual basis while working full time to maintain and develop custom software for 
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.micway.com.au"
              className="link"
            >
              {" "}
              Micway Transport
            </a>
            .
          </p>
          
          <p>
            In my free time I like to play couch co-op games with my girlfriend, annoy our cat and read epic fantasy series. <a className="link">(Huge Brandon Sanderson nerd!)</a>
          </p>
        </div>
      </Fragment>
    </div>
  );
}
