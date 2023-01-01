import React from "react";
import Github from "./icons/github";
import Linkedin from "./icons/linkedin";
import Discord from "./icons/discord";
import SendIcon from "./icons/send";

export default function ContactMe() {
  return (
    <div className="p-5" id="ContactMe">
      <div className="mb-5 flex justify-center items-center flex-col">
        <div className="text-4xl font-bold">Contact Me</div>
        <div className="text-xl">You can reach me by</div>
      </div>

      <div className="flex justify-center items-center flex-col">
        <a
          href="mailto: yapxh2004@hotmail.com"
          className=" rounded-full hover:text-main-pink flex flex-row items-center gap-x-2"
        >
          <div className="text-lg">Email : yapxh2004@hotmail.com</div>
          <SendIcon width={24} height={24} />
        </a>

        <li className="flex flex-row gap-x-3 mt-2">
          <a
            href="https://github.com/minegrass"
            className="border-b-2 border-main-white hover:border-main-pink"
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
      </div>
    </div>
  );
}
