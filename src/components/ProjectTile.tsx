import React from "react";
import GenericProjectSection from "./GenericProjectSection";

export default function ProjectTile() {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4 text-paragraph_dark uppercase">
        Projects
      </h2>
      <div className="space-y-4">
        <GenericProjectSection
          title="Discord Bot"
          technology={["TypeScript", "JavaScript"]}
          description="An all purpose bot for my personal discord community."
          link="https://github.com/kaildrai/discord-bot"
        />

        <GenericProjectSection
          title="Title"
          technology={["TypeScript", "JavaScript"]}
          description="Description"
          link="projects"
        />
      </div>
    </div>
  );
}
