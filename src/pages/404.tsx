import { Fragment, useEffect, useState } from "react";
import { ReactComponent as ARROW_SVG } from "../assets/arrow-right.svg";

export default function NotFound() {
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

    return (
        <Fragment>
            <div
                style={{
                background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
                }}
                className={"max-md:hidden inset-0 -z-30 fixed transition duration-300"}
            />
            <div className="flex flex-col justify-center items-center h-screen">
                <h1 className="md:text-6xl text-heading_dark text-2xl mb-2 font-bold">Page Not Found</h1>
                <div className="mt-4 ml-4 inline-block [&>a>svg]:hover:mr-4 text-paragraph_dark_low">
                    <a
                    href={process.env.PUBLIC_URL + "/"}
                    rel="noopener noreferrer"
                    className="inline-flex"
                    >
                        <ARROW_SVG className="w-8 p-2 rotate-180 duration-300 transition-all" />
                        <span className="flex align-center items-center uppercase font-bold link-hover">
                            Go Back
                        </span>
                    </a>
                </div>
            </div>
        </Fragment>    
    );
}