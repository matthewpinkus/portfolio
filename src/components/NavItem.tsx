import React from "react";
import { NavProps } from "../interfaces/NavProps";

export default function NavItem({ title, SVG }: NavProps) {
  return (
    <div>
      <div className="flex items-center [&>svg]:h-12">
        <SVG />
        <div className="align-middle w-full ml-10">{title}</div>
      </div>
    </div>
  );
}
