import React from "react";
import StickyAboutSection from "../components/Nav";
import { Link } from "react-router-dom";
import { ReactComponent as ARROW_SVG } from "../assets/arrow-right.svg";
import Archive_JSON from "../obj/Archive.json";

export default function Archive() {
  return (
    <div className="px-6 md:px-12 lg:px-24 lg:py-0 flex min-h-screen max-w-screen-xl font-sans justify-center mx-auto">
      <div className="flex md:w-full flex-col md:flex-col">
        <div className="section relative md:pt-24 pt-6 text-paragraph_dark">
          <div className="inline-block [&>a>svg]:hover:-translate-x-4">
            <Link to="/" className="inline-flex">
              <ARROW_SVG className="rotate-180 w-8 p-2 duration-300 transition-all" />
              <span className="flex align-center items-center uppercase font-bold link-hover">
                Matthew Pinkus
              </span>
            </Link>
          </div>
          <h2 className="text-2xl max-md:ml-8 font-bold mb-4  uppercase">
            Archives
          </h2>

          <table className="border-collapse w-full [&>*>th]:text-left">
            <tr>
              <th aria-sort="descending">Year</th>
              <th>Project</th>
              <th>Company</th>
              <th>Technologies</th>
              <th>Link</th>
            </tr>
            {Archive_JSON.map((json) => {
              return (
                <tr>
                  <td>{json.year}</td>
                  <td>{json.title}</td>
                  <td>{json.company}</td>
                  <td>
                    {json.technologies.map((tech) => {
                      return <div className="technology-tag">{tech}</div>;
                    })}
                  </td>
                  <td>{json.link}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}
