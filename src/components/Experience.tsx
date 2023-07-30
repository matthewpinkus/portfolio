import { useEffect, useRef, useState } from "react";
import ExperienceTile from "./ExperienceTile";

export default function Experience() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const mobileAnimation: any = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        rootMargin: "-150px",
      }
    );
    observer.observe(mobileAnimation.current);
    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting) {
      mobileAnimation.current.classList.add("[&>*]:max-lg:opacity-30");
    } else {
      mobileAnimation.current.classList.remove("[&>*]:max-lg:opacity-30");
    }
  }, [isIntersecting]);

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4 text-paragraph_dark uppercase">
        Relevant Experience
      </h2>
      <div
        ref={mobileAnimation}
        id="work-experience"
        className="space-y-4 [&>*]:hover:opacity-30"
      >
        <ExperienceTile
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
        <ExperienceTile
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
