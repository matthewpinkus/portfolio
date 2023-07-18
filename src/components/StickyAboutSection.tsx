import React from "react";
import logo from "../assets/matthew-icon.png";
import { Link } from "react-router-dom";
import { ReactComponent as Brackets_SVG } from "../assets/brackets.svg";
import { ReactComponent as Terminal_SVG } from "../assets/terminal.svg";
import { ReactComponent as Address_SVG } from "../assets/address-book.svg";
import { ReactComponent as Laptop_SVG } from "../assets/laptop.svg";
import { ReactComponent as User_SVG } from "../assets/user-focus.svg";

export default function StickyAboutSection() {
  return (
    <div className="md:bg-bg_dark border-b-[.5px] border-paragraph_dark border-opacity-30 p-6 sticky top-0 left-0 flex justify-between md:p-0 md:flex-col md:h-full md:fixed md:top-0 md:left-0 md:shadow-[5px_0px_20px_0px_rgba(0,0,0,0.2)]">
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
        <div className="md:flex md:flex-col hidden mt-12 relative text-[#ffffff55]">
          {/* Hover effect div */}
          <div className="bg-[#232323] h-11 border border-[white] border-opacity-80 rounded-md shadow-sm absolute top-0 left-0 right-0 bottom-auto" />

          <Link to="/" className="w-full h-11 z-[1]">
            <div className="flex items-center">
              <div className="nav-icon">
                <Terminal_SVG />
              </div>
              <div className="align-middle w-full ml-2">Home</div>
            </div>
          </Link>
          <div className="nav-link-divider" />

          <Link to="/experience" className="w-full h-11 z-[1]">
            <div className="flex items-center ">
              <div className="nav-icon">
                <Brackets_SVG />
              </div>
              <div className="text-paragraph_dark align-middle w-full ml-2">
                Experience
              </div>
            </div>
          </Link>
          <div className="nav-link-divider" />

          <Link to="/" className="w-full h-11 z-[1]">
            <div className="flex items-center ">
              <div className="nav-icon">
                <Laptop_SVG />
              </div>
              <div className="text-paragraph_dark align-middle w-full ml-2">
                Projects
              </div>
            </div>
          </Link>
          <div className="nav-link-divider" />

          <Link to="/" className="w-full h-11 z-[1]">
            <div className="flex items-center ">
              <div className="nav-icon">
                <User_SVG />
              </div>
              <div className="text-paragraph_dark align-middle w-full ml-2">
                About
              </div>
            </div>
          </Link>
          <div className="nav-link-divider" />
          <Link to="/" className="w-full h-11 z-[1]">
            <div className="flex items-center ">
              <div className="nav-icon">
                <Address_SVG />
              </div>
              <div className="text-paragraph_dark align-middle w-full ml-2">
                Contact
              </div>
            </div>
          </Link>
          <div className="nav-link-divider" />
        </div>
      </div>
      {/* Bottom wrapper for social icons? */}
      <div className="hidden md:flex p-12 border-t-[0.5px] border-paragraph_dark border-opacity-30"></div>

      {/* //TODO: Side nav drawer on click */}
      <div className="md:hidden bg-bg_dark flex flex-col justify-between h-12 w-12 items-center my-auto p-4 py-5 border rounded-lg">
        <div className="nav-line-top" />
        <div className="nav-line-bottom" />
      </div>
    </div>
  );
}
