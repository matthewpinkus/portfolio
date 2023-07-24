import React from "react";
import TileProps from "@interfaces/TileProps";
import { Link } from "react-router-dom";

export default function GenericWorkExperienceSection({
  title,
  company,
  description,
  link,
}: TileProps) {
  return (
    <div className="text-paragraph_dark_low">
      <h2 className="text-2xl mb-2 text-paragraph_dark">{company}</h2>
      <h3 className="text-1xl mb-4 font-bold italic">{title}</h3>
      <p className=" mb-8">{description}</p>
      <Link to={link} className="cursor-pointer">
        Read More
      </Link>
    </div>
  );
}
