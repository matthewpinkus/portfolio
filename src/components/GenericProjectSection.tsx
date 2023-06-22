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
    <div>
      <h2 className="text-heading_dark text-5xl mb-2">{title}</h2>
      <p className="text-paragraph_dark mb-6">{description}</p>
      {technology?.map((title) => {
        return (
          <div
            className="
            bg-primary_dark 
            text-subheading_dark 
            inline-flex
            p-4
            mr-4
            mb-4
            font-bold
            rounded-full"
          >
            {title}
          </div>
        );
      })}
      <Link 
        to={link} 
        className="text-heading_dark flex cursor-pointer transition-all duration-300 ease-in-out hover:font-bold">
        Read More
      </Link>
    </div>
  );
}
