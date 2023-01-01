import Image from "next/image";
import React from "react";
import Github from "./icons/github";
import Linkedin from "./icons/linkedin";
import Discord from "./icons/discord";

export default function AboutMe() {
  return (
    <div
      className="flex flex-col-reverse items-center lg:flex-row gap-x-10 p-10 lg:p-24"
      id="AboutMe"
    >
      <div className="flex flex-col justify-center text-xl font-bold">
        <div className="text-2xl text-center md:text-5xl">
          <h1 className="-mb-8 mt-2  md:-mb-12 ">Tomato Wilbur Yap</h1>
          <h1 className="wave-animation text-main-pink">Tomato Wilbur Yap</h1>
        </div>
        <ul className="text-center items-center flex flex-col mt-2">
          <li>
            <a>Software Engineering Student</a>
          </li>
          <li>
            <a>Website developer</a>
          </li>
          <li className="flex flex-row gap-x-5 mt-2">
            <a
              href="https://github.com/minegrass"
              className="border-b-2 border-main-white hover:border-main-pink pb-2"
            >
              <Github width={24} height={24} />
            </a>
            <a
              href="#"
              className="border-b-2 border-main-white hover:border-main-pink"
            >
              <Linkedin width={24} height={24} />
            </a>
            <a
              href="https://www.discordapp.com/users/354146574533656586"
              className="border-b-2 border-main-white hover:border-main-pink"
            >
              <Discord width={24} height={24} />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <Image
          alt="my-face"
          width={1024}
          height={1024}
          className="rounded-full w-40 h-40 md:w-80 md:h-80"
          src="/TomatoFace.png"
        />
      </div>
    </div>
  );
}
