import React from "react";
import { NavProps } from "../interfaces/NavProps";

export default function NavItem({ title, SVG }: NavProps) {
  return (
    <div>
      <div className="flex items-center [&>svg]:h-10">
        <SVG width={256} height={256}/>
        <span className="align-middle w-full ml-12 uppercase text-sm font-bold">
          {title}
        </span>
      </div>
    </div>
  );
}
