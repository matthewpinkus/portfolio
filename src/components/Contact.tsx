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
            <p className="mb-2">
                If you would like to contact me, please send me an email at hello [at] mpinkus [dot] com
            </p>
        </div>
    </div>
    );
}