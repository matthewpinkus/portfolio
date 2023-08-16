import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ARROW_SVG } from "../assets/arrow-right.svg";
import Archive_JSON from "../obj/Archive.json";

export default function Archive() {
  document.title = "Matthew Pinkus | Archives";

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (event: any) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const [sortedData, setSortedData] = useState([...Archive_JSON]);
  useEffect(() => {
    const sorted = [...sortedData].sort((a: any, b: any) => {
      a = a.date.split("-");
      b = b.date.split("-");
      return (
        new Date(b[1], b[0], 1).valueOf() - new Date(a[1], a[0], 1).valueOf()
      );
    });

    setSortedData(sorted);
  }, []);

  return (
    <div className="px-6 md:px-12 lg:px-24 lg:py-0 flex min-h-screen max-w-screen-xl font-sans justify-center mx-auto">
      <div
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
        className={"max-md:hidden inset-0 -z-30 fixed transition duration-300"}
      />

      <div className="flex w-full flex-col md:flex-col">
        <div className="section relative md:pt-24 pt-6 text-paragraph_dark">
          <div className="inline-block [&>a>svg]:hover:-translate-x-4">
            <Link to="/portfolio" className="inline-flex">
              <ARROW_SVG className="rotate-180 w-8 p-2 duration-300 transition-all" />
              <span className="flex align-center items-center uppercase font-bold link-hover">
                Matthew Pinkus
              </span>
            </Link>
          </div>

          <h2 className="text-4xl font-bold mb-12 uppercase">All Projects</h2>

          <table className="table">
            <thead>
              <tr className="[&>th]:pb-4">
                <th>Year</th>
                <th>Project</th>
                <th className="max-md:hidden">Made for</th>
                <th className="max-md:hidden">Technologies</th>
                <th className="hidden sm:block ">Link</th>
              </tr>
            </thead>

            <tbody>
              {sortedData.map((json) => {
                return (
                  <tr key={json.id} className="align-center [&>td]:p-2">
                    <td>{json.date.split("-")[1]}</td>
                    <td className="font-bold max-sm:hidden">{json.title}</td>

                    <td className="font-bold sm:hidden link">
                      <a href={json.link} target="_blank">
                        {json.title}
                      </a>
                    </td>
                    <td className="text-paragraph_dark_low text-sm max-md:hidden">
                      {json.company}
                    </td>
                    <td className="max-md:hidden">
                      {json.technologies.map((tech) => {
                        return (
                          <div className="technology-tag mb-1">{tech}</div>
                        );
                      })}
                    </td>
                    <td className="hidden sm:block">
                      <a
                        target="_blank"
                        className="link font-normal text-paragraph_dark_low text-sm"
                        href={json.link}
                      >
                        {json.link.split("//www.")[1]
                          ? json.link.split("//www.")[1]
                          : json.link.split("//")[1]}
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
