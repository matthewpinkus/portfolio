import React from "react";
import logo from "../assets/matthew-icon.png";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as BRACKETS_SVG } from "../assets/brackets.svg";
import { ReactComponent as TERMINAL_SVG } from "../assets/terminal.svg";
import { ReactComponent as ADDRESS_SVG } from "../assets/address-book.svg";
import { ReactComponent as LAPTOP_SVG } from "../assets/laptop.svg";
import { ReactComponent as USER_SVG } from "../assets/user-focus.svg";
import { ReactComponent as GITHUB_SVG } from "../assets/github.svg";
import { ReactComponent as CODESYMBOL_SVG } from "../assets/code-symbol.svg";
import { ReactComponent as LINKEDIN_SVG } from "../assets/linkedin.svg";
import { ReactComponent as _GITHUB_SVG } from "../assets/github-full.svg";
import { ReactComponent as _CODESYMBOL_SVG } from "../assets/code-symbol-full.svg";
import { ReactComponent as _LINKEDIN_SVG } from "../assets/linkedin-full.svg";
import NavItem from "./NavItem";

export default function StickyAboutSection() {
  return (
    <div className="bg-bg_dark border-b-[.5px] border-paragraph_dark border-opacity-30 p-6 sticky top-0 left-0 flex justify-between md:p-0 md:flex-col md:h-full md:fixed md:top-0 md:left-0 md:shadow-[5px_0px_20px_0px_rgba(0,0,0,0.2)]">
      <div className="md:w-96 md:p-12">
        {/* Info wrapper */}
        <div className="flex md:p-6 md:flex-col">
          {/* Icon wrapper */}
          <div className="w-14 md:w-28 md:mb-6 md:p-2  bg-secondary_dark rounded-full md:mx-auto">
            <img src={logo} className="mx-auto" />
          </div>
          <div className="ml-8 md:ml-0">
            <h1 className="text-heading_dark font-bold text-2xl text-center">
              Matthew Pinkus
            </h1>
            <h2 className="italic md:block text-subheading_dark font-italic text-xl md:text-center">
              Software Engineer
            </h2>
          </div>
        </div>

        {/* Link wrapper */}
        <div
          id="nav-link-wrapper"
          className="md:flex md:flex-col hidden mt-12 relative text-paragraph_dark_low"
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
            <NavItem title="Home" SVG={TERMINAL_SVG} />
            {/* <div
              id="active-wrapper"
              className="bg-[#232323] transition ease-in-out h-11 border border-[white] border-opacity-80 rounded-md shadow-sm absolute top-0.5 left-0 right-0 "
            /> */}
          </Link>
          <div className="nav-link-divider" />

          <Link
            id="nav-link-2"
            to="/experience"
            className={`nav-link ${
              useLocation().pathname === "/experience"
                ? "text-[#ffffff]"
                : "text-paragraph_dark_low"
            }`}
          >
            <NavItem title="Experience" SVG={BRACKETS_SVG} />
          </Link>
          <div className="nav-link-divider" />

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
          <div className="nav-link-divider" />

          <Link
            id="nav-link-4"
            to="/about"
            className={`nav-link ${
              useLocation().pathname === "/about"
                ? "text-[#ffffff]"
                : "text-paragraph_dark_low"
            }`}
          >
            <NavItem title="About" SVG={USER_SVG} />
          </Link>

          <div className="nav-link-divider" />

          <Link
            id="nav-link-5"
            to="/contact"
            className={`nav-link ${
              useLocation().pathname === "/contact"
                ? "text-[#ffffff]"
                : "text-paragraph_dark_low"
            }`}
          >
            <NavItem title="Contact" SVG={ADDRESS_SVG} />
          </Link>
          <div className="nav-link-divider" />
        </div>
      </div>
      {/* Bottom wrapper for social icons? */}
      <div
        id="social-icons"
        className="hidden md:flex px-12 py-4 border-t-[0.5px] border-paragraph_dark border-opacity-30"
      >
        <Link
          className="relative"
          target="_blank"
          to={"https://www.linkedin.com/in/matthewpinkus/"}
        >
          <LINKEDIN_SVG className="social-icon" />
          <_LINKEDIN_SVG className="social-icon-full absolute top-0 hidden" />
        </Link>
        <Link
          className="relative"
          target="_blank"
          to={"https://github.com/kaildrai"}
        >
          <GITHUB_SVG className="social-icon" />
          <_GITHUB_SVG className="social-icon-full absolute top-0 hidden" />
        </Link>
        <Link
          className="relative"
          target="_blank"
          to={"https://leetcode.com/mattaswell1/"}
        >
          <CODESYMBOL_SVG className="social-icon" />
          <_CODESYMBOL_SVG className="social-icon-full absolute top-0 hidden" />
        </Link>
      </div>

      {/* //TODO: Side nav drawer on click */}
      <div className="md:hidden cursor-pointer bg-primary_dark flex flex-col justify-between h-12 w-12 items-center my-auto p-4 py-5 border rounded-lg">
        <div className="nav-line-top" />
        <div className="nav-line-bottom" />
      </div>
    </div>
  );
}
