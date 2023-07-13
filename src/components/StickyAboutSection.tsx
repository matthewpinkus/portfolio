import React from "react";
import logo from "../assets/matthew-icon.png";
import { Link } from "react-router-dom";

export default function StickyAboutSection() {
  return (
    <div className="md:bg-bg_dark border-b-[.5px] border-paragraph_dark border-opacity-30 p-6 sticky top-0 left-0 flex justify-between md:p-0 md:flex-col md:h-full md:fixed md:top-0 md:left-0 md:shadow-[5px_0px_20px_0px_rgba(0,0,0,0.2)]">
      <div className="md:w-96 md:p-12">
        {/* Info wrapper */}
        <div className="md:p-6">
          {/* Icon wrapper */}
          <div className="w-14 md:w-28 md:mb-6 md:p-2 bg-secondary_dark rounded-full md:mx-auto">
            <img src={logo} className="mx-auto" />
          </div>
          <h1 className="md:block text-heading_dark font-bold text-xl text-center">
            Matthew Pinkus
          </h1>
          <h2 className="hidden md:block text-subheading_dark font-italic text-xl text-center">
            Software Engineer
          </h2>
        </div>

        {/* Link wrapper */}
        <div className="md:flex md:flex-col hidden mt-12 relative ">
          {/* Hover effect div */}
          <div className="bg-[#232323] h-11 border border-[white] border-opacity-80 rounded-md shadow-sm absolute top-0 left-0 right-0 bottom-auto" />
          <Link
            to="/"
            className="w-full h-11 z-[1] active:text-[#ffffff] text-[#ffffff55] hover:text-[white] transform"
          >
            <div className="flex items-center">
              <div className="w-12 h-12 p-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                  <rect width="256" height="256" fill="none" />
                  <polyline
                    points="40 64 112 128 40 192"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="8"
                  />
                  <line
                    x1="120"
                    y1="192"
                    x2="216"
                    y2="192"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="8"
                  />
                </svg>
              </div>
              <div className="align-middle w-full ml-2">Home</div>
            </div>
          </Link>
          <div className="nav-link-divider" />

          <Link
            to="/experience"
            className="w-full h-11 z-[1] active:text-[#ffffff] text-[#ffffff55]"
          >
            <div className="flex items-center ">
              <div className="w-12 h-12 p-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                  <rect width="256" height="256" fill="none" />
                  <path
                    d="M80,40c-64,0,0,88-64,88,64,0,0,88,64,88"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="8"
                  />
                  <path
                    d="M176,40c64,0,0,88,64,88-64,0,0,88-64,88"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="8"
                  />
                </svg>
              </div>
              <div className="text-paragraph_dark align-middle w-full ml-2">
                Experience
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
