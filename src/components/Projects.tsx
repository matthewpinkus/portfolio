import React from "react";
import ProjectsTile from "./ProjectsTile";

export default function Projects() {
  return (
    <div id="projects" className="container">
      <h2 className="text-3xl font-bold mb-4 text-paragraph_dark uppercase">
        Projects
      </h2>
      <div className="space-y-4">
        <ProjectsTile
          title="Discord Bot"
          technology={["TypeScript", "JavaScript"]}
          description="An all purpose bot for my personal discord community."
          link="https://github.com/kaildrai/discord-bot"
        />

        <ProjectsTile
          title="Title"
          technology={["TypeScript", "JavaScript"]}
          description="Description"
          link="projects"
        />
      </div>
    </div>
  );
}
