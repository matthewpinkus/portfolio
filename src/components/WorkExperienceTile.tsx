import React from "react";
import GenericWorkExperienceSection from "./GenericWorkExperienceSection";
import { WorkExperienceProps } from "../interfaces/WorkExperienceProps";

export default function WorkExperienceTile() {
  return (
    <div
      id="experience"
      className="bg-bg_dark md:w-9/12 h-auto w-full ml-auto p-12 text-paragraph_dark space-y-16"
    >
      <GenericWorkExperienceSection
        title="Web Developer & IT Consultant"
        company="Masters Agency"
        description="Nobis ipsa eos commodi aut non qui. Voluptatem est beatae sed. Aliquam optio voluptatem sed ex. Sit voluptatum et non.
                    Commodi veritatis repudiandae sit harum tenetur sunt consectetur voluptatum. Fugiat maiores exercitationem enim labore 
                    inventore nulla at omnis. Sint sunt facere tempore. Quod ipsam suscipit fugiat quibusdam et commodi molestias eligendi."
        link="/"
      />
      <GenericWorkExperienceSection
        title="Title"
        company="Company"
        description="Description"
        link="/"
      />
    </div>
  );
}
