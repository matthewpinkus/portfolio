import React, { useEffect, useRef, useState } from "react";
import { TileProps } from "../interfaces/TileProps";
import { Link } from "react-router-dom";
import { ReactComponent as NewTab } from "../assets/newtab.svg";

export default function ExperienceTile({
  id,
  title,
  date,
  company,
  description,
  link,
  technology,
}: TileProps) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const tile: any = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        rootMargin: "-50%",
      }
    );
    observer.observe(tile.current);
    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting) {
      tile.current.classList.add("max-md:border-slide-in");
    } else {
      tile.current.classList.remove("max-md:border-slide-in");
    }
  }, [isIntersecting]);

  return (
    <div key={id} ref={tile} className="tile quart-in-out hover-border">
      <Link to={link} target="_blank" className="cursor-pointer">
        <NewTab
          id="new-tab-svg"
          className="nav-icon text-heading_dark hidden absolute top-2' right-2 w-8 h-8"
        />
        <span className="text-secondary_dark font-normal text-sm uppercase">{date}</span>
        <h2 className="h2">{company}</h2>
        <h3 className="h3 italic">{title}</h3>
        <p className="mb-8">{description}</p>
        <div>
          {technology?.map((title) => {
            return <div className="technology-tag">{title}</div>;
          })}
        </div>
      </Link>
    </div>
  );
}
