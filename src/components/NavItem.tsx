import React from "react";
import { NavProps } from "../interfaces/NavProps";

export default function NavItem({ title, SVG }: NavProps) {
  return (
    <div>
      <div className="flex items-center">
        <div className="nav-icon">
          <SVG />
        </div>
        <div className="align-middle w-full ml-2">{title}</div>
      </div>
    </div>
  );
}
