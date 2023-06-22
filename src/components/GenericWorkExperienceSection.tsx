import React from "react";
import { TileProps } from "../interfaces/TileProps";
import { Link } from "react-router-dom";

export default function GenericWorkExperienceSection({
  title,
  company,
  description,
  link,
}: TileProps) {
  return (
    <div>
      <h2 className="text-heading_dark text-5xl mb-2">{company}</h2>
      <h3 className="text-subheading_dark text-3xl mb-4 font-bold italic">
        {title}
      </h3>
      <p className="text-paragraph_dark mb-6">{description}</p>
      <Link to={link} className="text-heading_dark inline-flex cursor-pointer">Read More</Link>
    </div>
  );
}
