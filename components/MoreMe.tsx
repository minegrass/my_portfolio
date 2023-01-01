import Image from "next/image";
import React, { useState } from "react";
import { LangArr } from "../data/langData";
import { FrameworkArr } from "../data/FrameworkData";
import { toolsArr } from "../data/toolsData";
const myInfo = [
  { title: "Languages", data: LangArr },
  { title: "Frameworks", data: FrameworkArr },
  { title: "Tools", data: toolsArr },
];

export default function MoreMe() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center">
      <a
        onClick={() => {
          setOpened((prev) => !prev);
        }}
        className="text-3xl mb-5 font-bold border-r-2 border-b-2 border-main-dark bg-main-pink hover:bg-red-500 text-main-white px-2 rounded-full shadow-lg py-1 hover:cursor-pointer rainbbow-hover "
      >
        {opened ? "Less" : "More"} About Me..
      </a>
      <div
        className={`${
          opened ? "block" : "hidden"
        } animation-grow-down bg-main-grey font-bold text-main-white shadow-lg p-10 mt-2 rounded-md `}
      >
        <div>
          {myInfo.map((section, index) => {
            return (
              <div key={index} className="mb-2">
                <div className="text-xl">{section.title} :</div>
                <ul className="flex flex-row gap-x-5 mt-3 items-center px-5 text-xl">
                  {section.data.map((item, index) => {
                    return (
                      <li key={index} className="group relative">
                        <div className="absolute -top-5 left-3 opacity-80 text-main-pink hidden group-hover:block ">
                          {item.alt}
                        </div>
                        <Image
                          className="p-2 bg-main-white rounded-full w-24 h-24"
                          src={item.src}
                          alt={item.alt}
                          width={1024}
                          height={1024}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
