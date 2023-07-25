import React from "react";
import GenericWorkExperienceSection from "./GenericWorkExperienceSection";

export default function WorkExperienceTile() {
  return (
    <div className="p-4">
      <h2 className="text-4xl font-bold mb-4 text-paragraph_dark uppercase">
        Experience
      </h2>
      <GenericWorkExperienceSection
        title="Web Developer & IT Consultant"
        company="Masters Agency"
        description="Nobis ipsa eos commodi aut non qui. Voluptatem est beatae sed. Aliquam optio voluptatem sed ex. Sit voluptatum et non.
                    Commodi veritatis repudiandae sit harum tenetur sunt consectetur voluptatum. Fugiat maiores exercitationem enim labore 
                    inventore nulla at omnis. Sint sunt facere tempore. Quod ipsam suscipit fugiat quibusdam et commodi molestias eligendi."
        link="experience"
      />
    </div>
  );
}
