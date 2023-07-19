import React from "react";

export default function AboutTile() {
  return (
    <div className="p-8 text-paragraph_dark_low">
      <h1 className="text-5xl font-bold mb-4 text-paragraph_dark">
        Web Developer
      </h1>
      <p className="mb-2">
        I built my first computer at age 5, albeit with my father as an
        overseer.
      </p>
      <p className="mb-2">
        Ever since, I have been encouraged to pursue my passion for technology
        and have traveled well down the many rabbit holes of Computer Science.
        My pursuit eventually landed me at Western Sydney University to study
        Computer Science, where I graduated my bachelors in September '22.
      </p>
      <p className="mb-2">
        Among taking on many spontaneous projects to find my field of expertise,
        including a
        <a className="text-subheading_dark"> TypeScript Discord bot</a>, a
        <a className="text-subheading_dark"> Seinfield themed door-opener </a>
        to annoy my housemates (built on an Arduino) and a headless Debian
        <a className="text-subheading_dark"> NAS-like Raspberry Pi server</a>, I
        have taken up the mantle of Web Developer.
      </p>
      <p className="">
        Professionally, I build and maintain websites for our clients at
        <a className="text-subheading_dark"> Masters Agency</a>. In my free time
        I like to play couch co-op games with my girlfriend, annoy our cat and
        read epic fantasy series.
      </p>
    </div>
  );
}
