import React from "react";

export default function About() {
  return (
    <div className="container text-paragraph_dark_low">
      <p className="mb-2">
        Back in '99, I built my first computer at age 4 (with my father acting
        as overseer).
      </p>

      <p className="mb-2">
        Ever since, I have been encouraged to pursue my passion for technology
        which has led me well down the many rabbit holes of Computer Science. My
        pursuit eventually landed me at Western Sydney University to study
        Computer Science, where I graduated my bachelors in September '22.
      </p>

      <p className="mb-2">
        Among taking on many spontaneous projects to find my field of expertise,
        including a
        <a
          href="https://github.com/kaildrai/discord-bot"
          className="text-paragraph_dark hover:text-subheading_dark font-bold"
        >
          {" "}
          TypeScript Discord bot
        </a>
        , a
        <a
          href="/"
          className="text-paragraph_dark hover:text-subheading_dark font-bold"
        >
          {" "}
          Seinfield themed door-opener{" "}
        </a>
        to annoy my housemates (built on an Arduino) and a headless Debian
        <a
          href=""
          className="text-paragraph_dark hover:text-subheading_dark font-bold"
        >
          {" "}
          NAS+ Raspberry Pi server
        </a>
        , I have taken up the mantle of Web Developer.
      </p>
      <p className="">
        Professionally, I build and maintain websites for our clients at
        <a
          href="www.mastersagency.au"
          className="text-paragraph_dark hover:text-subheading_dark font-bold"
        >
          {" "}
          Masters Agency
        </a>
        . In my free time I like to play couch co-op games with my girlfriend,
        annoy our cat and read epic fantasy series.
      </p>
    </div>
  );
}