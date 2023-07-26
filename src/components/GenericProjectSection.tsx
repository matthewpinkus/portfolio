import React from "react";
import { TileProps } from "../interfaces/TileProps";
import { Link } from "react-router-dom";

export default function GenericProjectSection({
  title,
  technology,
  description,
  link,
}: TileProps) {
  return (
    <Link target="_blank" to={link} className="">
      <h2 className="text-paragraph_dark text-xl mb-4">{title}</h2>
      <p className="text-paragraph_dark_low mb-8">{description}</p>
      {technology?.map((title) => {
        return (
          <div
            className="
            bg-bg_dark 
            text-subheading_dark
            inline-flex
            p-4
            mr-4
            mb-16
            font-bold
            rounded-full"
          >
            {title}
          </div>
        );
      })}
    </Link>
  );
}
