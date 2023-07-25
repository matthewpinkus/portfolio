import React from "react";
import GenericProjectSection from "./GenericProjectSection";

export default function ProjectTile() {
  return (
    <div className="p-4">
      <h2 className="text-4xl font-bold mb-4 text-paragraph_dark uppercase">
        Projects
      </h2>
      <GenericProjectSection
        title="Title"
        technology={["TypeScript", "JavaScript"]}
        description="Discord bot."
        link="https://github.com/kaildrai/discord-bot"
      />

      <GenericProjectSection
        title="Title"
        technology={["TypeScript", "JavaScript"]}
        description="Description"
        link="projects"
      />
    </div>
  );
}
