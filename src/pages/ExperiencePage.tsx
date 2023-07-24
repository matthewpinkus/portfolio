import React from "react";
import GenericWorkExperienceSection from "@components/GenericWorkExperienceSection";
import StickyAboutSection from "@components/StickyAboutSection";

export default function ExperiencePage() {
  return (
    <div className="ml-96 bg-primary_dark">
      <div className="flex flex-col md:flex-row">
        <StickyAboutSection />
        <GenericWorkExperienceSection
          title="Web Developer & IT Consultant"
          company="Masters Agency"
          description="Nobis ipsa eos commodi aut non qui. Voluptatem est beatae sed. Aliquam optio voluptatem sed ex. Sit voluptatum et non.
                                Commodi veritatis repudiandae sit harum tenetur sunt consectetur voluptatum. Fugiat maiores exercitationem enim labore 
                                inventore nulla at omnis. Sint sunt facere tempore. Quod ipsam suscipit fugiat quibusdam et commodi molestias eligendi."
          link=""
        />
      </div>
    </div>
  );
}
