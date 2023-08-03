import React from "react";
import { TileProps } from "../interfaces/TileProps";
import { Link } from "react-router-dom";
import { ReactComponent as NewTab } from "../assets/newtab.svg";

export default function ProjectsTile({
  title,
  technology,
  description,
  link,
  img,
}: TileProps) {
  return (
    <div className="tile flex">
      <Link to={link} target="_blank" className="cursor-pointer flex">
        <NewTab
          id="new-tab-svg"
          className="nav-icon text-heading_dark hidden absolute top-2 right-2 w-8 h-8"
        />
        <img src={img} className="hidden md:flex max-h-24 max-w-24 mr-8" />
        <div className="flex flex-col">
          <h3 className="h3 italic">{title}</h3>
          <p className="mb-8">{description}</p>
          <div>
            {technology?.map((title) => {
              return <div className="technology-tag">{title}</div>;
            })}
          </div>
        </div>
      </Link>
    </div>
  );
}
