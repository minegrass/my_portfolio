import React from "react";
const sampleData = [
  { title: "About Me", href: "#AboutMe" },
  { title: "Projects", href: "#projects" },
  { title: "Contact Me", href: "#ContactMe" },
];

export default function navbar() {
  return (
    <div className="bg-main-dark text-main-white shadow-md fixed w-full z-10">
      <div className="flex flex-row gap-x-10 font-bold justify-center items-center">
        {sampleData.map((item, index) => {
          return (
            <a
              key={index}
              href={item.href}
              className="p-2 hover:bg-main-white hover:text-main-pink transition-all duration-300 ease-in-out "
            >
              {item.title}
            </a>
          );
        })}
      </div>
    </div>
  );
}
