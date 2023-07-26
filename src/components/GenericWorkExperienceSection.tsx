import React from "react";
import { TileProps } from "../interfaces/TileProps";
import { Link } from "react-router-dom";
import { ReactComponent as NewTab } from "../assets/newtab.svg";

export default function GenericWorkExperienceSection({
  title,
  company,
  description,
  link,
  technology,
}: TileProps) {
  return (
    <div className="tile">
      <Link to={link} target="_blank" className="cursor-pointer">
        <NewTab className="hover:hidden nav-icon absolute top-0 right-0" />
        <h2 className="text-2xl mb-2 text-paragraph_dark">{company}</h2>
        <h3 className="text-1xl mb-4 font-bold italic">{title}</h3>
        <p className=" mb-8">{description}</p>
        <div>
          {technology?.map((title) => {
            return (
              <div
                className="
            bg-bg_dark 
            text-subheading_dark
            inline-flex
            p-4
            mr-4
            font-bold
            rounded-full"
              >
                {title}
              </div>
            );
          })}
        </div>
      </Link>
    </div>
  );
}
