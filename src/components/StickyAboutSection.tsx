import React from "react";
import logo from "../assets/matthew-icon.png";
import { Link } from "react-router-dom";

export default function StickyAboutSection() {
  return (
    <div className="bg-bg_dark md:h-full md:fixed md:top-0 md:left-0 md:shadow-[5px_0px_20px_0px_rgba(0,0,0,0.2)] sticky top-0 left-0">
      <div className="w-96 p-12 justify-between">
        {/* Info wrapper */}
        <div>
          {/* Icon wrapper */}
          <div className="w-28 mb-6 bg-secondary_dark rounded-full mx-auto">
            <img src={logo} className="mx-auto" />
          </div>
          <h1 className="text-heading_dark font-bold text-xl text-center">
            Matthew Pinkus
          </h1>
          <h2 className="text-subheading_dark font-italic text-xl text-center">
            Software Engineer
          </h2>
        </div>

        {/* Link wrapper */}
        <div className="mt-12 relative flex flex-col">
          {/* Hover effect div */}
          <div className="bg-[#232323] h-11 border border-[white] border-opacity-80 rounded-md shadow-sm absolute top-0 left-0 right-0 bottom-auto" />
          <Link
            to="/"
            className="w-full h-11 z-[1] active:text-[#ffffff] text-[#ffffff55]"
          >
            <div className="flex items-center">
              <div className="w-12 h-12 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  viewBox="0 0 256 256"
                >
                  <path d="M122.5,124.88a4,4,0,0,1,0,6.24l-40,32a4,4,0,0,1-5-6.24L113.6,128,77.5,99.12a4,4,0,0,1,5-6.24ZM176,156H136a4,4,0,0,0,0,8h40a4,4,0,0,0,0-8ZM228,56V200a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V56A12,12,0,0,1,40,44H216A12,12,0,0,1,228,56Zm-8,0a4,4,0,0,0-4-4H40a4,4,0,0,0-4,4V200a4,4,0,0,0,4,4H216a4,4,0,0,0,4-4Z"></path>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  viewBox="0 0 256 256"
                >
                  <path d="M122.5,124.88a4,4,0,0,1,0,6.24l-40,32a4,4,0,0,1-5-6.24L113.6,128,77.5,99.12a4,4,0,0,1,5-6.24ZM176,156H136a4,4,0,0,0,0,8h40a4,4,0,0,0,0-8ZM228,56V200a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V56A12,12,0,0,1,40,44H216A12,12,0,0,1,228,56Zm-8,0a4,4,0,0,0-4-4H40a4,4,0,0,0-4,4V200a4,4,0,0,0,4,4H216a4,4,0,0,0,4-4Z"></path>
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
    </div>
  );
}
