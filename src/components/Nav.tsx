import React from "react";
import logo from "../assets/matthew-icon.png";
import { Link } from "react-router-dom";

import { ReactComponent as BRACKETS_SVG } from "../assets/brackets.svg";
import { ReactComponent as TERMINAL_SVG } from "../assets/terminal.svg";
import { ReactComponent as LAPTOP_SVG } from "../assets/laptop.svg";
import { ReactComponent as GITHUB_SVG } from "../assets/github.svg";
import { ReactComponent as _GITHUB_SVG } from "../assets/github-full.svg";
import { ReactComponent as CODESYMBOL_SVG } from "../assets/code-symbol.svg";
import { ReactComponent as _CODESYMBOL_SVG } from "../assets/code-symbol-full.svg";
import { ReactComponent as LINKEDIN_SVG } from "../assets/linkedin.svg";
import { ReactComponent as _LINKEDIN_SVG } from "../assets/linkedin-full.svg";

import NavItem from "./NavItem";

export default function Nav() {
  return (
    <div className="section lg:pt-24 lg:w-1/2 lg:sticky lg:top-0 lg:left-0 lg:flex z-10 lg:justify-between lg:flex-col lg:h-full lg:min-h-screen">
      <div className="max-lg:p-4">
        {/* Info wrapper */}
        <div className="flex flex-col">
          {/* Icon wrapper */}
          <div className="max-lg:hidden w-1/3 mb-6">
            <img src={logo} />
          </div>
          <div className="max-md:mt-8 ml-0 flex flex-col">
            <h1 className="block text-4xl text-subheading_dark font-bold">
              Matthew Pinkus
            </h1>
            <h2 className="block text-2xl text-heading_dark font-bold font-italic">
              Web Developer
            </h2>
          </div>
        </div>

        {/* Link wrapper */}
        <ul
          id="nav-link-wrapper"
          className="max-lg:hidden flex flex-col mt-12 space-y-2 relative text-paragraph_dark_low"
        >
          <li>
            <Link id="nav-about" to="#about" className="nav-link">
              <NavItem title="About" SVG={TERMINAL_SVG} />
            </Link>
          </li>

          <li>
            <Link id="nav-experience" to="#experience" className="nav-link">
              <NavItem title="Experience" SVG={BRACKETS_SVG} />
            </Link>
          </li>

          <li>
            <Link id="nav-projects" to="#projects" className="nav-link">
              <NavItem title="Projects" SVG={LAPTOP_SVG} />
            </Link>
          </li>
        </ul>
      </div>

      {/* Bottom wrapper for social icons? */}
      <div
        id="social-icons"
        className="max-lg:p-4 flex -ml-2 lg:mt-24 lg:mb-36 lg:h-full"
      >
        <Link
          className="relative hover:text-subheading_dark"
          target="_blank"
          to={"https://www.linkedin.com/in/matthewpinkus/"}
        >
          <LINKEDIN_SVG className="social-icon" />
          <_LINKEDIN_SVG className="social-icon-full absolute top-0 opacity-0" />
        </Link>
        <Link
          className="relative"
          target="_blank"
          to={"https://github.com/matthewpinkus"}
        >
          <GITHUB_SVG className="social-icon" />
          <_GITHUB_SVG className="social-icon-full absolute top-0 opacity-0" />
        </Link>
        <Link
          className="relative"
          target="_blank"
          to={"https://leetcode.com/mattaswell1/"}
        >
          <CODESYMBOL_SVG className="social-icon" />
          <_CODESYMBOL_SVG className="social-icon-full absolute top-0 opacity-0" />
        </Link>
      </div>
    </div>
  );
}
