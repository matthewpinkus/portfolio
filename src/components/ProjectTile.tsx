import React from "react";
import GenericProjectSection from "./GenericProjectSection";

export default function ProjectTile() {
  return (
    <div
      id="projects"
      className="bg-bg_dark md:w-5/6 h-auto w-full ml-auto p-12 text-paragraph_dark space-y-16"
    >
      <GenericProjectSection
        title="Title"
        technology={["TypeScript", "JavaScript"]}
        description="Nobis ipsa eos commodi aut non qui. Voluptatem est beatae sed. Aliquam optio voluptatem sed ex. Sit voluptatum et non.
                    Commodi veritatis repudiandae sit harum tenetur sunt consectetur voluptatum. Fugiat maiores exercitationem enim labore 
                    inventore nulla at omnis. Sint sunt facere tempore. Quod ipsam suscipit fugiat quibusdam et commodi molestias eligendi."
        link="projects"
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
