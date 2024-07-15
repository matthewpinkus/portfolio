import React, { useEffect, useRef, useState } from "react";

export default function Contact() {
const [isIntersecting, setIsIntersecting] = useState(false);
  const anchor: any = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    });
    observer.observe(anchor.current);
    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    const anchor = document.getElementById("nav-about");
    if (isIntersecting) {
      anchor?.classList.add("text-paragraph_dark");
    } else {
      anchor?.classList.remove("text-paragraph_dark");
    }
  }, [isIntersecting]);

    return (
    <div ref={anchor} id="contact" className="section">
        <div className="mobile-sticky-heading">
            <h2 className="text-2xl max-md:ml-8 md:text-3xl font-bold text-subheading_dark_high uppercase">
                Contact
            </h2>
        </div>
        <div className="p-4">
            <p className="mb-2 flex flex-col">
                <span>
                    If you would like to contact me for contract work involving <a className="link text-nowrap" href="/archives">Webflow</a> or Front-end React development, please send me an email at:
                </span>
                <span className="mt-2 ">
                    {" "} hello<span className="text-subheading_dark_high font-bold">[at]</span>mpinkus<span className="text-subheading_dark_high font-bold">[dot]</span>com
                </span>
                <span className="mt-4 font text-secondary_dark font-light text-sm">
                    (not a hyperlink to prevent spam)
                </span>
            </p>
        </div>
    </div>
    );
}