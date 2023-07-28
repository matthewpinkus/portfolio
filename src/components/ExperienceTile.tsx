import React from "react";
import { TileProps } from "../interfaces/TileProps";
import { Link } from "react-router-dom";
import { ReactComponent as NewTab } from "../assets/newtab.svg";

export default function ExperienceTile({
  title,
  company,
  description,
  link,
  technology,
}: TileProps) {
  return (
    <div className="tile">
      <Link to={link} target="_blank" className="cursor-pointer">
        <NewTab
          id="new-tab-svg"
          className="nav-icon text-heading_dark hidden absolute top-0 right-0"
        />
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
