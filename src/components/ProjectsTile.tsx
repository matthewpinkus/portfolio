import React from "react";
import { TileProps } from "../interfaces/TileProps";
import { Link } from "react-router-dom";
import { ReactComponent as NewTab } from "../assets/newtab.svg";

export default function ProjectsTile({
  title,
  technology,
  description,
  link,
}: TileProps) {
  return (
    <div className="tile flex">
      <Link to={link} target="_blank" className="cursor-pointer flex">
        <NewTab
          id="new-tab-svg"
          className="nav-icon text-heading_dark hidden absolute top-2 right-2 w-8 h-8"
        />
        <img
          src="https://images.unsplash.com/photo-1682695794947-17061dc284dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          className="hidden md:flex max-h-24 max-w-24 mr-8"
        />
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
