import React from "react";
import GenericWorkExperienceSection from "./GenericWorkExperienceSection";

export default function WorkExperienceTile() {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4 text-paragraph_dark uppercase">
        Relevant Experience
      </h2>
      <div id="work-experience" className="space-y-4">
        <GenericWorkExperienceSection
          title="Web Developer & IT Consultant"
          company="Masters Agency"
          description="Masters Agency is a marketing company that offers comprehensive desgins, web development, 
                      marketing and IT maintenance services for over 30 clients. 
                      In my time here as the sole developer I have developed and continue to maintain over a half dozen websites, 
                      created custom widgets/effects with JS/CSS, liased with clients to understand and meet their requirements and 
                      deliver them in a timely manner."
          link="https://mastersagency.au"
          technology={[
            "Webflow",
            "WordPress",
            "HTML",
            "CSS",
            "JavaScript",
            "AWS",
          ]}
        />
        <GenericWorkExperienceSection
          title="Full Stack Developer"
          company="Yora Settlements"
          description="Creating "
          link="https://yora.tech"
          technology={["HTML", "CSS", "JavaScript"]}
        />
      </div>
    </div>
  );
}
