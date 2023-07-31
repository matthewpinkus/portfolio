import React from "react";
import logo from "../assets/matthew-icon.png";
import { Link, useLocation } from "react-router-dom";

import { ReactComponent as BRACKETS_SVG } from "../assets/brackets.svg";
import { ReactComponent as TERMINAL_SVG } from "../assets/terminal.svg";
import { ReactComponent as ADDRESS_SVG } from "../assets/address-book.svg";
import { ReactComponent as LAPTOP_SVG } from "../assets/laptop.svg";
import { ReactComponent as USER_SVG } from "../assets/user-focus.svg";
import { ReactComponent as GITHUB_SVG } from "../assets/github.svg";
import { ReactComponent as _GITHUB_SVG } from "../assets/github-full.svg";
import { ReactComponent as CODESYMBOL_SVG } from "../assets/code-symbol.svg";
import { ReactComponent as _CODESYMBOL_SVG } from "../assets/code-symbol-full.svg";
import { ReactComponent as LINKEDIN_SVG } from "../assets/linkedin.svg";
import { ReactComponent as _LINKEDIN_SVG } from "../assets/linkedin-full.svg";

import NavItem from "./NavItem";

export default function StickyAboutSection() {
  return (
    <div className="max-md:hidden w-80 fixed top-0 left-0 flex z-10 justify-between flex-col h-full">
      <div className="p-8">
        {/* Info wrapper */}
        <div className="flex p-6 flex-col">
          {/* Icon wrapper */}
          <div className="w-36 mb-6 p-2 mx-auto">
            <img src={logo} className="mx-auto" />
          </div>
          <div className="ml-0 flex items-center flex-col">
            <h1 className="block text-heading_dark font-bold text-2xl text-center">
              Matthew Pinkus
            </h1>
            <h2 className="block text-subheading_dark font-italic text-xl text-center">
              Full Stack Developer
            </h2>
          </div>
        </div>

        {/* Link wrapper */}
        <div
          id="nav-link-wrapper"
          className="flex flex-col mt-12 relative text-paragraph_dark_low"
        >
          {/* <div
            id="hover-wrapper"
            className="bg-[#232323] h-11 border border-[white] border-opacity-80 rounded-md shadow-sm absolute top-0 left-0 right-0 bottom-auto"
          /> */}
          <Link
            id="nav-link-1"
            to="/"
            className={`nav-link ${
              useLocation().pathname === "/"
                ? "text-[#ffffff]"
                : "text-paragraph_dark_low"
            }`}
          >
            <NavItem title="About" SVG={TERMINAL_SVG} />
            {/* <div
              id="active-wrapper"
              className="bg-[#232323] transition ease-in-out h-11 border border-[white] border-opacity-80 rounded-md shadow-sm absolute top-0.5 left-0 right-0 "
            /> */}
          </Link>

          <a
            id="nav-link-2"
            href="/#experience"
            className={`nav-link ${
              useLocation().pathname === "/experience"
                ? "text-[#ffffff]"
                : "text-paragraph_dark_low"
            }`}
          >
            <NavItem title="Experience" SVG={BRACKETS_SVG} />
          </a>

          <Link
            id="nav-link-3"
            to="/projects"
            className={`nav-link ${
              useLocation().pathname === "/projects"
                ? "text-[#ffffff]"
                : "text-paragraph_dark_low"
            }`}
          >
            <NavItem title="Projects" SVG={LAPTOP_SVG} />
          </Link>
        </div>
      </div>
      {/* Bottom wrapper for social icons? */}
      <div id="social-icons" className="flex p-12">
        <Link
          className="relative"
          target="_blank"
          to={"https://www.linkedin.com/in/matthewpinkus/"}
        >
          <LINKEDIN_SVG className="social-icon" />
          <_LINKEDIN_SVG className="social-icon-full absolute top-0 opacity-0" />
        </Link>
        <Link
          className="relative"
          target="_blank"
          to={"https://github.com/kaildrai"}
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
